import mongoose, { Schema, Document } from "mongoose";

/* =========================
   🔹 INTERFACES
========================= */

export interface IIsotope {
  mass_number: number;
  natural_abundance_percent: number;
  half_life: string;
  decay_mode?: string | null;
  is_stable: boolean;
}

export interface IElectronicConfiguration {
  full: string;
  shorthand: string;
  noble_gas_core?: string | null;
  valence_electrons: number;
  electron_shells: number[];
}

export interface IRadii {
  atomic?: number | null;
  covalent?: number | null;
  van_der_waals?: number | null;
  ionic?: number | null;
}

export interface IThermodynamics {
  melting_point_k?: number | null;
  boiling_point_k?: number | null;
  heat_of_fusion_kj_mol?: number | null;
  heat_of_vaporization_kj_mol?: number | null;
  specific_heat_j_gk?: number | null;
  thermal_conductivity_w_mk?: number | null;
}

export interface IElectrical {
  electronegativity_pauling?: number | null;
  ionization_energies_kj_mol: number[];
  electron_affinity_kj_mol?: number | null;
  electrical_conductivity_s_m?: number | null;
  magnetic_type?: string;
}

export interface IAbundance {
  earth_crust_ppm?: number | null;
  ocean_ppm?: number | null;
  universe_ppm?: number | null;
  human_body_ppm?: number | null;
}

export interface IDiscovery {
  discoverer?: string;
  year?: number;
  location?: string;
  named_after?: string;
  etymology?: string;
}

/* =========================
   🔹 MAIN INTERFACE
========================= */

export interface IElement extends Document {
  atomic_number: number;
  name: string;
  symbol: string;
  latin_name?: string;

  period: number;
  group?: number;
  block: string;
  category: string;

  phase_at_stp: string;
  standard_state_color?: string;

  atomic_mass: number;
  density_g_cm3?: number;

  valency: number[];
  oxidation_states: number[];
  common_oxidation_state?: number;

  electronic_configuration: IElectronicConfiguration;
  radii: IRadii;
  thermodynamics: IThermodynamics;
  electrical: IElectrical;
  abundance: IAbundance;

  isotopes: IIsotope[];

  radioactive: boolean;
  stability: string;

  discovery: IDiscovery;

  cas_number?: string;

  description?: string;
  detailed_description?: string;

  toxicity_level?: string;
  hazard_codes: string[];

  createdAt?: Date;
  updatedAt?: Date;
}

/* =========================
   🔹 SUB SCHEMAS
========================= */

const IsotopeSchema = new Schema<IIsotope>(
  {
    mass_number: { type: Number, required: true },
    natural_abundance_percent: { type: Number, default: 0 },
    half_life: { type: String },
    decay_mode: { type: String, default: null },
    is_stable: { type: Boolean, default: true },
  },
  { _id: false }
);

const ElectronicConfigSchema = new Schema<IElectronicConfiguration>(
  {
    full: { type: String, required: true },
    shorthand: { type: String, required: true },
    noble_gas_core: { type: String, default: null },
    valence_electrons: { type: Number },
    electron_shells: [{ type: Number }],
  },
  { _id: false }
);

const RadiiSchema = new Schema<IRadii>(
  {
    atomic: Number,
    covalent: Number,
    van_der_waals: Number,
    ionic: Number,
  },
  { _id: false }
);

const ThermodynamicsSchema = new Schema<IThermodynamics>(
  {
    melting_point_k: Number,
    boiling_point_k: Number,
    heat_of_fusion_kj_mol: Number,
    heat_of_vaporization_kj_mol: Number,
    specific_heat_j_gk: Number,
    thermal_conductivity_w_mk: Number,
  },
  { _id: false }
);

const ElectricalSchema = new Schema<IElectrical>(
  {
    electronegativity_pauling: Number,
    ionization_energies_kj_mol: [{ type: Number }],
    electron_affinity_kj_mol: Number,
    electrical_conductivity_s_m: Number,
    magnetic_type: String,
  },
  { _id: false }
);

const AbundanceSchema = new Schema<IAbundance>(
  {
    earth_crust_ppm: Number,
    ocean_ppm: Number,
    universe_ppm: Number,
    human_body_ppm: Number,
  },
  { _id: false }
);

const DiscoverySchema = new Schema<IDiscovery>(
  {
    discoverer: String,
    year: Number,
    location: String,
    named_after: String,
    etymology: String,
  },
  { _id: false }
);

/* =========================
   🔹 MAIN SCHEMA
========================= */

const ElementSchema = new Schema<IElement>(
  {
    atomic_number: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    name: { type: String, required: true, index: true },
    symbol: { type: String, required: true, unique: true, index: true },
    latin_name: String,

    period: { type: Number, required: true },
    group: Number,
    block: { type: String, required: true },
    category: { type: String, required: true },

    phase_at_stp: { type: String, required: true },
    standard_state_color: String,

    atomic_mass: { type: Number, required: true },
    density_g_cm3: Number,

    valency: [{ type: Number }],
    oxidation_states: [{ type: Number }],
    common_oxidation_state: Number,

    electronic_configuration: ElectronicConfigSchema,
    radii: RadiiSchema,
    thermodynamics: ThermodynamicsSchema,
    electrical: ElectricalSchema,
    abundance: AbundanceSchema,

    isotopes: [IsotopeSchema],

    radioactive: { type: Boolean, default: false },
    stability: { type: String },

    discovery: DiscoverySchema,

    cas_number: String,

    description: String,
    detailed_description: String,

    toxicity_level: String,
    hazard_codes: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

/* =========================
   🔹 INDEXING (IMPORTANT)
========================= */

ElementSchema.index({ name: "text", symbol: "text" });

/* =========================
   🔹 EXPORT
========================= */

export const ElementModel =
  mongoose.models.Element ||
  mongoose.model<IElement>("Element", ElementSchema);