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
export type ProcessType = 'FDM';

export type MaterialKey = 'PLA' | 'PLA_PLUS' | 'PETG' | 'ABS' | 'ASA' | 'TPU' | 'PA6_CF' | 'PC';

// ── Hauptkonfiguration ──────────────────────────────────────
export const PRICING_CONFIG = {
  /** Umsatzsteuer – deaktiviert (Kleinunternehmerregelung o.Ä.) */
  vatRate: 0,

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
  } as Record<ProcessType, number>,

  // ── Stundensätze Druckkosten ──────────────────────────────
  /** Druckkosten €/h für kleine/mittlere Teile (maxDim < 260mm) */
  hourlyPrintRateSmall: 2,
  /** Druckkosten €/h für große Teile (maxDim 260–350mm) */
  hourlyPrintRateLarge: 4,
  /** Schwellenwert in mm ab dem der höhere Stundensatz gilt */
  largePrintThresholdMm: 260,

  // ── Setup-/Handlingkosten ─────────────────────────────────
  /** Fixe Setupkosten pro Stück in € */
  fixedSetupCost: 12.99,

  // ── Größen-Skalierung ─────────────────────────────────────
  /** Schwellenwert ab dem der Größenfaktor greift (mm) */
  sizeFactorThresholdMm: 170,
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

  /** Infill-Faktor – Standard-Infill-Prozentsatz */
  defaultInfillPercent: 15,

  /** Verfügbare Infill-Stufen in % */
  infillOptions: [10, 15, 20, 30, 50, 75, 100],

  /** Oberflächen-Korrekturfaktor (FDM) */
  surfaceFactor: 0.9,

  /** Materialpreise in €/kg */
  materialPricePerKg: {
    PLA: 25,
    PLA_PLUS: 30,
    PETG: 30,
    ABS: 35,
    ASA: 40,
    TPU: 80,
    PA6_CF: 120,
    PC: 65,
  } as Record<MaterialKey, number>,

  /** Dichte in g/cm³ */
  densityFactor: {
    PLA: 1.24,
    PLA_PLUS: 1.24,
    PETG: 1.27,
    ABS: 1.04,
    ASA: 1.07,
    TPU: 1.21,
    PA6_CF: 1.15,
    PC: 1.20,
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
    FDM: ['PLA', 'PLA_PLUS', 'PETG', 'ABS', 'ASA', 'TPU', 'PA6_CF', 'PC'] as MaterialKey[],
  } as Record<ProcessType, MaterialKey[]>,

  /** Verfügbare Farben pro Material */
  materialColors: {
    PLA:      ['Schwarz', 'Weiß', 'Grau', 'Natur', 'Rot', 'Blau', 'Grün'],
    PLA_PLUS: ['Schwarz', 'Weiß', 'Grau', 'Natur'],
    PETG:     ['Schwarz', 'Weiß', 'Grau', 'Transparent'],
    ABS:      ['Schwarz', 'Weiß', 'Grau'],
    ASA:      ['Schwarz', 'Weiß', 'Grau'],
    TPU:      ['Schwarz', 'Weiß', 'Natur'],
    PA6_CF:   ['Schwarz'],
    PC:       ['Transparent', 'Schwarz'],
  } as Record<MaterialKey, string[]>,

  /** Verfügbare Schichtdicken */
  processLayerHeights: {
    FDM: [0.08, 0.12, 0.20, 0.28],
  } as Record<ProcessType, number[]>,

  /** Default Schichtdicke pro Verfahren */
  defaultLayerHeight: {
    FDM: 0.20,
  } as Record<ProcessType, number>,

  /** Verfügbare Wandstärken pro Verfahren */
  processWallThicknesses: {
    FDM: [0.8, 1.2, 1.6, 2.0, 2.4],
  } as Record<ProcessType, number[]>,

  /** Default Wandstärke pro Verfahren */
  defaultWallThickness: {
    FDM: 1.2,
  } as Record<ProcessType, number>,

  /** Material-Labels für die UI */
  materialLabels: {
    PLA: 'PLA',
    PLA_PLUS: 'PLA+',
    PETG: 'PETG',
    ABS: 'ABS',
    ASA: 'ASA (UV-beständig)',
    TPU: 'TPU (flexibel)',
    PA6_CF: 'PA6-CF (Carbonfaser)',
    PC: 'Polycarbonat',
  } as Record<MaterialKey, string>,
} as const;

// ── Type-Helfer ─────────────────────────────────────────────
export type PricingConfig = typeof PRICING_CONFIG;
