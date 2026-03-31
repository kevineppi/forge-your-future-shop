/**
 * ═══════════════════════════════════════════════════════════════
 * 3D-Druck Kostenrechner – Zentrale Preiskonfiguration
 * ═══════════════════════════════════════════════════════════════
 *
 * Hybrides Kalkulationsmodell:
 *   1. Materialkosten (physikalisch)
 *   2. Druckzeitkosten (realistisch angenähert)
 *   3. Setup-/Handlingkosten (abgeschwächt, nicht linear)
 *   4. Größen-Skalierung
 *   5. Mindestpreis / Mindermengenzuschlag
 */

// ── Verfahren ────────────────────────────────────────────────
export type ProcessType = 'FDM' | 'SLA' | 'SLS';

export type MaterialKey = 'PLA' | 'PETG' | 'ABS' | 'ASA' | 'TPU' | 'RESIN' | 'PA12';

// ── Hauptkonfiguration ──────────────────────────────────────
export const PRICING_CONFIG = {
  /** Umsatzsteuer (Österreich) */
  vatRate: 0.20,

  /** Sicherheitsfaktor auf Materialkosten (Verschnitt, Stützstruktur etc.) */
  materialSafetyFactor: 1.15,

  // ── Druckzeit-Parameter ───────────────────────────────────
  /** Minuten pro cm³ Druckvolumen */
  volumeTimeFactor: 0.4,
  /** Minuten pro cm² Oberfläche (Wandfahrwege) */
  surfaceTimeFactor: 0.015,
  /** Minuten pro Layer (Schichtwechsel-Penalty) */
  layerPenaltyFactor: 0.02,
  /** Basis-Druckzeit in Minuten (Aufheizen, Kalibrieren etc.) */
  basePrintTimeMin: 3,

  /** Verfahrensspezifischer Druckzeit-Multiplikator */
  processTimeFactor: {
    FDM: 1,
    SLA: 2,
    SLS: 3,
  } as Record<ProcessType, number>,

  // ── Stundensätze Druckkosten ──────────────────────────────
  /** Druckkosten €/h für kleine/mittlere Teile (maxDim < 260mm) */
  hourlyPrintRateSmall: 2,
  /** Druckkosten €/h für große Teile (maxDim 260–350mm) */
  hourlyPrintRateLarge: 4,
  /** Schwellenwert in mm ab dem der höhere Stundensatz gilt */
  largePrintThresholdMm: 260,

  // ── Setup-/Handlingkosten ─────────────────────────────────
  /** Basis-Setupkosten in € (für ein Referenzteil) */
  baseSetupCost: 3,
  /** Referenzvolumen für Setup-Skalierung (cm³) */
  setupReferenceVolumeCm3: 50,
  /** Exponent für Setup-Skalierung (0.3 = stark abgeschwächt) */
  setupScalingExponent: 0.3,

  // ── Größen-Skalierung ─────────────────────────────────────
  /** Referenz-Dimension für sizeFactor (mm) */
  sizeFactorReferenceMm: 300,
  /** Steigung des Größenfaktors */
  sizeFactorSlope: 0.5,

  // ── Mindestauftragswert ───────────────────────────────────
  /** Mindestauftragswert netto (€) – darunter wird Zuschlag berechnet */
  minimumOrderThresholdNet: 40,
  /** Mindermengenzuschlag netto (€) */
  minimumOrderSurchargeNet: 8.90,

  /** Platzhalter-Geometriedaten (wenn keine STL hochgeladen) */
  placeholderGeometry: {
    volumeCm3: 25,
    surfaceCm2: 100,
    boundingBoxMm: { x: 50, y: 50, z: 50 },
  },

  /** Infill-Faktor – wie viel % des Restvolumens tatsächlich Material ist (FDM) */
  infillFactor: 0.20,

  /** Oberflächen-Korrekturfaktor (FDM) */
  surfaceFactor: 0.9,

  /** Materialpreise in €/kg */
  materialPricePerKg: {
    PLA: 30,
    PETG: 35,
    ABS: 40,
    ASA: 45,
    TPU: 90,
    RESIN: 120,
    PA12: 200,
  } as Record<MaterialKey, number>,

  /** Dichte in g/cm³ */
  densityFactor: {
    PLA: 1.24,
    PETG: 1.27,
    ABS: 1.04,
    ASA: 1.07,
    TPU: 1.21,
    RESIN: 1.10,
    PA12: 1.01,
  } as Record<MaterialKey, number>,

  /** Schichtdickenfaktor – feinere Schichten = teurer */
  layerHeightFactor: {
    0.08: 1.25,
    0.12: 1.10,
    0.20: 1.00,
    0.28: 0.90,
  } as Record<number, number>,

  /** Staffelrabatte nach Stückzahl (absteigend sortiert!) */
  quantityDiscounts: [
    { minQty: 100, rate: 0.10 },
    { minQty: 50,  rate: 0.08 },
    { minQty: 10,  rate: 0.05 },
  ],

  /** Verfügbare Materialien pro Verfahren */
  processMaterials: {
    FDM: ['PLA', 'PETG', 'ABS', 'ASA', 'TPU'] as MaterialKey[],
    SLA: ['RESIN'] as MaterialKey[],
    SLS: ['PA12'] as MaterialKey[],
  } as Record<ProcessType, MaterialKey[]>,

  /** Verfügbare Farben pro Material */
  materialColors: {
    PLA:  ['Schwarz', 'Weiß', 'Grau', 'Natur'],
    PETG: ['Schwarz', 'Weiß', 'Grau', 'Transparent'],
    ABS:  ['Schwarz', 'Weiß', 'Grau'],
    ASA:  ['Schwarz', 'Weiß', 'Grau'],
    TPU:  ['Schwarz', 'Weiß', 'Natur'],
    RESIN: ['Grau', 'Weiß', 'Transparent'],
    PA12: ['Natur', 'Schwarz'],
  } as Record<MaterialKey, string[]>,

  /** Verfügbare Schichtdicken pro Verfahren */
  processLayerHeights: {
    FDM: [0.08, 0.12, 0.20, 0.28],
    SLA: [0.08, 0.12],
    SLS: [0.08, 0.12],
  } as Record<ProcessType, number[]>,

  /** Default Schichtdicke pro Verfahren */
  defaultLayerHeight: {
    FDM: 0.20,
    SLA: 0.12,
    SLS: 0.12,
  } as Record<ProcessType, number>,

  /** Verfügbare Wandstärken pro Verfahren */
  processWallThicknesses: {
    FDM: [0.8, 1.2, 1.6, 2.0, 2.4],
    SLA: [0.6, 0.8, 1.0, 1.2],
    SLS: [0.8, 1.0, 1.2, 1.6],
  } as Record<ProcessType, number[]>,

  /** Default Wandstärke pro Verfahren */
  defaultWallThickness: {
    FDM: 1.2,
    SLA: 0.8,
    SLS: 1.0,
  } as Record<ProcessType, number>,

  /** Material-Labels für die UI */
  materialLabels: {
    PLA: 'PLA',
    PETG: 'PETG',
    ABS: 'ABS',
    ASA: 'ASA',
    TPU: 'TPU',
    RESIN: 'Standard Resin',
    PA12: 'PA12 (Nylon)',
  } as Record<MaterialKey, string>,
} as const;

// ── Type-Helfer ─────────────────────────────────────────────
export type PricingConfig = typeof PRICING_CONFIG;
