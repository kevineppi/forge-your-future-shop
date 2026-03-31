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

export interface MaterialInfo {
  label: string;
  pricePerKg: number;       // €/kg
  densityGCm3: number;      // g/cm³
  colors: string[];          // verfügbare Farben
}

export interface ProcessInfo {
  label: string;
  hourlyRate: number;            // €/h Maschinenstunde
  setupTimeMin: number;          // Rüstzeit in Minuten
  minPrintTimeMin: number;       // Mindestdruckzeit in Minuten
  layerHeights: number[];        // verfügbare Schichtdicken in mm
  defaultLayerHeight: number;    // Standard-Schichtdicke
  wallThicknesses: number[];     // verfügbare Wandstärken in mm
  defaultWallThickness: number;
  materials: Record<string, MaterialInfo>;
}

// ── Hauptkonfiguration ──────────────────────────────────────
export const PRICING_CONFIG = {
  /** Umsatzsteuer (Österreich) */
  vatRate: 0.20,

  /** Infill-Faktor – wie viel % des Volumens tatsächlich Material ist */
  defaultInfillFactor: 0.20,

  /** Oberflächen-Korrekturfaktor (größere Oberfläche = mehr Stützstruktur) */
  surfaceFactor: 1.0,

  /** Platzhalter-Volumen wenn keine STL hochgeladen (cm³) */
  placeholderVolumeCm3: 25,

  /** Platzhalter-Oberfläche (cm²) */
  placeholderSurfaceCm2: 100,

  /** Mindestauftragswert netto (€) – darunter wird Zuschlag berechnet */
  minimumOrderValueNet: 30,

  /** Mindermengenzuschlag (€) */
  smallOrderSurcharge: 10,

  /** Staffelrabatte nach Stückzahl */
  quantityDiscounts: [
    { minQty: 1,   discount: 0 },
    { minQty: 5,   discount: 0.05 },
    { minQty: 10,  discount: 0.10 },
    { minQty: 25,  discount: 0.15 },
    { minQty: 50,  discount: 0.20 },
    { minQty: 100, discount: 0.25 },
  ],

  /** Rabatte nach Netto-Warenwert */
  orderValueDiscounts: [
    { minValue: 0,    discount: 0 },
    { minValue: 200,  discount: 0.03 },
    { minValue: 500,  discount: 0.05 },
    { minValue: 1000, discount: 0.08 },
    { minValue: 2500, discount: 0.10 },
  ],

  /** Verfügbare Farben (Superset) */
  allColors: ['Schwarz', 'Weiß', 'Grau', 'Transparent', 'Natur'] as const,

  /** Verfahren mit Materialien */
  processes: {
    FDM: {
      label: 'FDM (Fused Deposition Modeling)',
      hourlyRate: 25,
      setupTimeMin: 15,
      minPrintTimeMin: 30,
      layerHeights: [0.1, 0.15, 0.2, 0.3],
      defaultLayerHeight: 0.2,
      wallThicknesses: [0.8, 1.2, 1.6, 2.0, 2.4],
      defaultWallThickness: 1.2,
      materials: {
        PLA: {
          label: 'PLA',
          pricePerKg: 25,
          densityGCm3: 1.24,
          colors: ['Schwarz', 'Weiß', 'Grau', 'Natur'],
        },
        PETG: {
          label: 'PETG',
          pricePerKg: 30,
          densityGCm3: 1.27,
          colors: ['Schwarz', 'Weiß', 'Grau', 'Transparent'],
        },
        ABS: {
          label: 'ABS',
          pricePerKg: 28,
          densityGCm3: 1.04,
          colors: ['Schwarz', 'Weiß', 'Grau'],
        },
        ASA: {
          label: 'ASA',
          pricePerKg: 35,
          densityGCm3: 1.07,
          colors: ['Schwarz', 'Weiß', 'Grau'],
        },
        TPU: {
          label: 'TPU',
          pricePerKg: 45,
          densityGCm3: 1.21,
          colors: ['Schwarz', 'Weiß', 'Natur'],
        },
      },
    },
    SLA: {
      label: 'SLA (Stereolithografie)',
      hourlyRate: 40,
      setupTimeMin: 20,
      minPrintTimeMin: 45,
      layerHeights: [0.025, 0.05, 0.1],
      defaultLayerHeight: 0.05,
      wallThicknesses: [0.6, 0.8, 1.0, 1.2],
      defaultWallThickness: 0.8,
      materials: {
        StandardResin: {
          label: 'Standard Resin',
          pricePerKg: 55,
          densityGCm3: 1.12,
          colors: ['Grau', 'Weiß', 'Transparent'],
        },
      },
    },
    SLS: {
      label: 'SLS (Selektives Lasersintern)',
      hourlyRate: 60,
      setupTimeMin: 30,
      minPrintTimeMin: 60,
      layerHeights: [0.06, 0.1, 0.12],
      defaultLayerHeight: 0.1,
      wallThicknesses: [0.8, 1.0, 1.2, 1.6],
      defaultWallThickness: 1.0,
      materials: {
        PA12: {
          label: 'PA12 (Nylon)',
          pricePerKg: 70,
          densityGCm3: 1.01,
          colors: ['Natur', 'Schwarz'],
        },
      },
    },
  } satisfies Record<ProcessType, ProcessInfo>,
} as const;

// ── Type-Helfer ─────────────────────────────────────────────
export type PricingConfig = typeof PRICING_CONFIG;
