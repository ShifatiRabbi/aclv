import type { Chemical } from '../types'

export interface LabInventoryItem {
  chemical: Chemical
  quantity: number
  molarity?: number
}

export interface SimulationState {
  temperature: number
  pressure: number
  volume: number
  contents: LabInventoryItem[]
  precipitateMass: number
  gasVolume: number
  pH: number
}

export class SimulationEngine {
  static validateAction(
    currentStep: any,
    action: string,
    chemical: string | null,
    tool: string | null
  ): { valid: boolean; error?: string } {
    if (!chemical && currentStep.action !== 'stir') {
      return { valid: false, error: 'Please select a chemical first.' }
    }

    if (!tool) {
      return { valid: false, error: 'Please select a tool first.' }
    }

    const actionMatch = currentStep.action === action
    const chemicalMatch = currentStep.chemical === chemical
    const toolMatch = this.getRequiredTool(currentStep.action) === tool

    if (!actionMatch) return { valid: false, error: `Incorrect action. You should ${currentStep.action}.` }
    if (!chemicalMatch) return { valid: false, error: `Wrong chemical. The step requires ${currentStep.chemical}.` }
    if (!toolMatch) return { valid: false, error: `Wrong tool. You need a ${this.getRequiredTool(currentStep.action)}.` }

    return { valid: true }
  }

  static getRequiredTool(action: string): string {
    switch (action) {
      case 'pipette':
        return 'pipette'
      case 'drop':
        return 'dropper'
      case 'burette':
        return 'burette'
      case 'pour':
        return 'beaker'
      default:
        return 'beaker'
    }
  }

  static mix(existing: LabInventoryItem[], addition: LabInventoryItem): SimulationState {
    const totalVolume = existing.reduce((acc, item) => acc + item.quantity, 0) + addition.quantity

    const newPH = 7.0

    return {
      temperature: 25,
      pressure: 1,
      volume: totalVolume,
      contents: [...existing, addition],
      precipitateMass: 0,
      gasVolume: 0,
      pH: newPH
    }
  }
}

