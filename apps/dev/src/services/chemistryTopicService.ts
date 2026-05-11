import { ElementModel } from '../models/Element.ts'
import { BlogModel } from '../models/Blog.ts'

export type EducationalTopicKind = 'element' | 'concept'

export interface ChemistryTopicPick {
  kind: EducationalTopicKind
  topicKey: string
  conceptId?: string
  elementPayload?: Record<string, unknown>
}

const CONCEPT_POOL: Array<{ id: string; weight: number; seed: string }> = [
  { id: 'chemical-reaction-basics', weight: 2, seed: 'Types of chemical reactions and how to read a balanced equation' },
  { id: 'acids-bases', weight: 2, seed: 'Acids, bases, pH, and buffer ideas for laboratory learners' },
  { id: 'organic-intro', weight: 2, seed: 'Introductory organic chemistry: functional groups and everyday examples' },
  { id: 'atomic-structure', weight: 2, seed: 'Atomic structure: protons, neutrons, electrons, and orbitals explained simply' },
  { id: 'bonding', weight: 2, seed: 'Ionic vs covalent bonding with relatable examples and lab connections' },
  { id: 'redox', weight: 1.5, seed: 'Oxidation and reduction in everyday chemistry and intro labs' },
  { id: 'electrochemistry', weight: 1, seed: 'Electrochemistry essentials for students: cells, voltage intuition, safety' },
  { id: 'lab-safety', weight: 2.5, seed: 'Laboratory safety habits that every chemistry student should internalize' },
  { id: 'famous-experiments', weight: 1, seed: 'A famous chemistry experiment explained for students, with why it matters' },
  { id: 'environmental-chemistry', weight: 1.5, seed: 'Environmental chemistry topic: air, water, or climate-relevant chemistry' },
  { id: 'industrial-chemistry', weight: 1, seed: 'Industrial chemistry angle: how a common chemical is made or used safely' },
  { id: 'materials', weight: 1.5, seed: 'Materials science for learners: metals, polymers, or nanomaterials basics' }
]

function weightedPick<T extends { weight: number }>(items: T[]): T {
  const total = items.reduce((sum, item) => sum + item.weight, 0)
  let roll = Math.random() * total
  for (const item of items) {
    roll -= item.weight
    if (roll <= 0) {
      return item
    }
  }
  return items[items.length - 1]
}

function summarizeElement(element: Record<string, unknown>) {
  return {
    atomic_number: element.atomic_number,
    name: element.name,
    symbol: element.symbol,
    category: element.category,
    period: element.period,
    group: element.group,
    block: element.block,
    atomic_mass: element.atomic_mass,
    phase_at_stp: element.phase_at_stp,
    electronegativity_pauling: (element.electrical as any)?.electronegativity_pauling,
    discovery: element.discovery,
    description: element.description,
    detailed_description: element.detailed_description,
    common_oxidation_state: element.common_oxidation_state,
    oxidation_states: element.oxidation_states,
    valency: element.valency,
    hazard_codes: element.hazard_codes,
    toxicity_level: element.toxicity_level,
    density_g_cm3: element.density_g_cm3,
    melting_point_k: (element.thermodynamics as any)?.melting_point_k,
    boiling_point_k: (element.thermodynamics as any)?.boiling_point_k,
    electron_configuration_shorthand: (element.electronic_configuration as any)?.shorthand
  }
}

export const chemistryTopicService = {
  async getRecentTopicKeys(limit = 40): Promise<string[]> {
    const model = BlogModel as any
    const rows = await model.find({ topicKey: { $exists: true, $ne: null } }, { topicKey: 1 }).sort({ createdAt: -1 }).limit(limit).lean()
    return rows.map((r: { topicKey: string }) => r.topicKey).filter(Boolean)
  },

  async getRecentElementAtomicNumbers(limit = 15): Promise<number[]> {
    const model = BlogModel as any
    const rows = await model
      .find({ elementAtomicNumber: { $exists: true } }, { elementAtomicNumber: 1 })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean()
    return rows.map((r: { elementAtomicNumber: number }) => r.elementAtomicNumber).filter((n: number) => typeof n === 'number')
  },

  async pickEducationalTopic(): Promise<ChemistryTopicPick> {
    const rollKind = Math.random()
    const recentElementZ = await this.getRecentElementAtomicNumbers(12)
    const recentKeys = await this.getRecentTopicKeys(30)

    if (rollKind < 0.55) {
      const count = await (ElementModel as any).countDocuments()
      if (!count) {
        return this.pickConceptOnly(recentKeys)
      }

      let attempts = 0
      while (attempts < 12) {
        attempts += 1
        const skip = Math.floor(Math.random() * count)
        const element = await (ElementModel as any).findOne().skip(skip).lean()
        if (!element) {
          break
        }
        const z = element.atomic_number as number
        const topicKey = `element:${z}`
        const usageCount = recentElementZ.filter((n) => n === z).length
        if (usageCount >= 2) {
          continue
        }
        if (recentKeys.includes(topicKey)) {
          continue
        }
        console.log('[chemistry-topic] selected element', { symbol: element.symbol, atomicNumber: z })
        return {
          kind: 'element',
          topicKey,
          elementPayload: summarizeElement(element)
        }
      }
    }

    return this.pickConceptOnly(recentKeys)
  },

  pickConceptOnly(recentKeys: string[]): ChemistryTopicPick {
    const avoid = new Set(recentKeys)
    const candidates = CONCEPT_POOL.filter((c) => !avoid.has(`concept:${c.id}`))
    const pool = candidates.length ? candidates : CONCEPT_POOL
    const choice = weightedPick(pool)
    console.log('[chemistry-topic] selected concept', { id: choice.id })
    return {
      kind: 'concept',
      topicKey: `concept:${choice.id}`,
      conceptId: choice.id,
      elementPayload: { concept_seed: choice.seed }
    }
  }
}
