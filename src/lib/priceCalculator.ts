/**
 * ═══════════════════════════════════════════════════════════════
 * 3D-Druck Kostenrechner – Hybrides Kalkulationsmodell
 * ═══════════════════════════════════════════════════════════════
 *
 * Reine Funktionen ohne Seiteneffekte.
 * Alle Parameter kommen aus pricingConfig.ts.
 *
 * Preistreiber-Hierarchie:
 *   1. Druckzeit (Haupttreiber)
 *   2. Materialkosten (sekundär)
 *   3. Setup/Handling (abgeschwächt, nicht linear)
 *   4. Größen-Skalierung (große Teile kosten mehr)
 */

import { PRICING_CONFIG, type ProcessType, type MaterialKey } from '@/data/pricingConfig';

// ── Eingabe-/Ausgabe-Typen ─────────────────────────────────

export interface BoundingBox {
  x: number; // mm
  y: number; // mm
  z: number; // mm
}

export interface CalculatorInput {
  process: ProcessType;
  materialKey: MaterialKey;
  layerHeight: number;      // mm
  wallThickness: number;    // mm
  quantity: number;
  /** Volumen in cm³ – aus STL oder Platzhalter */
  volumeCm3?: number;
  /** Oberfläche in cm² – aus STL oder Platzhalter */
  surfaceCm2?: number;
  /** Bounding Box in mm – aus STL oder Platzhalter */
  boundingBoxMm?: BoundingBox;
}

export interface PriceBreakdown {
  // Geometrie (aufgelöst)
  volumeCm3: number;
  surfaceCm2: number;
  boundingBoxMm: BoundingBox;
  maxDimensionMm: number;

  // Materialkosten
  materialWeightG: number;
  materialCostRaw: number;
  materialCost: number; // nach Sicherheitsfaktor

  // Druckzeit
  layerCount: number;
  printTimeMin: number;
  hourlyPrintRate: number;
  printCost: number;

  // Setup
  setupCost: number;

  // Größen-Skalierung
  sizeFactor: number;
  scaledUnitCost: number;

  // Mengenberechnung
  subtotalNet: number;
  quantityDiscountRate: number;
  quantityDiscountAmount: number;
  netAfterDiscount: number;

  // Zuschlag
  minimumOrderSurcharge: number;

  // Endergebnis
  finalNet: number;
  vatAmount: number;
  finalGross: number;

  // Kompatibilität mit PriceSummary
  materialCostPerPart: number;
  laborCostPerPart: number;
  rawUnitNet: number;
  totalTimeMin: number;
  orderValueDiscountRate: number;
  orderValueDiscountAmount: number;
}

// ── Hilfsfunktion: Schichtdickenfaktor ─────────────────────

function getLayerHeightFactor(layerHeight: number): number {
  const factors = PRICING_CONFIG.layerHeightFactor;
  if (layerHeight in factors) {
    return factors[layerHeight as keyof typeof factors];
  }
  const heights = Object.keys(factors).map(Number).sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (layerHeight <= heights[i]) return factors[heights[i] as keyof typeof factors];
  }
  return factors[heights[heights.length - 1] as keyof typeof factors];
}

// ── 1. Materialkosten ──────────────────────────────────────

function calculateMaterialCost(volumeCm3: number, materialKey: MaterialKey): {
  materialWeightG: number;
  materialCostRaw: number;
  materialCost: number;
} {
  const cfg = PRICING_CONFIG;
  const density = cfg.densityFactor[materialKey];
  const pricePerKg = cfg.materialPricePerKg[materialKey];

  const materialWeightG = volumeCm3 * density;
  const materialCostRaw = (materialWeightG / 1000) * pricePerKg;
  const materialCost = materialCostRaw * cfg.materialSafetyFactor;

  return { materialWeightG, materialCostRaw, materialCost };
}

// ── 2. Druckzeit (realistisch) ─────────────────────────────

function calculatePrintTime(
  volumeCm3: number,
  surfaceCm2: number,
  boundingBoxMm: BoundingBox,
  layerHeight: number,
  process: ProcessType,
): {
  layerCount: number;
  printTimeMin: number;
} {
  const cfg = PRICING_CONFIG;

  const layerCount = Math.ceil(boundingBoxMm.z / layerHeight);
  const lhFactor = getLayerHeightFactor(layerHeight);
  const processFactor = cfg.processTimeFactor[process];

  const rawTime =
    (volumeCm3 * cfg.volumeTimeFactor) +
    (surfaceCm2 * cfg.surfaceTimeFactor) +
    (layerCount * cfg.layerPenaltyFactor) +
    cfg.basePrintTimeMin;

  // Schichtdicken- und Verfahrensfaktor anwenden
  const printTimeMin = rawTime * lhFactor * processFactor;

  return { layerCount, printTimeMin };
}

// ── 3. Druckkosten pro Stunde ──────────────────────────────

function getHourlyPrintRate(maxDimensionMm: number): number {
  const cfg = PRICING_CONFIG;
  return maxDimensionMm >= cfg.largePrintThresholdMm
    ? cfg.hourlyPrintRateLarge
    : cfg.hourlyPrintRateSmall;
}

// ── 4. Setup-/Handlingkosten (fix) ─────────────────────────

function calculateSetupCost(): number {
  return PRICING_CONFIG.fixedSetupCost;
}

// ── 5. Größen-Skalierung ───────────────────────────────────

function calculateSizeFactor(maxDimensionMm: number): number {
  const cfg = PRICING_CONFIG;
  return 1 + (maxDimensionMm / cfg.sizeFactorReferenceMm) * cfg.sizeFactorSlope;
}

// ── 6. Mengenrabatt ────────────────────────────────────────

function getQuantityDiscount(quantity: number): number {
  for (const tier of PRICING_CONFIG.quantityDiscounts) {
    if (quantity >= tier.minQty) return tier.rate;
  }
  return 0;
}

// ── 7. Mindermengenzuschlag ────────────────────────────────

function getMinimumOrderSurcharge(netValue: number): number {
  const cfg = PRICING_CONFIG;
  return netValue < cfg.minimumOrderThresholdNet ? cfg.minimumOrderSurchargeNet : 0;
}

// ── Gesamtberechnung ────────────────────────────────────────

export function calculateFinalPrice(input: CalculatorInput): PriceBreakdown {
  const cfg = PRICING_CONFIG;

  // Geometrie auflösen
  const volumeCm3 = input.volumeCm3 ?? cfg.placeholderGeometry.volumeCm3;
  const surfaceCm2 = input.surfaceCm2 ?? cfg.placeholderGeometry.surfaceCm2;
  const boundingBoxMm = input.boundingBoxMm ?? cfg.placeholderGeometry.boundingBoxMm;
  const maxDimensionMm = Math.max(boundingBoxMm.x, boundingBoxMm.y, boundingBoxMm.z);

  // 1. Materialkosten
  const mat = calculateMaterialCost(volumeCm3, input.materialKey);

  // 2. Druckzeit
  const time = calculatePrintTime(volumeCm3, surfaceCm2, boundingBoxMm, input.layerHeight, input.process);

  // 3. Druckkosten
  const hourlyPrintRate = getHourlyPrintRate(maxDimensionMm);
  const printCost = (time.printTimeMin / 60) * hourlyPrintRate;

  // 4. Setupkosten (fix)
  const setupCost = calculateSetupCost();

  // 5. Größen-Skalierung
  const sizeFactor = calculateSizeFactor(maxDimensionMm);
  const scaledUnitCost = (mat.materialCost + printCost + setupCost) * sizeFactor;

  // 6. Mengenberechnung
  const subtotalNet = scaledUnitCost * input.quantity;

  // 7. Mengenrabatt
  const quantityDiscountRate = getQuantityDiscount(input.quantity);
  const quantityDiscountAmount = subtotalNet * quantityDiscountRate;
  const netAfterDiscount = subtotalNet - quantityDiscountAmount;

  // 8. Mindermengenzuschlag
  const minimumOrderSurcharge = getMinimumOrderSurcharge(netAfterDiscount);

  // 9. Endpreis
  const finalNet = netAfterDiscount + minimumOrderSurcharge;
  const vatAmount = finalNet * cfg.vatRate;
  const finalGross = finalNet + vatAmount;

  return {
    // Geometrie
    volumeCm3,
    surfaceCm2,
    boundingBoxMm,
    maxDimensionMm,

    // Material
    materialWeightG: mat.materialWeightG,
    materialCostRaw: mat.materialCostRaw,
    materialCost: mat.materialCost,

    // Druckzeit
    layerCount: time.layerCount,
    printTimeMin: time.printTimeMin,
    hourlyPrintRate,
    printCost,

    // Setup
    setupCost,

    // Skalierung
    sizeFactor,
    scaledUnitCost,

    // Menge
    subtotalNet,
    quantityDiscountRate,
    quantityDiscountAmount,
    netAfterDiscount,

    // Zuschlag
    minimumOrderSurcharge,

    // Endergebnis
    finalNet,
    vatAmount,
    finalGross,

    // Kompatibilität mit PriceSummary
    materialCostPerPart: mat.materialCost,
    laborCostPerPart: printCost + setupCost,
    rawUnitNet: scaledUnitCost,
    totalTimeMin: time.printTimeMin,
    orderValueDiscountRate: 0,
    orderValueDiscountAmount: 0,
  };
}

// ── Testfälle ───────────────────────────────────────────────

export interface TestCase {
  label: string;
  input: CalculatorInput;
}

export const TEST_CASES: TestCase[] = [
  {
    label: 'FDM / PLA / 0.12mm / 1 Stk',
    input: {
      process: 'FDM',
      materialKey: 'PLA',
      layerHeight: 0.12,
      wallThickness: 1.2,
      quantity: 1,
    },
  },
  {
    label: 'FDM / PLA / 0.20mm / 1 Stk',
    input: {
      process: 'FDM',
      materialKey: 'PLA',
      layerHeight: 0.20,
      wallThickness: 1.6,
      quantity: 1,
    },
  },
  {
    label: 'SLA / Resin / 5 Stk',
    input: {
      process: 'SLA',
      materialKey: 'RESIN',
      layerHeight: 0.12,
      wallThickness: 0.8,
      quantity: 5,
    },
  },
  {
    label: 'SLS / PA12 / 20 Stk',
    input: {
      process: 'SLS',
      materialKey: 'PA12',
      layerHeight: 0.12,
      wallThickness: 1.0,
      quantity: 20,
    },
  },
];
