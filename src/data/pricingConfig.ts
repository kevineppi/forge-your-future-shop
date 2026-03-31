/**
 * ═══════════════════════════════════════════════════════════════
 * 3D-Druck Kostenrechner – Zentrale Preiskonfiguration
 * ═══════════════════════════════════════════════════════════════
 *
 * Alle Preise, Rabatte und Parameter an EINER Stelle.
 * Zum Anpassen einfach die Werte hier ändern – der Rechner
 * greift automatisch auf diese Konfiguration zu.
 */

// ── Verfahren ────────────────────────────────────────────────
export type ProcessType = 'FDM' | 'SLA' | 'SLS';

export type MaterialKey = 'PLA' | 'PETG' | 'ABS' | 'ASA' | 'TPU' | 'RESIN' | 'PA12';

// ── Hauptkonfiguration ──────────────────────────────────────
export const PRICING_CONFIG = {
  /** Umsatzsteuer (Österreich) */
  vatRate: 0.20,

  /** Stundensatz für Personal/Maschine (€/h) */
  hourlyRate: 89,

  /** Rüstzeit in Minuten (einmalig pro Auftrag) */
  setupTimeMin: 12,

  /** Referenzvolumen für Zeitberechnung (cm³) */
  volumeUnitCm3: 50,

  /** Infill-Faktor – wie viel % des Restvolumens tatsächlich Material ist */
  infillFactor: 0.20,

  /** Oberflächen-Korrekturfaktor */
  surfaceFactor: 0.9,

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

  /** Zeitfaktor pro Verfahren (Multiplikator für Druckzeit) */
  processTimeFactor: {
    FDM: 1,
    SLA: 2,
    SLS: 3,
  } as Record<ProcessType, number>,

  /** Mindest-Bearbeitungszeit pro Stück in Minuten */
  minimumProcessTimeMin: {
    FDM: 10,
    SLA: 12,
    SLS: 15,
  } as Record<ProcessType, number>,

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

  /** Rabatte nach Netto-Warenwert (absteigend sortiert!) */
  orderValueDiscounts: [
    { minNet: 1000, rate: 0.14 },
    { minNet: 250,  rate: 0.08 },
    { minNet: 100,  rate: 0.05 },
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
