export type ChemicalState = 'solid' | 'powder' | 'liquid' | 'gas';

export interface Chemical {
  id: string;
  name: string;
  formula: string;
  state: ChemicalState;
  color: string;
  molecularWeight: number; // g/mol
  density?: number; // g/cm³
  solubility?: number; // g per 100ml H₂O
  description?: string;
  allowsLiquidView?: boolean;
}

export interface SimulationState {
  activeChemical: Chemical;
  volume: number; // ml
  mass: number; // grams
  isLiquidMode: boolean;
  temperature: number; // K
  pressure?: number; // atm
}