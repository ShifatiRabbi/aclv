/**
 * Virtual Chemistry Lab — API Architecture
 * REST + GraphQL Schema Design
 * Production-Grade | Scalable to Millions of Users
 */

// ═══════════════════════════════════════════════════════════════
// PART 1: REST API STRUCTURE (Express / Fastify / NestJS)
// ═══════════════════════════════════════════════════════════════

/*
BASE URL: https://api.virtualchemlab.io/v1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ELEMENTS ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT: In Express/Fastify, STATIC route segments must be declared
BEFORE parameterized routes to avoid the param swallowing static paths.
e.g., /elements/search must be registered before /elements/:atomicNumber.

GET    /elements                          → All elements (paginated, field-projected)

── Static lookup routes (MUST be before /:atomicNumber) ──
GET    /elements/search?q=gold&limit=10   → Full-text search (static: registered first)
GET    /elements/periodic-table           → Optimized periodic table view (static: registered first)
GET    /elements/symbol/:symbol           → Lookup by symbol (e.g., /symbol/Fe)
GET    /elements/name/:name               → Lookup by name (case-insensitive)
GET    /elements/compare?ids=1,6,8        → Compare multiple elements (up to 10)

── Parameterized routes (AFTER all static routes) ──
GET    /elements/:atomicNumber            → Single element by atomic number
GET    /elements/:atomicNumber/knowledge  → Educational content
GET    /elements/:atomicNumber/reactions  → Reactions involving element
GET    /elements/:atomicNumber/compounds  → Compounds containing element
GET    /elements/:atomicNumber/visual     → Visual metadata
GET    /elements/:atomicNumber/simulation → Simulation parameters
GET    /elements/:atomicNumber/gamification → Gamification/quiz data

── Filter queries (all via /elements) ──
GET    /elements?period=4&group=8         → Filter by position
GET    /elements?category=noble+gas       → Filter by category
GET    /elements?block=d&phase=solid      → Multi-filter
GET    /elements?radioactive=true         → Filter radioactive
GET    /elements?sort=electronegativity&order=desc → Sort by any numeric field
GET    /elements?page=2&limit=20          → Pagination (default: page 1, limit 20)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REACTIONS ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GET    /reactions                         → All reactions (paginated)
GET    /reactions/:id                     → Single reaction with element mappings
GET    /reactions?type=redox              → Filter by type
GET    /reactions?energyChange=exothermic → Filter thermodynamic type
GET    /reactions/search?q=combustion     → Text search reactions
POST   /reactions/simulate               → Trigger simulation (future)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPOUNDS ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GET    /compounds                         → All compounds (paginated)
GET    /compounds/:id                     → Single compound
GET    /compounds/formula/:formula        → Lookup by formula (e.g., H2O)
GET    /compounds/search?q=water          → Text search
GET    /compounds?hazard=high             → Filter by hazard level
GET    /compounds/:id/elements            → Elements in compound

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GAMIFICATION ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GET    /gamification/elements/:id         → Rarity, XP, quiz questions
GET    /gamification/quiz/random?count=5  → Random quiz questions
POST   /gamification/quiz/submit          → Submit quiz answers, get XP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI TUTOR ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POST   /tutor/session/start               → Start AI tutor session
POST   /tutor/session/:id/message        → Send message, receive AI response
GET    /tutor/session/:id                 → Get session history
GET    /tutor/sessions                    → User's session list

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIMULATION ENDPOINTS  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POST   /simulation/mix                    → Mix elements/compounds
POST   /simulation/reaction/:id/run      → Run a specific reaction
GET    /simulation/session/:id           → Get simulation state
WS     /simulation/live/:sessionId       → WebSocket for real-time sim

*/

// ═══════════════════════════════════════════════════════════════
// PART 2: GRAPHQL SCHEMA (for future GraphQL layer)
// ═══════════════════════════════════════════════════════════════

export const graphqlSchema = `
  # ── Scalars ──────────────────────────────
  scalar JSON
  scalar Date

  # ── Enums ────────────────────────────────
  enum Phase { solid liquid gas unknown }
  enum Block { s p d f }
  enum EnergyChange { endothermic exothermic thermoneutral }
  enum HazardLevel { safe low moderate high extreme }
  enum ToxicityLevel { none low moderate high extreme }
  enum Stability { stable unstable primordial }
  enum AnimationType { pulse shimmer spark glow orbit none }
  enum RarityTier { common uncommon rare epic legendary }
  enum ReactionType {
    acid_base redox precipitation combustion synthesis
    decomposition single_displacement double_displacement
    polymerization nuclear photochemical electrolytic
    complexation hydrolysis other
  }

  # ── Electronic Configuration ──────────────
  type ElectronicConfig {
    full: String!
    shorthand: String!
    noble_gas_core: String
    valence_electrons: Int
    electron_shells: [Int]
  }

  # ── Thermodynamics ────────────────────────
  type Thermodynamics {
    melting_point_k: Float
    boiling_point_k: Float
    melting_point_celsius: Float  # computed virtual
    boiling_point_celsius: Float  # computed virtual
    heat_of_fusion_kj_mol: Float
    heat_of_vaporization_kj_mol: Float
    specific_heat_j_gk: Float
    thermal_conductivity_w_mk: Float
  }

  # ── Radii ─────────────────────────────────
  type Radii {
    atomic: Float
    covalent: Float
    van_der_waals: Float
    ionic: Float
  }

  # ── Electrical Properties ─────────────────
  type Electrical {
    electronegativity_pauling: Float
    ionization_energies_kj_mol: [Float]
    electron_affinity_kj_mol: Float
    electrical_conductivity_s_m: Float
    magnetic_type: String
  }

  # ── Abundance ─────────────────────────────
  type Abundance {
    earth_crust_ppm: Float
    ocean_ppm: Float
    universe_ppm: Float
    human_body_ppm: Float
  }

  # ── Isotope ───────────────────────────────
  type Isotope {
    mass_number: Int!
    natural_abundance_percent: Float
    half_life: String
    decay_mode: String
    is_stable: Boolean!
  }

  # ── Discovery ─────────────────────────────
  type Discovery {
    discoverer: String
    year: Int
    location: String
    named_after: String
    etymology: String
  }

  # ── Element (Main Type) ───────────────────
  type Element {
    id: ID!
    atomic_number: Int!
    name: String!
    symbol: String!
    latin_name: String
    period: Int!
    group: Int
    block: Block!
    category: String!
    phase_at_stp: Phase!
    standard_state_color: String
    atomic_mass: Float!
    density_g_cm3: Float
    valency: [Int]
    oxidation_states: [Int]
    common_oxidation_state: Int
    electronic_configuration: ElectronicConfig!
    radii: Radii
    thermodynamics: Thermodynamics
    electrical: Electrical
    abundance: Abundance
    isotopes: [Isotope]
    radioactive: Boolean!
    stability: Stability!
    half_life: String
    discovery: Discovery
    description: String!
    detailed_description: String!
    toxicity_level: ToxicityLevel!
    hazard_codes: [String]
    created_at: Date!
    updated_at: Date!
    
    # Relations (resolved via data loaders)
    knowledge: ElementKnowledge
    visual_meta: ElementVisualMeta
    simulation_meta: SimulationMeta
    gamification_meta: GamificationMeta
    reactions: [ReactionElement]
    compounds: [CompoundElement]
  }

  # ── Element Knowledge ─────────────────────
  type ElementKnowledge {
    element_id: ID!
    atomic_number: Int!
    uses_positive: String
    hazards_negative: String
    lab_storage: String
    industrial_usage: String
    biological_role: String
    safety_precautions: String
    interesting_facts: [String]
    fun_fact: String
    common_compounds: [InlineCompound]
    allotropes: [Allotrope]
    historical_context: String
    environmental_impact: String
    medical_applications: String
  }

  type InlineCompound {
    name: String!
    formula: String!
    description: String
  }

  type Allotrope {
    name: String!
    description: String
    structure: String
  }

  # ── Visual Meta ───────────────────────────
  type ElementVisualMeta {
    element_id: ID!
    atomic_number: Int!
    display_color: String!
    border_color: String!
    category_color: String!
    background_gradient: String
    glow_effect: Boolean!
    glow_color: String
    animation_type: AnimationType!
    animation_intensity: String!
    spectrum_colors: [String]
    bohr_model_config: BohrModelConfig
  }

  type BohrModelConfig {
    shell_radii: [Float]
    electron_colors: [String]
    nucleus_color: String
  }

  # ── Simulation Meta ───────────────────────
  type SimulationMeta {
    element_id: ID!
    atomic_number: Int!
    particle_mass_amu: Float!
    protons: Int!
    neutrons_most_common: Int!
    electrons: Int!
    spin: String
    lattice_structure: String
    lattice_constant_angstrom: Float
    bond_types_supported: [String]
  }

  # ── Gamification Meta ─────────────────────
  type GamificationMeta {
    element_id: ID!
    atomic_number: Int!
    rarity_tier: RarityTier!
    xp_reward: Int!
    unlock_level: Int!
    quiz_questions: [QuizQuestion]
    achievement_badge: String
    collectible_card_art: String
  }

  type QuizQuestion {
    question: String!
    options: [String]!
    correct_index: Int!
    difficulty: String!
    explanation: String
  }

  # ── Reactions ─────────────────────────────
  type Reaction {
    id: ID!
    name: String!
    type: ReactionType!
    equation_text: String!
    equation_latex: String
    description: String!
    energy_change: EnergyChange!
    enthalpy_change_kj_mol: Float
    catalyst: String
    hazard_level: HazardLevel!
    tags: [String]
    elements: [ReactionElement]
  }

  type ReactionElement {
    reaction: Reaction
    element: Element
    role: String!
    stoichiometric_coefficient: Float!
    oxidation_state_change: OxidationStateChange
  }

  type OxidationStateChange {
    before: Int
    after: Int
  }

  # ── Compounds ─────────────────────────────
  type Compound {
    id: ID!
    name: String!
    iupac_name: String
    formula: String!
    molar_mass: Float!
    physical_state: Phase!
    color: String
    density_g_cm3: Float
    melting_point_k: Float
    boiling_point_k: Float
    hazard_level: HazardLevel!
    description: String!
    elements: [CompoundElement]
  }

  type CompoundElement {
    compound: Compound
    element: Element
    atom_count: Int!
    mass_fraction_percent: Float
    oxidation_state: Int
  }

  # ── Filters & Pagination ──────────────────
  input ElementFilter {
    period: Int
    group: Int
    block: Block
    category: String
    phase_at_stp: Phase
    radioactive: Boolean
    stability: Stability
    toxicity_level: ToxicityLevel
    min_atomic_mass: Float
    max_atomic_mass: Float
    min_electronegativity: Float
    max_electronegativity: Float
  }

  input PaginationInput {
    page: Int = 1
    limit: Int = 20
    sort_by: String = "atomic_number"
    sort_order: String = "asc"
  }

  type PaginatedElements {
    elements: [Element]!
    total: Int!
    page: Int!
    pages: Int!
    has_next: Boolean!
  }

  # ── Root Types ────────────────────────────
  type Query {
    # Single element lookups
    element(atomic_number: Int!): Element
    elementBySymbol(symbol: String!): Element
    elementByName(name: String!): Element
    
    # Collection queries
    elements(filter: ElementFilter, pagination: PaginationInput): PaginatedElements!
    elementsInPeriod(period: Int!): [Element]!
    elementsInGroup(group: Int!): [Element]!
    elementsInBlock(block: Block!): [Element]!
    periodicTable: [[Element]]   # 7 rows × 18 cols; null = empty cell in the standard table layout
    
    # Search
    searchElements(query: String!, limit: Int): [Element]!
    searchCompounds(query: String!, limit: Int): [Compound]!
    searchReactions(query: String!, limit: Int): [Reaction]!
    
    # Compare
    compareElements(atomic_numbers: [Int]!): [Element]!
    
    # Reactions & Compounds
    reaction(id: ID!): Reaction
    reactions(type: ReactionType, energy_change: EnergyChange): [Reaction]!
    compound(id: ID!): Compound
    compounds(hazard_level: HazardLevel): [Compound]!
    
    # Gamification
    randomQuiz(count: Int, difficulty: String): [QuizQuestion]!
    
    # Educational
    elementKnowledge(atomic_number: Int!): ElementKnowledge
  }

  type Mutation {
    # Admin only (protected by role-based auth)
    createElement(input: JSON!): Element
    updateElement(atomic_number: Int!, input: JSON!): Element
    createReaction(input: JSON!): Reaction
    createCompound(input: JSON!): Compound
    updateVisualMeta(atomic_number: Int!, input: JSON!): ElementVisualMeta
    
    # User actions
    submitQuiz(answers: JSON!): QuizResult
  }

  type QuizResult {
    score: Int!
    max_score: Int!
    xp_earned: Int!
    correct_elements: [Int]
    incorrect_elements: [Int]
  }

  type Subscription {
    simulationUpdate(session_id: ID!): SimulationEvent
    reactionProgress(reaction_id: ID!): ReactionProgress
  }

  type SimulationEvent {
    type: String!
    data: JSON
    timestamp: Date!
  }

  type ReactionProgress {
    percent_complete: Float!
    current_state: JSON
    timestamp: Date!
  }
`;

// ═══════════════════════════════════════════════════════════════
// PART 3: SAMPLE CONTROLLER (NestJS style)
// ═══════════════════════════════════════════════════════════════

export const elementsControllerSample = `
// elements.controller.ts — NestJS Example
// Demonstrates correct route ordering, auth guards, rate limiting, and caching.

import {
  Controller, Get, Param, Query, ParseIntPipe,
  UseInterceptors, UseGuards, DefaultValuePipe,
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { Throttle, ThrottleGuard } from '@nestjs/throttler';
import { OptionalAuthGuard } from '../auth/optional-auth.guard';

@Controller('v1/elements')
@UseInterceptors(CacheInterceptor)
@UseGuards(ThrottleGuard)
export class ElementsController {

  // ── STATIC ROUTES (must be declared BEFORE parameterized routes) ────────

  // GET /v1/elements/search?q=gold&limit=10
  // IMPORTANT: This must appear before /:atomicNumber or Express will match
  // "search" as the atomicNumber param value.
  @Get('search')
  @CacheTTL(60)           // 1 min cache — search results can change with new data
  @Throttle(30, 60)       // 30 requests per 60s per IP
  async search(
    @Query('q') query: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.elementsService.search(query, Math.min(limit, 50));
  }

  // GET /v1/elements/periodic-table — optimized flat view for UI grid rendering
  @Get('periodic-table')
  @CacheTTL(86400)        // 24 hr cache — periodic table never changes
  @Throttle(60, 60)
  async periodicTable() {
    return this.elementsService.getPeriodicTableView();
  }

  // GET /v1/elements/compare?ids=1,6,8
  @Get('compare')
  @CacheTTL(300)
  @Throttle(20, 60)
  async compare(@Query('ids') ids: string) {
    const atomicNumbers = ids.split(',').map(Number).slice(0, 10); // max 10
    return this.elementsService.compareElements(atomicNumbers);
  }

  // GET /v1/elements/symbol/:symbol
  @Get('symbol/:symbol')
  @CacheTTL(3600)
  @Throttle(60, 60)
  async findBySymbol(@Param('symbol') symbol: string) {
    return this.elementsService.findBySymbol(symbol);
  }

  // GET /v1/elements/name/:name
  @Get('name/:name')
  @CacheTTL(3600)
  @Throttle(60, 60)
  async findByName(@Param('name') name: string) {
    return this.elementsService.findByName(name);
  }

  // ── COLLECTION ROUTE ────────────────────────────────────────────────────

  // GET /v1/elements (with optional filters + pagination)
  @Get()
  @CacheTTL(300)
  @Throttle(60, 60)
  async findAll(@Query() query: ElementQueryDto) {
    return this.elementsService.findAll(query);
  }

  // ── PARAMETERIZED ROUTES (after all static routes) ──────────────────────

  // GET /v1/elements/:atomicNumber
  @Get(':atomicNumber')
  @CacheTTL(3600)         // 1 hr cache — element data is immutable
  @Throttle(120, 60)
  async findOne(
    @Param('atomicNumber', ParseIntPipe) atomicNumber: number,
  ) {
    return this.elementsService.findByAtomicNumber(atomicNumber);
  }

  // GET /v1/elements/:atomicNumber/knowledge
  @Get(':atomicNumber/knowledge')
  @CacheTTL(3600)
  @Throttle(60, 60)
  async getKnowledge(
    @Param('atomicNumber', ParseIntPipe) atomicNumber: number,
  ) {
    return this.elementsService.getKnowledge(atomicNumber);
  }

  // GET /v1/elements/:atomicNumber/visual
  @Get(':atomicNumber/visual')
  @CacheTTL(86400)        // 24 hr — visual meta changes rarely
  @Throttle(120, 60)
  async getVisual(
    @Param('atomicNumber', ParseIntPipe) atomicNumber: number,
  ) {
    return this.elementsService.getVisualMeta(atomicNumber);
  }

  // GET /v1/elements/:atomicNumber/reactions
  @Get(':atomicNumber/reactions')
  @CacheTTL(600)
  @Throttle(60, 60)
  async getReactions(
    @Param('atomicNumber', ParseIntPipe) atomicNumber: number,
  ) {
    return this.elementsService.getReactionsByElement(atomicNumber);
  }

  // GET /v1/elements/:atomicNumber/compounds
  @Get(':atomicNumber/compounds')
  @CacheTTL(600)
  @Throttle(60, 60)
  async getCompounds(
    @Param('atomicNumber', ParseIntPipe) atomicNumber: number,
  ) {
    return this.elementsService.getCompoundsByElement(atomicNumber);
  }

  // GET /v1/elements/:atomicNumber/simulation
  @Get(':atomicNumber/simulation')
  @CacheTTL(3600)
  @UseGuards(OptionalAuthGuard)  // simulation data may be premium
  async getSimulation(
    @Param('atomicNumber', ParseIntPipe) atomicNumber: number,
  ) {
    return this.elementsService.getSimulationMeta(atomicNumber);
  }
}
`;
