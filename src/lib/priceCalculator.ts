/**
 * ═══════════════════════════════════════════════════════════════
 * 3D-Druck Kostenrechner – Berechnungslogik
 * ═══════════════════════════════════════════════════════════════
 *
 * Reine Funktionen ohne Seiteneffekte.
 * Alle Parameter kommen aus pricingConfig.ts.
 *
 * Später erweiterbar mit echten STL-Daten (Volumen, Oberfläche,
 * Bounding Box) – aktuell werden Platzhalterwerte genutzt.
 */

import { PRICING_CONFIG, type ProcessType } from '@/data/pricingConfig';

export interface CalculatorInput {
  process: ProcessType;
  materialKey: string;
  layerHeight: number;     // mm
  wallThickness: number;   // mm
  quantity: number;
  /** Volumen in cm³ – aus STL oder Platzhalter */
  volumeCm3?: number;
  /** Oberfläche in cm² – aus STL oder Platzhalter */
  surfaceCm2?: number;
}

export interface PriceBreakdown {
  materialCostPerPiece: number;
  processingCostPerPiece: number;
  setupCost: number;
  subtotalPerPiece: number;
  subtotalAll: number;
  quantityDiscountPercent: number;
  quantityDiscountAmount: number;
  orderValueDiscountPercent: number;
  orderValueDiscountAmount: number;
  smallOrderSurcharge: number;
  netTotal: number;
  vatAmount: number;
  grossTotal: number;
  pricePerPiece: number;
}

// ── Einzelne Berechnungsschritte ────────────────────────────

/** Materialkosten pro Stück */
export function calculateMaterialCost(input: CalculatorInput): number {
  const cfg = PRICING_CONFIG;
  const proc = cfg.processes[input.process];
  const mat = proc.materials[input.materialKey];
  if (!mat) return 0;

  const volume = input.volumeCm3 ?? cfg.placeholderVolumeCm3;
  // Effektives Volumen = Volumen × Infill + Wandfläche × Wandstärke
  const infillVolume = volume * cfg.defaultInfillFactor;
  const shellVolume = (input.surfaceCm2 ?? cfg.placeholderSurfaceCm2) * (input.wallThickness / 10);
  const totalVolumeCm3 = infillVolume + shellVolume;

  // Gewicht in kg
  const weightKg = (totalVolumeCm3 * mat.densityGCm3) / 1000;

  return weightKg * mat.pricePerKg;
}

/** Maschinen-/Bearbeitungskosten pro Stück */
export function calculateProcessingCost(input: CalculatorInput): number {
  const proc = PRICING_CONFIG.processes[input.process];
  const volume = input.volumeCm3 ?? PRICING_CONFIG.placeholderVolumeCm3;

  // Geschätzte Druckzeit: Volumen-basiert, skaliert mit Schichtdicke
  const layerFactor = proc.defaultLayerHeight / input.layerHeight;
  const basePrintTimeHours = (volume / 15) * layerFactor; // ~15 cm³/h als Referenz
  const printTimeHours = Math.max(basePrintTimeHours, proc.minPrintTimeMin / 60);

  return printTimeHours * proc.hourlyRate;
}

/** Rüstkosten (einmalig pro Auftrag) */
export function calculateSetupCost(process: ProcessType): number {
  const proc = PRICING_CONFIG.processes[process];
  return (proc.setupTimeMin / 60) * proc.hourlyRate;
}

/** Staffelrabatt nach Stückzahl ermitteln */
export function getQuantityDiscount(quantity: number): number {
  const tiers = PRICING_CONFIG.quantityDiscounts;
  let discount = 0;
  for (const tier of tiers) {
    if (quantity >= tier.minQty) discount = tier.discount;
  }
  return discount;
}

/** Rabatt nach Netto-Warenwert */
export function getOrderValueDiscount(netValue: number): number {
  const tiers = PRICING_CONFIG.orderValueDiscounts;
  let discount = 0;
  for (const tier of tiers) {
    if (netValue >= tier.minValue) discount = tier.discount;
  }
  return discount;
}

/** Mindermengenzuschlag prüfen */
export function calculateSurcharge(netBeforeDiscount: number): number {
  if (netBeforeDiscount < PRICING_CONFIG.minimumOrderValueNet) {
    return PRICING_CONFIG.smallOrderSurcharge;
  }
  return 0;
}

/** USt berechnen */
export function calculateVat(netTotal: number): number {
  return netTotal * PRICING_CONFIG.vatRate;
}

// ── Gesamtberechnung ────────────────────────────────────────

export function calculateFinalPrice(input: CalculatorInput): PriceBreakdown {
  const materialCostPerPiece = calculateMaterialCost(input);
  const processingCostPerPiece = calculateProcessingCost(input);
  const setupCost = calculateSetupCost(input.process);

  const subtotalPerPiece = materialCostPerPiece + processingCostPerPiece;
  const subtotalAll = subtotalPerPiece * input.quantity + setupCost;

  // Mengenrabatt
  const quantityDiscountPercent = getQuantityDiscount(input.quantity);
  const quantityDiscountAmount = subtotalAll * quantityDiscountPercent;
  const afterQtyDiscount = subtotalAll - quantityDiscountAmount;

  // Wertrabatt
  const orderValueDiscountPercent = getOrderValueDiscount(afterQtyDiscount);
  const orderValueDiscountAmount = afterQtyDiscount * orderValueDiscountPercent;
  const afterValueDiscount = afterQtyDiscount - orderValueDiscountAmount;

  // Mindermengenzuschlag
  const smallOrderSurcharge = calculateSurcharge(afterValueDiscount);

  const netTotal = afterValueDiscount + smallOrderSurcharge;
  const vatAmount = calculateVat(netTotal);
  const grossTotal = netTotal + vatAmount;
  const pricePerPiece = input.quantity > 0 ? netTotal / input.quantity : 0;

  return {
    materialCostPerPiece,
    processingCostPerPiece,
    setupCost,
    subtotalPerPiece,
    subtotalAll,
    quantityDiscountPercent,
    quantityDiscountAmount,
    orderValueDiscountPercent,
    orderValueDiscountAmount,
    smallOrderSurcharge,
    netTotal,
    vatAmount,
    grossTotal,
    pricePerPiece,
  };
}
