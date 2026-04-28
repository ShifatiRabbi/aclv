/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ElectronicConfiguration {
  full: string;
  shorthand: string;
  noble_gas_core: string | null;
  valence_electrons: number;
  electron_shells: number[];
}

export interface Radii {
  atomic: number | null;
  covalent: number | null;
  van_der_waals: number | null;
  ionic: number | null;
}

export interface Thermodynamics {
  melting_point_k: number | null;
  boiling_point_k: number | null;
  heat_of_fusion_kj_mol: number | null;
  heat_of_vaporization_kj_mol: number | null;
  specific_heat_j_gk: number | null;
  thermal_conductivity_w_mk: number | null;
}

export interface Electrical {
  electronegativity_pauling: number | null;
  ionization_energies_kj_mol: number[];
  electron_affinity_kj_mol: number | null;
  electrical_conductivity_s_m: number | null;
  magnetic_type: string | null;
}

export interface Abundance {
  earth_crust_ppm: number | null;
  ocean_ppm: number | null;
  universe_ppm: number | null;
  human_body_ppm: number | null;
}

export interface Isotope {
  mass_number: number;
  natural_abundance_percent: number;
  half_life: string;
  decay_mode: string | null;
  is_stable: boolean;
}

export interface Discovery {
  discoverer: string;
  year: number | string;
  location: string;
  named_after: string;
  etymology: string;
}

export interface Element {
  atomic_number: number;
  name: string;
  symbol: string;
  latin_name: string;
  period: number;
  group: number | null;
  block: string;
  category: string;
  phase_at_stp: string;
  standard_state_color: string;
  atomic_mass: number;
  density_g_cm3: number | null;
  valency: number[];
  oxidation_states: number[];
  common_oxidation_state: number | null;
  electronic_configuration: ElectronicConfiguration;
  radii: Radii;
  thermodynamics: Thermodynamics;
  electrical: Electrical;
  abundance: Abundance;
  isotopes: Isotope[];
  radioactive: boolean;
  stability: string;
  discovery: Discovery;
  cas_number: string;
  description: string;
  detailed_description: string;
  toxicity_level: string;
  hazard_codes: string[];
}

export interface Reaction {
  id: string;
  title: string;
  equation: string;
  description: string;
  conditions: string;
  relatedElements: number[]; // Atomic numbers
  role: 'reactant' | 'product' | 'catalyst';
}
