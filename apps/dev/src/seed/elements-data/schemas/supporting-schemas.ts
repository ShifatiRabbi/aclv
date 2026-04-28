/**
 * Virtual Chemistry Lab — Supporting Schemas
 * MongoDB / Mongoose — Production Grade
 * Collections: element_knowledge, reactions, reaction_elements,
 *              compounds, compound_elements, element_visual_meta,
 *              gamification_meta, simulation_meta
 */

import mongoose, { Schema, Document, Types, Model } from "mongoose";

// ═══════════════════════════════════════════════════════════════
// 2. ELEMENT KNOWLEDGE (Educational Content)
// ═══════════════════════════════════════════════════════════════

export interface IElementKnowledge extends Document {
  element_id: Types.ObjectId;
  atomic_number: number;         // denormalized for fast lookup
  uses_positive: string;
  hazards_negative: string;
  lab_storage: string;
  industrial_usage: string;
  biological_role: string;
  safety_precautions: string;
  interesting_facts: string[];
  fun_fact: string;              // single sentence for gamification
  common_compounds: {
    name: string;
    formula: string;
    description: string;
  }[];
  allotropes: {
    name: string;
    description: string;
    structure: string;
  }[];
  historical_context: string;
  environmental_impact: string;
  medical_applications: string;
  created_at: Date;
  updated_at: Date;
}

const ElementKnowledgeSchema = new Schema<IElementKnowledge>(
  {
    element_id: {
      type: Schema.Types.ObjectId,
      ref: "Element",
      required: true,
      unique: true,
      index: true,
    },
    atomic_number: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    uses_positive: { type: String, default: "" },
    hazards_negative: { type: String, default: "" },
    lab_storage: { type: String, default: "" },
    industrial_usage: { type: String, default: "" },
    biological_role: { type: String, default: "" },
    safety_precautions: { type: String, default: "" },
    interesting_facts: { type: [String], default: [] },
    fun_fact: { type: String, default: "" },
    common_compounds: {
      type: [
        {
          name: { type: String, required: true },
          formula: { type: String, required: true },
          description: { type: String },
          _id: false,
        },
      ],
      default: [],
    },
    allotropes: {
      type: [
        {
          name: { type: String, required: true },
          description: { type: String },
          structure: { type: String },
          _id: false,
        },
      ],
      default: [],
    },
    historical_context: { type: String, default: "" },
    environmental_impact: { type: String, default: "" },
    medical_applications: { type: String, default: "" },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "element_knowledge",
  }
);

// Full-text search across all educational content
ElementKnowledgeSchema.index(
  {
    uses_positive: "text",
    hazards_negative: "text",
    biological_role: "text",
    industrial_usage: "text",
    interesting_facts: "text",
  },
  { name: "knowledge_text_search" }
);

export const ElementKnowledge: Model<IElementKnowledge> =
  mongoose.model<IElementKnowledge>("ElementKnowledge", ElementKnowledgeSchema);

// ═══════════════════════════════════════════════════════════════
// 3. REACTIONS
// ═══════════════════════════════════════════════════════════════

export interface IReaction extends Document {
  name: string;
  type: string;
  equation_text: string;          // human readable: "2H₂ + O₂ → 2H₂O"
  equation_latex: string;         // for MathJax rendering
  description: string;
  temperature_conditions: {
    min_k?: number;
    max_k?: number;
    optimal_k?: number;
    notes?: string;
  };
  pressure_conditions: {
    min_atm?: number;
    max_atm?: number;
    optimal_atm?: number;
    notes?: string;
  };
  catalyst?: string;
  energy_change: "endothermic" | "exothermic" | "thermoneutral";
  enthalpy_change_kj_mol?: number;
  entropy_change_j_mol_k?: number;
  gibbs_free_energy_kj_mol?: number;
  equilibrium_constant?: number;
  reaction_rate_order?: string;
  hazard_level: "safe" | "low" | "moderate" | "high" | "extreme";
  industrial_applications?: string;
  tags: string[];                 // e.g. ["combustion", "synthesis"]
  simulation_params?: Record<string, unknown>;  // for simulation engine
  created_at: Date;
  updated_at: Date;
}

const ReactionSchema = new Schema<IReaction>(
  {
    name: { type: String, required: true, index: true },
    type: {
      type: String,
      required: true,
      enum: [
        "acid-base",
        "redox",
        "precipitation",
        "combustion",
        "synthesis",
        "decomposition",
        "single-displacement",
        "double-displacement",
        "polymerization",
        "nuclear",
        "photochemical",
        "electrolytic",
        "complexation",
        "hydrolysis",
        "other",
      ],
      index: true,
    },
    equation_text: { type: String, required: true },
    equation_latex: { type: String },
    description: { type: String, required: true },
    temperature_conditions: {
      min_k: Number,
      max_k: Number,
      optimal_k: Number,
      notes: String,
    },
    pressure_conditions: {
      min_atm: Number,
      max_atm: Number,
      optimal_atm: Number,
      notes: String,
    },
    catalyst: { type: String },
    energy_change: {
      type: String,
      enum: ["endothermic", "exothermic", "thermoneutral"],
      required: true,
    },
    enthalpy_change_kj_mol: { type: Number },
    entropy_change_j_mol_k: { type: Number },
    gibbs_free_energy_kj_mol: { type: Number },
    equilibrium_constant: { type: Number },
    reaction_rate_order: { type: String },
    hazard_level: {
      type: String,
      enum: ["safe", "low", "moderate", "high", "extreme"],
      default: "low",
    },
    industrial_applications: { type: String },
    tags: { type: [String], default: [], index: true },
    simulation_params: { type: Schema.Types.Mixed },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "reactions",
  }
);

ReactionSchema.index(
  { name: "text", description: "text", equation_text: "text" },
  { name: "reaction_text_search" }
);
ReactionSchema.index({ type: 1, hazard_level: 1 });
ReactionSchema.index({ energy_change: 1 });
ReactionSchema.index({ tags: 1 });

export const Reaction: Model<IReaction> = mongoose.model<IReaction>(
  "Reaction",
  ReactionSchema
);

// ═══════════════════════════════════════════════════════════════
// 4. REACTION–ELEMENT MAPPING (Many-to-Many)
// ═══════════════════════════════════════════════════════════════

export interface IReactionElement extends Document {
  reaction_id: Types.ObjectId;
  element_id: Types.ObjectId;
  atomic_number: number;          // denormalized
  symbol: string;                 // denormalized
  role: "reactant" | "product" | "catalyst" | "solvent";
  stoichiometric_coefficient: number;
  oxidation_state_change?: {
    before: number;
    after: number;
  };
  notes?: string;
}

const ReactionElementSchema = new Schema<IReactionElement>(
  {
    reaction_id: {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
      required: true,
      index: true,
    },
    element_id: {
      type: Schema.Types.ObjectId,
      ref: "Element",
      required: true,
      index: true,
    },
    atomic_number: { type: Number, required: true },
    symbol: { type: String, required: true },
    role: {
      type: String,
      enum: ["reactant", "product", "catalyst", "solvent"],
      required: true,
    },
    stoichiometric_coefficient: { type: Number, default: 1 },
    oxidation_state_change: {
      before: Number,
      after: Number,
    },
    notes: { type: String },
  },
  {
    collection: "reaction_elements",
    timestamps: false,
    _id: true,
  }
);

// An element+role pair must be unique per reaction
// (e.g., H₂ cannot appear twice as reactant — but CAN appear as both reactant AND product)
ReactionElementSchema.index(
  { reaction_id: 1, element_id: 1, role: 1 },
  { unique: true, name: "unique_reaction_element_role" }
);
ReactionElementSchema.index({ element_id: 1, role: 1 }, { name: "element_reactions" });
// Efficient lookup of all elements participating in a reaction
ReactionElementSchema.index({ reaction_id: 1, role: 1 }, { name: "reaction_by_role" });

export const ReactionElement: Model<IReactionElement> =
  mongoose.model<IReactionElement>("ReactionElement", ReactionElementSchema);

// ═══════════════════════════════════════════════════════════════
// 5. COMPOUNDS
// ═══════════════════════════════════════════════════════════════

export interface ICompound extends Document {
  name: string;
  iupac_name?: string;
  formula: string;
  formula_latex?: string;
  molecular_structure?: string;      // SMILES notation
  inchi?: string;                    // International Chemical Identifier
  molar_mass: number;
  physical_state: "solid" | "liquid" | "gas" | "plasma" | "unknown";
  color: string;
  density_g_cm3?: number;
  melting_point_k?: number;
  boiling_point_k?: number;
  solubility: {
    water?: string;
    ethanol?: string;
    other?: string;
  };
  ph?: number;                       // for aqueous solutions
  refractive_index?: number;
  hazard_level: "safe" | "low" | "moderate" | "high" | "extreme";
  ghs_hazard_codes: string[];
  description: string;
  uses: string;
  industrial_production?: string;
  cas_number?: string;
  pubchem_cid?: number;
  created_at: Date;
  updated_at: Date;
}

const CompoundSchema = new Schema<ICompound>(
  {
    name: { type: String, required: true, index: true },
    iupac_name: { type: String },
    formula: { type: String, required: true, index: true },
    formula_latex: { type: String },
    molecular_structure: { type: String },
    inchi: { type: String, sparse: true },
    molar_mass: { type: Number, required: true },
    physical_state: {
      type: String,
      enum: ["solid", "liquid", "gas", "plasma", "unknown"],
      required: true,
    },
    color: { type: String, default: "colorless" },
    density_g_cm3: { type: Number },
    melting_point_k: { type: Number },
    boiling_point_k: { type: Number },
    solubility: {
      water: String,
      ethanol: String,
      other: String,
    },
    ph: { type: Number, min: 0, max: 14 },
    refractive_index: { type: Number },
    hazard_level: {
      type: String,
      enum: ["safe", "low", "moderate", "high", "extreme"],
      default: "low",
    },
    ghs_hazard_codes: { type: [String], default: [] },
    description: { type: String, required: true },
    uses: { type: String, default: "" },
    industrial_production: { type: String },
    cas_number: { type: String, sparse: true },
    pubchem_cid: { type: Number, sparse: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "compounds",
  }
);

CompoundSchema.index(
  { name: "text", formula: "text", description: "text", iupac_name: "text" },
  { weights: { formula: 10, name: 8 }, name: "compound_text_search" }
);
CompoundSchema.index({ molar_mass: 1 });
CompoundSchema.index({ hazard_level: 1 });
CompoundSchema.index({ physical_state: 1 });

export const Compound: Model<ICompound> = mongoose.model<ICompound>(
  "Compound",
  CompoundSchema
);

// ═══════════════════════════════════════════════════════════════
// 6. COMPOUND–ELEMENT RELATION
// ═══════════════════════════════════════════════════════════════

export interface ICompoundElement extends Document {
  compound_id: Types.ObjectId;
  element_id: Types.ObjectId;
  atomic_number: number;          // denormalized
  symbol: string;                 // denormalized
  atom_count: number;             // ratio (e.g., 2 for H in H₂O)
  mass_fraction_percent?: number; // % of compound's mass
  oxidation_state?: number;
}

const CompoundElementSchema = new Schema<ICompoundElement>(
  {
    compound_id: {
      type: Schema.Types.ObjectId,
      ref: "Compound",
      required: true,
      index: true,
    },
    element_id: {
      type: Schema.Types.ObjectId,
      ref: "Element",
      required: true,
      index: true,
    },
    atomic_number: { type: Number, required: true },
    symbol: { type: String, required: true },
    atom_count: { type: Number, required: true, min: 1 },
    mass_fraction_percent: { type: Number },
    oxidation_state: { type: Number },
  },
  {
    collection: "compound_elements",
    timestamps: false,
  }
);

CompoundElementSchema.index(
  { compound_id: 1, element_id: 1 },
  { unique: true, name: "unique_compound_element" }
);
// Reverse lookup: find all compounds that contain a given element
CompoundElementSchema.index({ element_id: 1, atom_count: 1 }, { name: "element_in_compounds" });
// Lookup by symbol for fast formula parsing
CompoundElementSchema.index({ symbol: 1 }, { name: "compound_element_symbol" });

export const CompoundElement: Model<ICompoundElement> =
  mongoose.model<ICompoundElement>("CompoundElement", CompoundElementSchema);

// ═══════════════════════════════════════════════════════════════
// 7. ELEMENT VISUAL METADATA
// ═══════════════════════════════════════════════════════════════

export interface IElementVisualMeta extends Document {
  element_id: Types.ObjectId;
  atomic_number: number;
  display_color: string;           // hex or CSS color
  border_color: string;
  category_color: string;
  background_gradient?: string;    // CSS gradient string
  glow_effect: boolean;
  glow_color?: string;
  animation_type:
    | "pulse"
    | "shimmer"
    | "spark"
    | "glow"
    | "orbit"
    | "none";
  animation_intensity: "low" | "medium" | "high";
  icon_path?: string;              // SVG path or asset key
  bohr_model_config?: {
    shell_radii: number[];
    electron_colors: string[];
    nucleus_color: string;
  };
  spectrum_colors: string[];       // emission spectrum colors (hex)
  model_3d_url?: string;           // URL to 3D model asset (renamed: identifiers cannot start with digit)
  created_at: Date;
  updated_at: Date;
}

const ElementVisualMetaSchema = new Schema<IElementVisualMeta>(
  {
    element_id: {
      type: Schema.Types.ObjectId,
      ref: "Element",
      required: true,
      unique: true,
      index: true,
    },
    atomic_number: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    display_color: { type: String, required: true, default: "#cccccc" },
    border_color: { type: String, required: true, default: "#aaaaaa" },
    category_color: { type: String, required: true, default: "#888888" },
    background_gradient: { type: String },
    glow_effect: { type: Boolean, default: false },
    glow_color: { type: String },
    animation_type: {
      type: String,
      enum: ["pulse", "shimmer", "spark", "glow", "orbit", "none"],
      default: "none",
    },
    animation_intensity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    icon_path: { type: String },
    bohr_model_config: {
      shell_radii: [Number],
      electron_colors: [String],
      nucleus_color: String,
    },
    spectrum_colors: { type: [String], default: [] },
    model_3d_url: { type: String },  // renamed from "3d_model_url" — TS identifiers cannot start with a digit
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "element_visual_meta",
  }
);

export const ElementVisualMeta: Model<IElementVisualMeta> =
  mongoose.model<IElementVisualMeta>("ElementVisualMeta", ElementVisualMetaSchema);

// ═══════════════════════════════════════════════════════════════
// 8. SIMULATION META (Future-proof for simulation engine)
// ═══════════════════════════════════════════════════════════════

export interface ISimulationMeta extends Document {
  element_id: Types.ObjectId;
  atomic_number: number;
  particle_mass_amu: number;
  protons: number;
  neutrons_most_common: number;
  electrons: number;
  spin: string;
  magnetic_moment?: number;
  nuclear_spin?: string;
  cross_section_barn?: number;     // neutron cross section
  work_function_ev?: number;       // photoelectric effect
  plasma_frequency_hz?: number;
  fermi_energy_ev?: number;
  lattice_structure?: string;      // BCC, FCC, HCP, etc.
  lattice_constant_angstrom?: number;
  collision_model?: string;        // for molecular dynamics
  bond_types_supported: string[];  // covalent, ionic, metallic, etc.
  created_at: Date;
  updated_at: Date;
}

const SimulationMetaSchema = new Schema<ISimulationMeta>(
  {
    element_id: {
      type: Schema.Types.ObjectId,
      ref: "Element",
      required: true,
      unique: true,
      index: true,
    },
    atomic_number: { type: Number, required: true, unique: true, index: true },
    particle_mass_amu: { type: Number, required: true },
    protons: { type: Number, required: true },
    neutrons_most_common: { type: Number, required: true },
    electrons: { type: Number, required: true },
    spin: { type: String },
    magnetic_moment: { type: Number },
    nuclear_spin: { type: String },
    cross_section_barn: { type: Number },
    work_function_ev: { type: Number },
    plasma_frequency_hz: { type: Number },
    fermi_energy_ev: { type: Number },
    lattice_structure: { type: String },
    lattice_constant_angstrom: { type: Number },
    collision_model: { type: String },
    bond_types_supported: { type: [String], default: [] },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "simulation_meta",
  }
);

export const SimulationMeta: Model<ISimulationMeta> =
  mongoose.model<ISimulationMeta>("SimulationMeta", SimulationMetaSchema);

// ═══════════════════════════════════════════════════════════════
// 9. GAMIFICATION META (Future-proof for gamification system)
// ═══════════════════════════════════════════════════════════════

export interface IGamificationMeta extends Document {
  element_id: Types.ObjectId;
  atomic_number: number;
  rarity_tier: "common" | "uncommon" | "rare" | "epic" | "legendary";
  xp_reward: number;
  unlock_level: number;
  quiz_questions: {
    question: string;
    options: string[];
    correct_index: number;
    difficulty: "easy" | "medium" | "hard";
    explanation: string;
  }[];
  achievement_badge?: string;
  challenge_type?: string;
  collectible_card_art?: string;
  created_at: Date;
  updated_at: Date;
}

const GamificationMetaSchema = new Schema<IGamificationMeta>(
  {
    element_id: {
      type: Schema.Types.ObjectId,
      ref: "Element",
      required: true,
      unique: true,
      index: true,
    },
    atomic_number: { type: Number, required: true, unique: true, index: true },
    rarity_tier: {
      type: String,
      enum: ["common", "uncommon", "rare", "epic", "legendary"],
      required: true,
      index: true,
    },
    xp_reward: { type: Number, default: 10 },
    unlock_level: { type: Number, default: 1 },
    quiz_questions: {
      type: [
        {
          question: { type: String, required: true },
          options: { type: [String], required: true },
          correct_index: { type: Number, required: true },
          difficulty: {
            type: String,
            enum: ["easy", "medium", "hard"],
            default: "medium",
          },
          explanation: { type: String },
          _id: false,
        },
      ],
      default: [],
    },
    achievement_badge: { type: String },
    challenge_type: { type: String },
    collectible_card_art: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "gamification_meta",
  }
);

export const GamificationMeta: Model<IGamificationMeta> =
  mongoose.model<IGamificationMeta>("GamificationMeta", GamificationMetaSchema);

// ═══════════════════════════════════════════════════════════════
// 10. AI TUTOR SESSION LOG (Future-proof for AI tutor)
// ═══════════════════════════════════════════════════════════════

export interface IAITutorSession extends Document {
  user_id: Types.ObjectId;
  session_start: Date;
  session_end?: Date;
  elements_discussed: number[];     // atomic numbers
  topics_covered: string[];
  difficulty_level: "beginner" | "intermediate" | "advanced";
  messages: {
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
    element_context?: number;       // atomic_number if element-specific
  }[];
  quiz_results?: {
    element_id: Types.ObjectId;
    score: number;
    max_score: number;
    time_seconds: number;
  }[];
  created_at: Date;
  updated_at: Date;
}

const AITutorSessionSchema = new Schema<IAITutorSession>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    session_start: { type: Date, required: true },
    session_end: { type: Date },
    elements_discussed: { type: [Number], default: [] },
    topics_covered: { type: [String], default: [] },
    difficulty_level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    messages: {
      type: [
        {
          role: { type: String, enum: ["user", "assistant"], required: true },
          content: { type: String, required: true },
          timestamp: { type: Date, required: true },
          element_context: { type: Number },
          _id: false,
        },
      ],
      default: [],
    },
    quiz_results: {
      type: [
        {
          element_id: { type: Schema.Types.ObjectId, ref: "Element" },
          score: Number,
          max_score: Number,
          time_seconds: Number,
          _id: false,
        },
      ],
      default: [],
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "ai_tutor_sessions",
  }
);

AITutorSessionSchema.index({ user_id: 1, session_start: -1 });
AITutorSessionSchema.index({ elements_discussed: 1 });
AITutorSessionSchema.index({ difficulty_level: 1 });
// TTL: automatically purge sessions older than 1 year (365 days) to control storage growth
AITutorSessionSchema.index(
  { session_start: 1 },
  { expireAfterSeconds: 60 * 60 * 24 * 365, name: "session_ttl_1yr" }
);

export const AITutorSession: Model<IAITutorSession> =
  mongoose.model<IAITutorSession>("AITutorSession", AITutorSessionSchema);
