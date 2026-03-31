/**
 * ═══════════════════════════════════════════════════════════════
 * 3D-Druck Kostenrechner – Berechnungslogik (Pricing Engine)
 * ═══════════════════════════════════════════════════════════════
 *
 * Reine Funktionen ohne Seiteneffekte.
 * Alle Parameter kommen aus pricingConfig.ts.
 *
 * Später erweiterbar mit echten STL-Daten (Volumen, Oberfläche,
 * Bounding Box) – aktuell werden Platzhalterwerte genutzt.
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
  // Kosten pro Stück
  materialCostPerPart: number;
  laborCostPerPart: number;
  rawUnitNet: number;

  // Gesamtbeträge
  subtotalNet: number;
  quantityDiscountRate: number;
  quantityDiscountAmount: number;
  netAfterQuantityDiscount: number;
  orderValueDiscountRate: number;
  orderValueDiscountAmount: number;
  netAfterOrderValueDiscount: number;
  minimumOrderSurcharge: number;
  finalNet: number;
  vatAmount: number;
  finalGross: number;

  // Zeitdaten
  processTimePerPartMin: number;
  totalProductionTimeMin: number;
  totalTimeMin: number;

  // Debug-Hilfswerte
  setupCost: number;
  surfaceVolume: number;
  infillVolume: number;
  printVolume: number;
  materialWeightG: number;
  wallCost: number;
  infillCost: number;
  layerHeightFactorUsed: number;
  costPerMinute: number;
  laborCostTotal: number;
}

// ── Hilfsfunktion: Schichtdickenfaktor ─────────────────────

function getLayerHeightFactor(layerHeight: number): number {
  const factors = PRICING_CONFIG.layerHeightFactor;
  // Exakter Match?
  if (layerHeight in factors) {
    return factors[layerHeight as keyof typeof factors];
  }
  // Nächsten verfügbaren Faktor finden
  const heights = Object.keys(factors).map(Number).sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (layerHeight <= heights[i]) return factors[heights[i] as keyof typeof factors];
  }
  return factors[heights[heights.length - 1] as keyof typeof factors];
}

// ── 1. Materialkosten ──────────────────────────────────────

export function calculateMaterialCost(input: CalculatorInput): {
  materialCost: number;
  surfaceVolume: number;
  infillVolume: number;
  printVolume: number;
  materialWeightG: number;
  wallCost: number;
  infillCost: number;
  layerHeightFactorUsed: number;
} {
  const cfg = PRICING_CONFIG;
  const volumeCm3 = input.volumeCm3 ?? cfg.placeholderGeometry.volumeCm3;
  const surfaceCm2 = input.surfaceCm2 ?? cfg.placeholderGeometry.surfaceCm2;
  const density = cfg.densityFactor[input.materialKey];
  const pricePerKg = cfg.materialPricePerKg[input.materialKey];
  const lhFactor = getLayerHeightFactor(input.layerHeight);

  if (input.process === 'FDM') {
    // FDM: Detaillierte Wand-/Infill-Berechnung
    const surfaceVolume = surfaceCm2 * (input.wallThickness / 10) * cfg.surfaceFactor;
    const infillVolume = Math.max(volumeCm3 - surfaceVolume, 0) * cfg.infillFactor;
    const printVolume = surfaceVolume + infillVolume;
    const materialWeightG = printVolume * density;

    const wallCost = pricePerKg * ((surfaceVolume * density) / 1000) * lhFactor;
    const infillCost = pricePerKg * ((infillVolume * density) / 1000) * lhFactor;
    const materialCost = wallCost + infillCost;

    return { materialCost, surfaceVolume, infillVolume, printVolume, materialWeightG, wallCost, infillCost, layerHeightFactorUsed: lhFactor };
  } else {
    // SLA / SLS: Volumenbasiert
    const surfaceVolume = 0;
    const infillVolume = 0;
    const printVolume = volumeCm3;
    const materialWeightG = printVolume * density;
    const materialCost = pricePerKg * ((volumeCm3 * density) / 1000);

    return { materialCost, surfaceVolume, infillVolume, printVolume, materialWeightG, wallCost: 0, infillCost: 0, layerHeightFactorUsed: lhFactor };
  }
}

// ── 2. Bearbeitungs-/Maschinenzeit ─────────────────────────

export function calculateProcessTime(input: CalculatorInput): {
  processTimePerPartMin: number;
  totalProductionTimeMin: number;
  totalTimeMin: number;
} {
  const cfg = PRICING_CONFIG;
  const volumeCm3 = input.volumeCm3 ?? cfg.placeholderGeometry.volumeCm3;

  const processTimePerPartMin = Math.max(
    cfg.processTimeFactor[input.process] * (volumeCm3 / cfg.volumeUnitCm3),
    cfg.minimumProcessTimeMin[input.process]
  );

  const totalProductionTimeMin = processTimePerPartMin * input.quantity;
  const totalTimeMin = cfg.setupTimeMin + totalProductionTimeMin;

  return { processTimePerPartMin, totalProductionTimeMin, totalTimeMin };
}

// ── 3. Personalkosten ──────────────────────────────────────

export function calculateLaborCost(totalTimeMin: number, quantity: number): {
  costPerMinute: number;
  laborCostTotal: number;
  laborCostPerPart: number;
} {
  const costPerMinute = PRICING_CONFIG.hourlyRate / 60;
  const laborCostTotal = totalTimeMin * costPerMinute;
  const laborCostPerPart = laborCostTotal / quantity;

  return { costPerMinute, laborCostTotal, laborCostPerPart };
}

// ── 4. Mengenrabatt ────────────────────────────────────────

export function applyQuantityDiscount(quantity: number): number {
  for (const tier of PRICING_CONFIG.quantityDiscounts) {
    if (quantity >= tier.minQty) return tier.rate;
  }
  return 0;
}

// ── 5. Auftragswert-Rabatt ─────────────────────────────────

export function applyOrderValueDiscount(netValue: number): number {
  for (const tier of PRICING_CONFIG.orderValueDiscounts) {
    if (netValue >= tier.minNet) return tier.rate;
  }
  return 0;
}

// ── 6. Mindermengenzuschlag ────────────────────────────────

export function applyMinimumOrderSurcharge(netValue: number): number {
  const cfg = PRICING_CONFIG;
  return netValue < cfg.minimumOrderThresholdNet ? cfg.minimumOrderSurchargeNet : 0;
}

// ── 7. Umsatzsteuer ────────────────────────────────────────

export function calculateVat(netTotal: number): number {
  return netTotal * PRICING_CONFIG.vatRate;
}

// ── Gesamtberechnung ────────────────────────────────────────

export function calculateFinalPrice(input: CalculatorInput): PriceBreakdown {
  // 1. Materialkosten pro Stück
  const matResult = calculateMaterialCost(input);
  const materialCostPerPart = matResult.materialCost;

  // 2. Bearbeitungszeit
  const timeResult = calculateProcessTime(input);

  // 3. Personalkosten
  const laborResult = calculateLaborCost(timeResult.totalTimeMin, input.quantity);

  // 4. Rohpreis / Zwischensumme
  const rawUnitNet = materialCostPerPart + laborResult.laborCostPerPart;
  const subtotalNet = rawUnitNet * input.quantity;

  // 5. Mengenrabatt
  const quantityDiscountRate = applyQuantityDiscount(input.quantity);
  const quantityDiscountAmount = subtotalNet * quantityDiscountRate;
  const netAfterQuantityDiscount = subtotalNet - quantityDiscountAmount;

  // 6. Auftragswert-Rabatt
  const orderValueDiscountRate = applyOrderValueDiscount(netAfterQuantityDiscount);
  const orderValueDiscountAmount = netAfterQuantityDiscount * orderValueDiscountRate;
  const netAfterOrderValueDiscount = netAfterQuantityDiscount - orderValueDiscountAmount;

  // 7. Mindermengenzuschlag
  const minimumOrderSurcharge = applyMinimumOrderSurcharge(netAfterOrderValueDiscount);
  const finalNet = netAfterOrderValueDiscount + minimumOrderSurcharge;

  // 8. USt
  const vatAmount = calculateVat(finalNet);
  const finalGross = finalNet + vatAmount;

  // Setup-Kosten separat (informativ)
  const setupCost = (PRICING_CONFIG.setupTimeMin / 60) * PRICING_CONFIG.hourlyRate;

  return {
    materialCostPerPart,
    laborCostPerPart: laborResult.laborCostPerPart,
    rawUnitNet,
    subtotalNet,
    quantityDiscountRate,
    quantityDiscountAmount,
    netAfterQuantityDiscount,
    orderValueDiscountRate,
    orderValueDiscountAmount,
    netAfterOrderValueDiscount,
    minimumOrderSurcharge,
    finalNet,
    vatAmount,
    finalGross,
    processTimePerPartMin: timeResult.processTimePerPartMin,
    totalProductionTimeMin: timeResult.totalProductionTimeMin,
    totalTimeMin: timeResult.totalTimeMin,
    setupCost,
    surfaceVolume: matResult.surfaceVolume,
    infillVolume: matResult.infillVolume,
    printVolume: matResult.printVolume,
    materialWeightG: matResult.materialWeightG,
    wallCost: matResult.wallCost,
    infillCost: matResult.infillCost,
    layerHeightFactorUsed: matResult.layerHeightFactorUsed,
    costPerMinute: laborResult.costPerMinute,
    laborCostTotal: laborResult.laborCostTotal,
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
