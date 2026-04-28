/**
 * Virtual Chemistry Lab — Element Schema
 * MongoDB / Mongoose — Production Grade
 * Architect: Senior DB Architect
 *
 * CHANGELOG:
 * - Fixed sub-schema interface types (typeof Schema → proper interfaces)
 * - Fixed magnetic_type enum (removed invalid empty-string value → use null)
 * - Added toJSON virtuals option so virtual fields serialize automatically
 * - Added missing `toJSON` transform to strip __v from all responses
 * - Strengthened IsotopeSchema: mass_number is now required
 * - Added `sparse: true` to cas_number unique-like field (already present, confirmed)
 * - Added `"unknown"` to magnetic_type enum for synthetic/unknown elements
 */

import mongoose, { Schema, Document, Model } from "mongoose";

// ─────────────────────────────────────────────
// 1. SUB-SCHEMAS (Embedded Documents)
// ─────────────────────────────────────────────

const ElectronicConfigurationSchema = new Schema(
  {
    full: { type: String, required: true },       // e.g. "1s² 2s² 2p⁶ 3s¹"
    shorthand: { type: String, required: true },  // e.g. "[Ne] 3s¹"
    noble_gas_core: { type: String },             // e.g. "Ne"
    valence_electrons: { type: Number },
    electron_shells: { type: [Number] },          // e.g. [2, 8, 1]
  },
  { _id: false }
);

const RadiiSchema = new Schema(
  {
    atomic: { type: Number },           // pm
    covalent: { type: Number },         // pm
    van_der_waals: { type: Number },    // pm
    ionic: { type: Number },            // pm (most common ion)
  },
  { _id: false }
);

const AbundanceSchema = new Schema(
  {
    earth_crust_ppm: { type: Number },   // parts per million by mass
    ocean_ppm: { type: Number },
    universe_ppm: { type: Number },
    human_body_ppm: { type: Number },
  },
  { _id: false }
);

const ThermodynamicsSchema = new Schema(
  {
    melting_point_k: { type: Number },
    boiling_point_k: { type: Number },
    critical_temperature_k: { type: Number },
    critical_pressure_mpa: { type: Number },
    heat_of_fusion_kj_mol: { type: Number },
    heat_of_vaporization_kj_mol: { type: Number },
    specific_heat_j_gk: { type: Number },
    thermal_conductivity_w_mk: { type: Number },
  },
  { _id: false }
);

const ElectricalSchema = new Schema(
  {
    electronegativity_pauling: { type: Number },
    ionization_energies_kj_mol: { type: [Number] },  // [1st, 2nd, 3rd ...]
    electron_affinity_kj_mol: { type: Number },
    electrical_conductivity_s_m: { type: Number },
    resistivity_ohm_m: { type: Number },
    magnetic_type: {
      type: String,
      // null/undefined = not yet measured (synthetic/transactinide elements)
      enum: ["diamagnetic", "paramagnetic", "ferromagnetic", "antiferromagnetic", "unknown", null],
      default: null,
    },
  },
  { _id: false }
);

const DiscoverySchema = new Schema(
  {
    discoverer: { type: String },
    year: { type: Number },
    location: { type: String },
    named_after: { type: String },
    etymology: { type: String },
    synthesis_method: { type: String }, // for synthetic elements
  },
  { _id: false }
);

const IsotopeSchema = new Schema(
  {
    mass_number: { type: Number, required: true, min: 1 },
    natural_abundance_percent: { type: Number, min: 0, max: 100 },
    half_life: { type: String },  // e.g. "stable", "1.3×10⁹ yr"
    decay_mode: { type: String }, // α, β−, β+, γ, EC, etc.
    is_stable: { type: Boolean, required: true, default: false },
  },
  { _id: false }
);

// ─────────────────────────────────────────────
// Proper TypeScript sub-interfaces (replaces typeof SchemaInstance anti-pattern)
// ─────────────────────────────────────────────

export interface IElectronicConfiguration {
  full: string;
  shorthand: string;
  noble_gas_core?: string | null;
  valence_electrons?: number;
  electron_shells?: number[];
}

export interface IRadii {
  atomic?: number;
  covalent?: number;
  van_der_waals?: number;
  ionic?: number | null;
}

export interface IAbundance {
  earth_crust_ppm?: number;
  ocean_ppm?: number;
  universe_ppm?: number;
  human_body_ppm?: number | null;
}

export interface IThermodynamics {
  melting_point_k?: number | null;
  boiling_point_k?: number;
  critical_temperature_k?: number;
  critical_pressure_mpa?: number;
  heat_of_fusion_kj_mol?: number;
  heat_of_vaporization_kj_mol?: number;
  specific_heat_j_gk?: number;
  thermal_conductivity_w_mk?: number;
}

export interface IElectrical {
  electronegativity_pauling?: number | null;
  ionization_energies_kj_mol?: number[];
  electron_affinity_kj_mol?: number;
  electrical_conductivity_s_m?: number | null;
  resistivity_ohm_m?: number;
  magnetic_type?: "diamagnetic" | "paramagnetic" | "ferromagnetic" | "antiferromagnetic" | "unknown" | null;
}

export interface IDiscovery {
  discoverer?: string;
  year?: number | null;
  location?: string | null;
  named_after?: string;
  etymology?: string;
  synthesis_method?: string;
}

export interface IIsotope {
  mass_number: number;
  natural_abundance_percent?: number;
  half_life?: string;
  decay_mode?: string | null;
  is_stable: boolean;
}

// ─────────────────────────────────────────────
// 2. MAIN ELEMENT SCHEMA
// ─────────────────────────────────────────────

export interface IElement extends Document {
  atomic_number: number;
  name: string;
  symbol: string;
  latin_name?: string;
  period: number;
  group: number | null;
  block: "s" | "p" | "d" | "f";
  category: string;
  subcategory?: string;
  phase_at_stp: "solid" | "liquid" | "gas" | "unknown";
  standard_state_color: string;
  atomic_mass: number;
  atomic_mass_uncertainty?: number;
  density_g_cm3?: number;
  valency: number[];
  oxidation_states: number[];
  common_oxidation_state: number;
  electronic_configuration: IElectronicConfiguration;
  radii: IRadii;
  thermodynamics: IThermodynamics;
  electrical: IElectrical;
  abundance: IAbundance;
  isotopes: IIsotope[];
  radioactive: boolean;
  stability: "stable" | "unstable" | "primordial";
  half_life?: string;
  discovery: IDiscovery;
  cas_number?: string;
  description: string;
  detailed_description: string;
  toxicity_level: "none" | "low" | "moderate" | "high" | "extreme" | "unknown";
  hazard_codes: string[];  // GHS pictogram codes
  created_at: Date;
  updated_at: Date;
  // Virtual fields
  melting_point_celsius?: number | null;
  boiling_point_celsius?: number | null;
  stable_isotope_count?: number;
  // Instance methods
  toPublicJSON(): Record<string, unknown>;
  isMetal(): boolean;
}

const ElementSchema = new Schema<IElement>(
  {
    // ── Identity ──────────────────────────────
    atomic_number: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
      max: 118,
      index: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    symbol: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 3,
      index: true,
    },
    latin_name: { type: String },
    cas_number: { type: String, sparse: true },

    // ── Periodic Table Position ───────────────
    period: { type: Number, required: true, min: 1, max: 7 },
    group: { type: Number, min: 1, max: 18, default: null },
    block: { type: String, enum: ["s", "p", "d", "f"], required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "alkali metal",
        "alkaline earth metal",
        "lanthanide",
        "actinide",
        "transition metal",
        "post-transition metal",
        "metalloid",
        "reactive nonmetal",
        "noble gas",
        "unknown",
      ],
      index: true,
    },
    subcategory: { type: String },

    // ── Physical Properties ──────────────────
    phase_at_stp: {
      type: String,
      enum: ["solid", "liquid", "gas", "unknown"],
      required: true,
      index: true,
    },
    standard_state_color: { type: String, default: "unknown" },
    atomic_mass: { type: Number, required: true },
    atomic_mass_uncertainty: { type: Number },
    density_g_cm3: { type: Number },

    // ── Chemical Properties ──────────────────
    valency: { type: [Number], default: [] },
    oxidation_states: { type: [Number], default: [] },
    common_oxidation_state: { type: Number },
    electronic_configuration: {
      type: ElectronicConfigurationSchema,
      required: true,
    },

    // ── Radii ────────────────────────────────
    radii: { type: RadiiSchema },

    // ── Thermodynamics ───────────────────────
    thermodynamics: { type: ThermodynamicsSchema },

    // ── Electrical & Electrochemical ─────────
    electrical: { type: ElectricalSchema },

    // ── Abundance ────────────────────────────
    abundance: { type: AbundanceSchema },

    // ── Isotopes ─────────────────────────────
    isotopes: { type: [IsotopeSchema], default: [] },

    // ── Radioactivity & Stability ────────────
    radioactive: { type: Boolean, required: true, default: false, index: true },
    stability: {
      type: String,
      enum: ["stable", "unstable", "primordial"],
      required: true,
    },
    half_life: { type: String },

    // ── Discovery ────────────────────────────
    discovery: { type: DiscoverySchema },

    // ── Descriptions ─────────────────────────
    description: { type: String, required: true, maxlength: 500 },
    detailed_description: { type: String, required: true },

    // ── Safety ───────────────────────────────
    toxicity_level: {
      type: String,
      enum: ["none", "low", "moderate", "high", "extreme", "unknown"],
      default: "none",
    },
    hazard_codes: { type: [String], default: [] },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "elements",
    // Automatically include virtual fields in .toJSON() and .toObject()
    toJSON: { virtuals: true, transform: (_doc, ret) => { delete ret.__v; return ret; } },
    toObject: { virtuals: true },
  }
);

// ─────────────────────────────────────────────
// 3. COMPOUND INDEXES
// ─────────────────────────────────────────────

// Text search index (name, symbol, description)
ElementSchema.index(
  { name: "text", symbol: "text", description: "text", "discovery.discoverer": "text" },
  { weights: { symbol: 10, name: 8, description: 3 }, name: "element_text_search" }
);

// Periodic table navigation
ElementSchema.index({ period: 1, group: 1 }, { name: "periodic_position" });

// Category + phase filtering
ElementSchema.index({ category: 1, phase_at_stp: 1 }, { name: "category_phase" });

// Block filtering
ElementSchema.index({ block: 1 }, { name: "block_filter" });

// Properties range queries
ElementSchema.index(
  { "thermodynamics.melting_point_k": 1 },
  { name: "melting_point_sort", sparse: true }
);
ElementSchema.index(
  { "electrical.electronegativity_pauling": 1 },
  { name: "electronegativity_sort", sparse: true }
);
ElementSchema.index({ atomic_mass: 1 }, { name: "atomic_mass_sort" });
ElementSchema.index({ radioactive: 1 }, { name: "radioactive_filter" });

// ─────────────────────────────────────────────
// 4. VIRTUAL FIELDS
// ─────────────────────────────────────────────

// Kelvin → Celsius for melting point
ElementSchema.virtual("melting_point_celsius").get(function () {
  const k = this.thermodynamics?.melting_point_k;
  return k != null ? +(k - 273.15).toFixed(2) : null;
});

// Kelvin → Celsius for boiling point
ElementSchema.virtual("boiling_point_celsius").get(function () {
  const k = this.thermodynamics?.boiling_point_k;
  return k != null ? +(k - 273.15).toFixed(2) : null;
});

// Stable isotope count
ElementSchema.virtual("stable_isotope_count").get(function () {
  return this.isotopes?.filter((i) => i.is_stable).length ?? 0;
});

// ─────────────────────────────────────────────
// 5. INSTANCE METHODS
// ─────────────────────────────────────────────

ElementSchema.methods.toPublicJSON = function () {
  const obj = this.toObject({ virtuals: true });
  delete obj.__v;
  return obj;
};

ElementSchema.methods.isMetal = function (): boolean {
  return [
    "alkali metal",
    "alkaline earth metal",
    "transition metal",
    "post-transition metal",
    "lanthanide",
    "actinide",
  ].includes(this.category);
};

// ─────────────────────────────────────────────
// 6. STATIC METHODS
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// 7. STATIC METHOD TYPES (Proper model interface)
// ─────────────────────────────────────────────

export interface IElementModel extends Model<IElement> {
  findBySymbol(symbol: string): ReturnType<Model<IElement>["findOne"]>;
  findByAtomicNumber(n: number): ReturnType<Model<IElement>["findOne"]>;
  findByPeriodAndGroup(period: number, group: number): ReturnType<Model<IElement>["findOne"]>;
  searchByName(query: string): ReturnType<Model<IElement>["find"]>;
  getByCategory(category: string): ReturnType<Model<IElement>["find"]>;
}

ElementSchema.statics.findBySymbol = function (symbol: string) {
  return this.findOne({ symbol: symbol.trim().toUpperCase().replace(/^(.)(.*)$/, (_, f, r) => f + r.toLowerCase()) });
};

ElementSchema.statics.findByAtomicNumber = function (n: number) {
  return this.findOne({ atomic_number: n });
};

ElementSchema.statics.findByPeriodAndGroup = function (
  period: number,
  group: number
) {
  return this.findOne({ period, group });
};

ElementSchema.statics.searchByName = function (query: string) {
  return this.find({ $text: { $search: query } }, { score: { $meta: "textScore" } })
    .sort({ score: { $meta: "textScore" } })
    .limit(10);
};

ElementSchema.statics.getByCategory = function (category: string) {
  return this.find({ category }).sort({ atomic_number: 1 });
};

export const Element: IElementModel = mongoose.model<IElement, IElementModel>(
  "Element",
  ElementSchema
);
