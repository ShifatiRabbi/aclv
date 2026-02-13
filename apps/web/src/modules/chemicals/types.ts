export type ChemicalState = 'solid' | 'liquid' | 'gas' | 'powder' | 'plasma';

export interface Chemical {
  id: string;
  name: string;
  formula: string;
  state: ChemicalState;
  color: string;
  molecularWeight: number; // g/mol
  solubility: number; // g per 100ml
  description?: string;
}

export interface SimulationState {
  activeChemical: Chemical;
  volume: number; // ml
  mass: number; // grams
  temperature: number; // Celsius
}