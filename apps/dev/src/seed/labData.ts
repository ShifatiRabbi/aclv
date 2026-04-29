export const chemicalsSeed = {
  chemicals: [

    // ═══════════════════════════════════════════════════════════════
    // SECTION 1: ALKALI & ALKALINE EARTH METALS (Pure Elements)
    // ═══════════════════════════════════════════════════════════════
    {
      id: '1',
      name: 'Sodium',
      formula: 'Na',
      state: 'solid',
      color: '#cbd5e1',
      molecularWeight: 22.99,
      density: 0.97,
      solubility: 0,
      cost: 15,
      hazards: ['highly reactive', 'flammable', 'water reactive'],
      allowsLiquidView: false,
      description: 'A soft, silvery-white, highly reactive alkali metal. Must be stored under mineral oil due to extreme reactivity with air and water.'
    },
    {
      id: '2',
      name: 'Potassium',
      formula: 'K',
      state: 'solid',
      color: '#94a3b8',
      molecularWeight: 39.10,
      density: 0.86,
      solubility: 0,
      cost: 20,
      hazards: ['highly reactive', 'flammable', 'water reactive'],
      allowsLiquidView: false,
      description: 'A soft silvery-white alkali metal that oxidizes rapidly in air and reacts vigorously with water. Essential for cell function in all living organisms.'
    },
    {
      id: '7',
      name: 'Lithium',
      formula: 'Li',
      state: 'solid',
      color: '#e2e8f0',
      molecularWeight: 6.94,
      density: 0.53,
      solubility: 0,
      cost: 30,
      hazards: ['reactive', 'flammable', 'water reactive'],
      allowsLiquidView: false,
      description: 'The lightest alkali metal. Soft, silvery-white, stored under mineral oil. Highly reactive.'
    },
    {
      id: '55',
      name: 'Calcium',
      formula: 'Ca',
      state: 'solid',
      color: '#e8e4d9',
      molecularWeight: 40.08,
      density: 1.55,
      solubility: 0,
      cost: 18,
      hazards: ['reactive', 'water reactive'],
      allowsLiquidView: false,
      description: 'A soft, gray alkaline earth metal. The fifth most abundant element in Earth\'s crust and essential for living organisms.'
    },
    {
      id: '19',
      name: 'Magnesium',
      formula: 'Mg',
      state: 'solid',
      color: '#94a3b8',
      molecularWeight: 24.31,
      density: 1.74,
      solubility: 0,
      cost: 12,
      hazards: ['flammable when powdered'],
      allowsLiquidView: false,
      description: 'A shiny gray solid. Burns with an intensely bright white flame. Essential mineral for biological systems.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 2: TRANSITION METALS (Pure Elements)
    // ═══════════════════════════════════════════════════════════════
    {
      id: '18',
      name: 'Iron',
      formula: 'Fe',
      state: 'solid',
      color: '#475569',
      molecularWeight: 55.85,
      density: 7.87,
      solubility: 0,
      cost: 5,
      hazards: [],
      allowsLiquidView: false,
      description: 'A lustrous, ductile, malleable, silver-gray metal. The most commonly used of all the metals.'
    },
    {
      id: '20',
      name: 'Gold',
      formula: 'Au',
      state: 'solid',
      color: '#fbbf24',
      molecularWeight: 196.97,
      density: 19.30,
      solubility: 0,
      cost: 6000,
      hazards: [],
      allowsLiquidView: false,
      description: 'A bright yellow, dense, soft, malleable and ductile metal. One of the least reactive chemical elements.'
    },
    {
      id: '124',
      name: 'Copper',
      formula: 'Cu',
      state: 'solid',
      color: '#b87333',
      molecularWeight: 63.55,
      density: 8.96,
      solubility: 0,
      cost: 25,
      hazards: [],
      allowsLiquidView: false,
      description: 'A soft, malleable, and ductile metal with a reddish-orange color and very high thermal and electrical conductivity.'
    },
    {
      id: '56',
      name: 'Zinc',
      formula: 'Zn',
      state: 'solid',
      color: '#b0bec5',
      molecularWeight: 65.38,
      density: 7.13,
      solubility: 0,
      cost: 10,
      hazards: [],
      allowsLiquidView: false,
      description: 'A lustrous blue-white metal. Essential for galvanizing steel and for human health.'
    },
    {
      id: '57',
      name: 'Aluminum',
      formula: 'Al',
      state: 'solid',
      color: '#d4d8dc',
      molecularWeight: 26.98,
      density: 2.70,
      solubility: 0,
      cost: 8,
      hazards: [],
      allowsLiquidView: false,
      description: 'A silvery-white, soft, non-magnetic and ductile metal. The most abundant metallic element in Earth\'s crust.'
    },
    {
      id: '58',
      name: 'Silicon',
      formula: 'Si',
      state: 'solid',
      color: '#7c8a8e',
      molecularWeight: 28.09,
      density: 2.33,
      solubility: 0,
      cost: 15,
      hazards: [],
      allowsLiquidView: false,
      description: 'A hard, brittle crystalline solid with a blue-grey metallic luster. The basis of modern electronics.'
    },
    {
      id: '59',
      name: 'Titanium',
      formula: 'Ti',
      state: 'solid',
      color: '#8d9399',
      molecularWeight: 47.87,
      density: 4.51,
      solubility: 0,
      cost: 80,
      hazards: [],
      allowsLiquidView: false,
      description: 'A lustrous, silvery transition metal with high strength and corrosion resistance. Used in aerospace and biomedical applications.'
    },
    {
      id: '60',
      name: 'Nickel',
      formula: 'Ni',
      state: 'solid',
      color: '#a8b0b8',
      molecularWeight: 58.69,
      density: 8.91,
      solubility: 0,
      cost: 35,
      hazards: ['skin sensitizer'],
      allowsLiquidView: false,
      description: 'A silvery-white lustrous metal with a slight golden tinge. Highly corrosion-resistant, used extensively in alloys.'
    },
    {
      id: '61',
      name: 'Cobalt',
      formula: 'Co',
      state: 'solid',
      color: '#8090a8',
      molecularWeight: 58.93,
      density: 8.90,
      solubility: 0,
      cost: 120,
      hazards: ['toxic if ingested'],
      allowsLiquidView: false,
      description: 'A hard, lustrous, silver-gray metal used to make magnets, cutting tools, and colored glass.'
    },
    {
      id: '62',
      name: 'Chromium',
      formula: 'Cr',
      state: 'solid',
      color: '#c8d0d4',
      molecularWeight: 52.00,
      density: 7.19,
      solubility: 0,
      cost: 40,
      hazards: [],
      allowsLiquidView: false,
      description: 'A steely-gray, lustrous, hard and brittle transition metal. Highly resistant to corrosion and used in stainless steel.'
    },
    {
      id: '63',
      name: 'Manganese',
      formula: 'Mn',
      state: 'solid',
      color: '#8c7c7c',
      molecularWeight: 54.94,
      density: 7.21,
      solubility: 0,
      cost: 20,
      hazards: [],
      allowsLiquidView: false,
      description: 'A hard, brittle, pinkish-gray metal. Essential in steel production and biological functions.'
    },
    {
      id: '64',
      name: 'Tin',
      formula: 'Sn',
      state: 'solid',
      color: '#cdd4d8',
      molecularWeight: 118.71,
      density: 7.31,
      solubility: 0,
      cost: 30,
      hazards: [],
      allowsLiquidView: false,
      description: 'A silvery-white, soft, pliable metal. Resists corrosion and is used to coat other metals (tinplate).'
    },
    {
      id: '65',
      name: 'Lead',
      formula: 'Pb',
      state: 'solid',
      color: '#6b7070',
      molecularWeight: 207.20,
      density: 11.34,
      solubility: 0,
      cost: 15,
      hazards: ['toxic', 'neurotoxin', 'reproductive hazard'],
      allowsLiquidView: false,
      description: 'A heavy, dull gray metal. Very soft and malleable. A significant neurotoxin that affects most organ systems.'
    },
    {
      id: '66',
      name: 'Platinum',
      formula: 'Pt',
      state: 'solid',
      color: '#d8dcdf',
      molecularWeight: 195.08,
      density: 21.45,
      solubility: 0,
      cost: 3500,
      hazards: [],
      allowsLiquidView: false,
      description: 'A dense, malleable, highly unreactive, precious, silvery-white metal. Used in catalytic converters and jewelry.'
    },
    {
      id: '67',
      name: 'Palladium',
      formula: 'Pd',
      state: 'solid',
      color: '#d0d4d7',
      molecularWeight: 106.42,
      density: 12.02,
      solubility: 0,
      cost: 2800,
      hazards: [],
      allowsLiquidView: false,
      description: 'A rare, lustrous silvery-white metal. Member of the platinum group, used in catalytic converters and electronics.'
    },
    {
      id: '68',
      name: 'Tungsten',
      formula: 'W',
      state: 'solid',
      color: '#a0a8ac',
      molecularWeight: 183.84,
      density: 19.25,
      solubility: 0,
      cost: 100,
      hazards: [],
      allowsLiquidView: false,
      description: 'Has the highest melting point of all pure metals. Used in light bulb filaments and cutting tools.'
    },
    {
      id: '69',
      name: 'Bismuth',
      formula: 'Bi',
      state: 'solid',
      color: '#c4a882',
      molecularWeight: 208.98,
      density: 9.79,
      solubility: 0,
      cost: 45,
      hazards: [],
      allowsLiquidView: false,
      description: 'A brittle metal with iridescent tarnish showing many colors. One of the least toxic heavy metals.'
    },
    {
      id: '70',
      name: 'Antimony',
      formula: 'Sb',
      state: 'solid',
      color: '#b4b8bc',
      molecularWeight: 121.76,
      density: 6.69,
      solubility: 0,
      cost: 35,
      hazards: ['toxic'],
      allowsLiquidView: false,
      description: 'A lustrous gray metalloid used in flame-proofing compounds and lead-acid batteries.'
    },
    {
      id: '71',
      name: 'Gallium',
      formula: 'Ga',
      state: 'solid',
      color: '#c8ccd0',
      molecularWeight: 69.72,
      density: 5.91,
      solubility: 0,
      cost: 200,
      hazards: [],
      allowsLiquidView: false,
      description: 'A soft, silvery metal that melts just above room temperature at 29.76°C. Used in semiconductors and LEDs.'
    },
    {
      id: '72',
      name: 'Indium',
      formula: 'In',
      state: 'solid',
      color: '#c0c8cc',
      molecularWeight: 114.82,
      density: 7.31,
      solubility: 0,
      cost: 500,
      hazards: [],
      allowsLiquidView: false,
      description: 'A soft, silvery-white metal used primarily in indium tin oxide (ITO) for transparent electrodes in displays.'
    },
    {
      id: '73',
      name: 'Vanadium',
      formula: 'V',
      state: 'solid',
      color: '#8c9ca4',
      molecularWeight: 50.94,
      density: 6.11,
      solubility: 0,
      cost: 60,
      hazards: [],
      allowsLiquidView: false,
      description: 'A hard, silvery-grey, ductile and malleable transition metal. Used primarily in special steel alloys.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 3: NONMETALS & METALLOIDS (Pure Elements)
    // ═══════════════════════════════════════════════════════════════
    {
      id: '74',
      name: 'Carbon (Graphite)',
      formula: 'C',
      state: 'solid',
      color: '#2c2c2c',
      molecularWeight: 12.01,
      density: 2.26,
      solubility: 0,
      cost: 5,
      hazards: [],
      allowsLiquidView: false,
      description: 'The graphite allotrope of carbon: a soft, black, lustrous solid. Used as a lubricant, in pencils, and as electrodes.'
    },
    {
      id: '75',
      name: 'Carbon (Diamond)',
      formula: 'C',
      state: 'solid',
      color: '#e8f4f8',
      molecularWeight: 12.01,
      density: 3.51,
      solubility: 0,
      cost: 10000,
      hazards: [],
      allowsLiquidView: false,
      description: 'The diamond allotrope: the hardest known natural material. Transparent with exceptional brilliance.'
    },
    {
      id: '34',
      name: 'Sulfur',
      formula: 'S₈',
      state: 'solid',
      color: '#facc15',
      molecularWeight: 256.52,
      density: 2.07,
      solubility: 0,
      cost: 5,
      hazards: ['flammable'],
      allowsLiquidView: false,
      description: 'A bright yellow, crystalline solid at room temperature. Burns with a blue flame producing sulfur dioxide.'
    },
    {
      id: '76',
      name: 'Selenium',
      formula: 'Se',
      state: 'solid',
      color: '#5c3a2a',
      molecularWeight: 78.96,
      density: 4.81,
      solubility: 0,
      cost: 80,
      hazards: ['toxic'],
      allowsLiquidView: false,
      description: 'Exists in several allotropic forms. The most stable is gray selenium; red amorphous selenium is also common.'
    },
    {
      id: '77',
      name: 'Tellurium',
      formula: 'Te',
      state: 'solid',
      color: '#a8b4b4',
      molecularWeight: 127.60,
      density: 6.24,
      solubility: 0,
      cost: 120,
      hazards: ['toxic'],
      allowsLiquidView: false,
      description: 'A brittle, mildly toxic, rare, silver-white metalloid. Causes "tellurium breath" (garlic odor) on contact.'
    },
    {
      id: '48',
      name: 'Phosphorus (White)',
      formula: 'P₄',
      state: 'solid',
      color: '#fef3c7',
      molecularWeight: 123.90,
      density: 1.82,
      solubility: 0,
      cost: 50,
      hazards: ['highly toxic', 'spontaneously flammable', 'pyrophoric'],
      allowsLiquidView: false,
      description: 'A soft, waxy, yellow-white solid with a garlic-like odor. Highly reactive and spontaneously ignites in air.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 4: NOBLE GASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: '21',
      name: 'Oxygen',
      formula: 'O₂',
      state: 'gas',
      color: '#bfdbfe',
      molecularWeight: 32.00,
      density: 0.0014,
      solubility: 0.004,
      cost: 5,
      hazards: ['oxidizer'],
      allowsLiquidView: false,
      description: 'A colorless, odorless, tasteless gas essential to living organisms. Supports combustion.'
    },
    {
      id: '22',
      name: 'Nitrogen',
      formula: 'N₂',
      state: 'gas',
      color: '#e0f2fe',
      molecularWeight: 28.01,
      density: 0.0012,
      solubility: 0.002,
      cost: 3,
      hazards: ['asphyxiant'],
      allowsLiquidView: false,
      description: 'A colorless, odorless, tasteless gas. Makes up 78% of Earth\'s atmosphere.'
    },
    {
      id: '53',
      name: 'Hydrogen',
      formula: 'H₂',
      state: 'gas',
      color: '#f0f9ff',
      molecularWeight: 2.02,
      density: 0.00009,
      solubility: 0.0016,
      cost: 8,
      hazards: ['highly flammable', 'explosive'],
      allowsLiquidView: false,
      description: 'The lightest and most abundant element in the universe. Colorless, odorless, highly flammable diatomic gas.'
    },
    {
      id: '23',
      name: 'Argon',
      formula: 'Ar',
      state: 'gas',
      color: '#e2e8f0',
      molecularWeight: 39.95,
      density: 0.0017,
      solubility: 0.003,
      cost: 4,
      hazards: ['asphyxiant'],
      allowsLiquidView: false,
      description: 'A noble gas. Colorless, odorless, inert monatomic gas. Third-most abundant gas in Earth\'s atmosphere.'
    },
    {
      id: '40',
      name: 'Neon',
      formula: 'Ne',
      state: 'gas',
      color: '#fee2e2',
      molecularWeight: 20.18,
      density: 0.0009,
      solubility: 0.001,
      cost: 10,
      hazards: ['asphyxiant'],
      allowsLiquidView: false,
      description: 'A noble gas. Colorless, odorless, inert monatomic gas. Glows bright orange-red in discharge tubes.'
    },
    {
      id: '41',
      name: 'Helium',
      formula: 'He',
      state: 'gas',
      color: '#f8fafc',
      molecularWeight: 4.00,
      density: 0.00018,
      solubility: 0.0001,
      cost: 12,
      hazards: ['asphyxiant'],
      allowsLiquidView: false,
      description: 'The lightest noble gas. Colorless, odorless, tasteless, non-toxic, inert monatomic gas.'
    },
    {
      id: '24',
      name: 'Xenon',
      formula: 'Xe',
      state: 'gas',
      color: '#a5b4fc',
      molecularWeight: 131.29,
      density: 0.0058,
      solubility: 0,
      cost: 50,
      hazards: ['asphyxiant'],
      allowsLiquidView: false,
      description: 'A dense, colorless noble gas found in Earth\'s atmosphere in trace amounts. Used in lighting and anesthesia.'
    },
    {
      id: '83',
      name: 'Ozone',
      formula: 'O₃',
      state: 'gas',
      color: '#dbeafe',
      molecularWeight: 48.00,
      density: 0.0021,
      solubility: 0.105,
      cost: 20,
      hazards: ['toxic', 'strong oxidizer', 'respiratory irritant'],
      allowsLiquidView: false,
      description: 'An allotrope of oxygen with a pungent smell. Forms a protective layer in the stratosphere but is a pollutant at ground level.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 5: HALOGENS (Pure Elements)
    // ═══════════════════════════════════════════════════════════════
    {
      id: '6',
      name: 'Chlorine',
      formula: 'Cl₂',
      state: 'gas',
      color: '#c8d94a',
      molecularWeight: 70.90,
      density: 0.0032,
      solubility: 0.7,
      cost: 8,
      hazards: ['toxic', 'corrosive', 'oxidizer', 'respiratory hazard'],
      allowsLiquidView: true,
      description: 'A pale yellow-green gas with a suffocating odor. A powerful oxidizing agent and highly toxic if inhaled.'
    },
    {
      id: '8',
      name: 'Fluorine',
      formula: 'F₂',
      state: 'gas',
      color: '#fef3c7',
      molecularWeight: 38.00,
      density: 0.0017,
      solubility: 0,
      cost: 100,
      hazards: ['extremely toxic', 'corrosive', 'oxidizer'],
      allowsLiquidView: false,
      description: 'A pale yellow, extremely reactive gas. The most electronegative element. Extremely toxic and corrosive.'
    },
    {
      id: '12',
      name: 'Bromine',
      formula: 'Br₂',
      state: 'liquid',
      color: '#8b3a00',
      molecularWeight: 159.81,
      density: 3.10,
      solubility: 3.5,
      cost: 60,
      hazards: ['toxic', 'corrosive', 'oxidizer'],
      allowsLiquidView: true,
      description: 'A fuming red-brown liquid that evaporates readily. The only nonmetallic element that is liquid at standard conditions.'
    },
    {
      id: '13',
      name: 'Iodine',
      formula: 'I₂',
      state: 'solid',
      color: '#1e1b4b',
      molecularWeight: 253.81,
      density: 4.93,
      solubility: 0.03,
      cost: 25,
      hazards: ['irritant', 'oxidizer'],
      allowsLiquidView: true,
      description: 'A lustrous, purple-black solid that sublimes into a violet gas. An essential trace element for humans.'
    },
    {
      id: '11',
      name: 'Mercury',
      formula: 'Hg',
      state: 'liquid',
      color: '#64748b',
      molecularWeight: 200.59,
      density: 13.53,
      solubility: 0,
      cost: 150,
      hazards: ['highly toxic', 'neurotoxin', 'vapor hazard'],
      allowsLiquidView: false,
      description: 'The only metallic element that is liquid at standard conditions. A heavy, silvery d-block element. Highly toxic.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 6: STRONG ACIDS
    // ═══════════════════════════════════════════════════════════════
    {
      id: '5',
      name: 'Hydrochloric Acid',
      formula: 'HCl',
      state: 'liquid',
      color: '#e8f0e8',
      molecularWeight: 36.46,
      density: 1.18,
      solubility: 100,
      cost: 10,
      hazards: ['corrosive', 'skin burns', 'respiratory irritant'],
      allowsLiquidView: true,
      description: 'A strong, corrosive acid. Concentrated HCl is a fuming, nearly colorless liquid with a pungent smell. A primary component of gastric acid.'
    },
    {
      id: '14',
      name: 'Sulfuric Acid',
      formula: 'H₂SO₄',
      state: 'liquid',
      color: '#f1f5f9',
      molecularWeight: 98.08,
      density: 1.83,
      solubility: 100,
      cost: 8,
      hazards: ['highly corrosive', 'severe burns', 'dehydrating agent'],
      allowsLiquidView: true,
      description: 'A highly corrosive strong mineral acid. A colorless to slightly yellowish viscous liquid. The most widely produced chemical in the world.'
    },
    {
      id: '49',
      name: 'Nitric Acid',
      formula: 'HNO₃',
      state: 'liquid',
      color: '#fef3c7',
      molecularWeight: 63.01,
      density: 1.51,
      solubility: 100,
      cost: 15,
      hazards: ['highly corrosive', 'strong oxidizer', 'toxic fumes'],
      allowsLiquidView: true,
      description: 'A highly corrosive mineral acid. Pure compound is colorless; older samples acquire a yellow cast from NO₂ dissolution.'
    },
    {
      id: '54',
      name: 'Phosphoric Acid',
      formula: 'H₃PO₄',
      state: 'liquid',
      color: '#f8fafc',
      molecularWeight: 97.99,
      density: 1.88,
      solubility: 100,
      cost: 12,
      hazards: ['corrosive', 'irritant'],
      allowsLiquidView: true,
      description: 'A colorless, syrupy liquid. A weak triprotic acid widely used in food flavoring (gives cola its tang) and fertilizer production.'
    },
    {
      id: '90',
      name: 'Formic Acid',
      formula: 'HCOOH',
      state: 'liquid',
      color: '#f4f8f4',
      molecularWeight: 46.03,
      density: 1.22,
      solubility: 100,
      cost: 20,
      hazards: ['corrosive', 'irritant'],
      allowsLiquidView: true,
      description: 'The simplest carboxylic acid. A colorless liquid with a pungent odor. Occurs naturally in ant venom.'
    },
    {
      id: '35',
      name: 'Acetic Acid',
      formula: 'CH₃COOH',
      state: 'liquid',
      color: '#f8fafc',
      molecularWeight: 60.05,
      density: 1.05,
      solubility: 100,
      cost: 10,
      hazards: ['flammable', 'corrosive at high concentration'],
      allowsLiquidView: true,
      description: 'A colorless liquid with a distinctive sour taste and pungent smell. The main component of vinegar.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 7: BASES / HYDROXIDES
    // ═══════════════════════════════════════════════════════════════
    {
      id: '52',
      name: 'Sodium Hydroxide',
      formula: 'NaOH',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 40.00,
      density: 2.13,
      solubility: 109,
      cost: 8,
      hazards: ['corrosive', 'severe skin burns', 'eye damage'],
      allowsLiquidView: true,
      description: 'Also known as lye or caustic soda. A white solid ionic compound. Highly corrosive and exothermic when dissolved in water.'
    },
    {
      id: 'naoh_aq',
      name: 'Sodium Hydroxide Solution',
      formula: 'NaOH(aq)',
      state: 'liquid',
      color: 'rgba(77, 166, 255, 0.15)',
      molarity: 0.1,
      molecularWeight: 40.00,
      density: 1.04,
      solubility: 100,
      cost: 12,
      hazards: ['corrosive', 'severe skin burns', 'eye damage'],
      allowsLiquidView: true,
      description: 'Aqueous sodium hydroxide solution. Appears as a completely clear, colorless liquid. Has a slippery feel. Strong base, highly corrosive.'
    },
    {
      id: '139',
      name: 'Calcium Hydroxide',
      formula: 'Ca(OH)₂',
      state: 'solid',
      color: '#f0eeea',
      molecularWeight: 74.09,
      density: 2.21,
      solubility: 0.17,
      cost: 5,
      hazards: ['irritant', 'corrosive at high concentration'],
      allowsLiquidView: true,
      description: 'Also known as slaked lime. A colorless or white powder. Used in construction (mortar, plaster) and water treatment.'
    },
    {
      id: 'ca_oh_2_aq',
      name: 'Lime Water',
      formula: 'Ca(OH)₂(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.08)',
      molarity: 0.02,
      molecularWeight: 74.09,
      density: 1.00,
      solubility: 100,
      cost: 5,
      hazards: ['mild irritant'],
      allowsLiquidView: true,
      description: 'A saturated solution of calcium hydroxide. Appears as a perfectly clear, colorless liquid — only slightly alkaline. Turns milky-white when CO₂ is bubbled through it, forming a white CaCO₃ precipitate.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 8: CHLORIDE SALTS (Solids)
    // ═══════════════════════════════════════════════════════════════
    {
      id: '4',
      name: 'Sodium Chloride',
      formula: 'NaCl',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 58.44,
      density: 2.16,
      solubility: 36,
      cost: 2,
      hazards: [],
      allowsLiquidView: true,
      description: 'Commonly known as table salt. White cubic crystals. Highly soluble in water forming a clear electrolyte solution.'
    },
    {
      id: 'nacl_aq',
      name: 'Sodium Chloride Solution',
      formula: 'NaCl(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 58.44,
      density: 1.004,
      solubility: 100,
      cost: 3,
      hazards: [],
      allowsLiquidView: true,
      description: 'Aqueous saline solution. Appears as a completely transparent, colorless liquid — visually indistinguishable from pure water. Used as a physiological saline and electrolyte solution.'
    },
    {
      id: '46',
      name: 'Calcium Chloride',
      formula: 'CaCl₂',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 110.98,
      density: 2.15,
      solubility: 74,
      cost: 8,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A white crystalline solid. Highly exothermic when dissolved in water. Used as a desiccant and road de-icer.'
    },
    {
      id: 'cacl2_aq',
      name: 'Calcium Chloride Solution',
      formula: 'CaCl₂(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 110.98,
      density: 1.009,
      solubility: 100,
      cost: 10,
      hazards: ['mild irritant'],
      allowsLiquidView: true,
      description: 'A clear, colorless aqueous solution with a slightly salty taste. Slightly denser than pure water. Electrolyte solution used in sports drinks and food processing.'
    },
    {
      id: '26',
      name: 'Barium Chloride',
      formula: 'BaCl₂',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 208.23,
      density: 3.85,
      solubility: 35.8,
      cost: 25,
      hazards: ['toxic'],
      allowsLiquidView: true,
      description: 'A white crystalline solid. One of the most common water-soluble barium salts. Used in flame tests (produces green color).'
    },
    {
      id: 'bacl2_aq',
      name: 'Barium Chloride Solution',
      formula: 'BaCl₂(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 208.23,
      density: 1.012,
      solubility: 100,
      cost: 28,
      hazards: ['toxic'],
      allowsLiquidView: true,
      description: 'A clear, colorless aqueous solution. Reacts with sulfate ions to form a white BaSO₄ precipitate. Used to test for sulfate ions.'
    },
    {
      id: '122',
      name: 'Lithium Chloride',
      formula: 'LiCl',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 42.39,
      density: 2.07,
      solubility: 83,
      cost: 35,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A white crystalline solid. Produces a characteristic crimson-red flame and is used as a flux and desiccant.'
    },
    {
      id: '111',
      name: 'Ammonium Chloride',
      formula: 'NH₄Cl',
      state: 'solid',
      color: '#f8f8f8',
      molecularWeight: 53.49,
      density: 1.53,
      solubility: 37,
      cost: 8,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A white crystalline salt. Highly soluble in water. Used as a fertilizer, food additive, and in cough medicine.'
    },
    {
      id: 'nh4cl_aq',
      name: 'Ammonium Chloride Solution',
      formula: 'NH₄Cl(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 53.49,
      density: 1.005,
      solubility: 100,
      cost: 10,
      hazards: ['mild irritant'],
      allowsLiquidView: true,
      description: 'A clear, colorless aqueous solution. Slightly acidic (pH ~5). Used in buffer solutions and as a mild acid source.'
    },
    {
      id: '27',
      name: 'Cobalt(II) Chloride',
      formula: 'CoCl₂',
      state: 'solid',
      color: '#ec4899',
      molecularWeight: 129.84,
      density: 3.35,
      solubility: 45,
      cost: 50,
      hazards: ['toxic', 'suspected carcinogen'],
      allowsLiquidView: true,
      description: 'An inorganic compound of cobalt and chlorine. Deep blue in anhydrous form; turns pink/red when hydrated — used as a humidity indicator.'
    },
    {
      id: 'cocl2_aq',
      name: 'Cobalt(II) Chloride Solution',
      formula: 'CoCl₂(aq)',
      state: 'liquid',
      color: 'rgba(236, 72, 153, 0.45)',
      molarity: 0.1,
      molecularWeight: 129.84,
      density: 1.02,
      solubility: 100,
      cost: 55,
      hazards: ['toxic'],
      allowsLiquidView: true,
      description: 'A striking pink to rose-red aqueous solution. The vivid color comes from the [Co(H₂O)₆]²⁺ ion. Used to demonstrate coordinate chemistry and as a humidity indicator.'
    },
    {
      id: '44',
      name: 'Copper(II) Chloride',
      formula: 'CuCl₂',
      state: 'solid',
      color: '#0d9488',
      molecularWeight: 134.45,
      density: 3.39,
      solubility: 70,
      cost: 30,
      hazards: ['toxic', 'irritant'],
      allowsLiquidView: true,
      description: 'An inorganic compound. The anhydrous form is a yellowish-brown powder; the dihydrate is blue-green.'
    },
    {
      id: 'cucl2_aq',
      name: 'Copper(II) Chloride Solution',
      formula: 'CuCl₂(aq)',
      state: 'liquid',
      color: 'rgba(13, 148, 136, 0.50)',
      molarity: 0.1,
      molecularWeight: 134.45,
      density: 1.02,
      solubility: 100,
      cost: 35,
      hazards: ['toxic'],
      allowsLiquidView: true,
      description: 'An aqueous solution of teal-green color. The color can shift from blue to green depending on concentration due to chloro-complex formation.'
    },
    {
      id: '117',
      name: 'Iron(III) Chloride',
      formula: 'FeCl₃',
      state: 'solid',
      color: '#5c3000',
      molecularWeight: 162.20,
      density: 2.90,
      solubility: 91,
      cost: 20,
      hazards: ['corrosive', 'irritant'],
      allowsLiquidView: true,
      description: 'A dark brown-black solid that forms a yellow-brown solution in water. Used in circuit board etching and water treatment.'
    },
    {
      id: 'fecl3_aq',
      name: 'Iron(III) Chloride Solution',
      formula: 'FeCl₃(aq)',
      state: 'liquid',
      color: 'rgba(180, 100, 20, 0.55)',
      molarity: 0.1,
      molecularWeight: 162.20,
      density: 1.02,
      solubility: 100,
      cost: 22,
      hazards: ['corrosive', 'irritant'],
      allowsLiquidView: true,
      description: 'A dark amber to yellow-brown aqueous solution. Turns deep blood-red with SCN⁻ ions (thiocyanate test). Used to detect phenol groups (purple-black color).'
    },
    {
      id: '121',
      name: 'Strontium Chloride',
      formula: 'SrCl₂',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 158.52,
      density: 3.05,
      solubility: 54,
      cost: 30,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A white crystalline solid. Used in pyrotechnics to produce a bright crimson-red flame and in toothpaste for sensitive teeth.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 9: SULFATE SALTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: '3',
      name: 'Copper Sulfate',
      formula: 'CuSO₄',
      state: 'solid',
      color: '#3b82f6',
      molecularWeight: 159.61,
      density: 3.60,
      solubility: 32,
      cost: 20,
      hazards: ['irritant', 'toxic to aquatic life'],
      allowsLiquidView: true,
      description: 'A bright blue pentahydrate salt. Used in agriculture as a fungicide. Turns white (anhydrous) when heated.'
    },
    {
      id: 'cuso4_aq',
      name: 'Copper Sulfate Solution',
      formula: 'CuSO₄(aq)',
      state: 'liquid',
      color: 'rgba(59, 130, 246, 0.45)',
      molarity: 0.1,
      molecularWeight: 159.61,
      density: 1.01,
      solubility: 100,
      cost: 22,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A clear, vivid blue aqueous solution. The characteristic sky-blue color is from the [Cu(H₂O)₆]²⁺ ion. Commonly used in electroplating demonstrations.'
    },
    {
      id: '28',
      name: 'Nickel(II) Sulfate',
      formula: 'NiSO₄',
      state: 'solid',
      color: '#5ba89a',
      molecularWeight: 154.75,
      density: 3.68,
      solubility: 38,
      cost: 40,
      hazards: ['toxic', 'carcinogen', 'skin sensitizer'],
      allowsLiquidView: true,
      description: 'A bright green solid. A highly soluble blue-green salt and a common source of the Ni²⁺ ion for electroplating.'
    },
    {
      id: 'niso4_aq',
      name: 'Nickel(II) Sulfate Solution',
      formula: 'NiSO₄(aq)',
      state: 'liquid',
      color: 'rgba(16, 185, 129, 0.40)',
      molarity: 0.1,
      molecularWeight: 154.75,
      density: 1.01,
      solubility: 100,
      cost: 45,
      hazards: ['toxic', 'skin sensitizer'],
      allowsLiquidView: true,
      description: 'An emerald-green aqueous solution. The green color comes from the [Ni(H₂O)₆]²⁺ ion. Used in nickel electroplating baths.'
    },
    {
      id: '45',
      name: 'Ferrous Sulfate',
      formula: 'FeSO₄',
      state: 'solid',
      color: '#a8d5b5',
      molecularWeight: 151.91,
      density: 2.84,
      solubility: 26,
      cost: 10,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A blue-green heptahydrate salt. Used as a dietary iron supplement and in water treatment.'
    },
    {
      id: 'feso4_aq',
      name: 'Iron(II) Sulfate Solution',
      formula: 'FeSO₄(aq)',
      state: 'liquid',
      color: 'rgba(140, 195, 160, 0.35)',
      molarity: 0.1,
      molecularWeight: 151.91,
      density: 1.01,
      solubility: 100,
      cost: 12,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A pale green aqueous solution. Oxidizes slowly in air to yellow-brown Fe(III). Used in the ring test for nitrates.'
    },
    {
      id: '38',
      name: 'Zinc Sulfate',
      formula: 'ZnSO₄',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 161.47,
      density: 3.54,
      solubility: 57,
      cost: 15,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A colorless solid commonly encountered as the heptahydrate. Used in agricultural sprays and as a dietary supplement.'
    },
    {
      id: '137',
      name: 'Magnesium Sulfate',
      formula: 'MgSO₄',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 120.37,
      density: 2.66,
      solubility: 26,
      cost: 5,
      hazards: [],
      allowsLiquidView: true,
      description: 'Also known as Epsom salt (heptahydrate). Used in baths to soothe sore muscles and as a laxative.'
    },
    {
      id: '43',
      name: 'Manganese(II) Sulfate',
      formula: 'MnSO₄',
      state: 'solid',
      color: '#fbcfe8',
      molecularWeight: 151.00,
      density: 3.25,
      solubility: 52,
      cost: 20,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A pale pink deliquescent solid. A commercially significant manganese(II) salt used in fertilizers and as a dietary supplement.'
    },
    {
      id: '112',
      name: 'Sodium Sulfate',
      formula: 'Na₂SO₄',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 142.04,
      density: 2.66,
      solubility: 22,
      cost: 8,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white crystalline solid. The decahydrate is known as Glauber\'s salt. Used in the manufacture of detergents and paper.'
    },
    {
      id: '141',
      name: 'Ammonium Sulfate',
      formula: '(NH₄)₂SO₄',
      state: 'solid',
      color: '#f8f8f4',
      molecularWeight: 132.14,
      density: 1.77,
      solubility: 74,
      cost: 6,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white crystalline solid commonly used as a nitrogen-releasing fertilizer and in protein purification.'
    },
    {
      id: '123',
      name: 'Barium Sulfate',
      formula: 'BaSO₄',
      state: 'solid',
      color: '#f8f8f8',
      molecularWeight: 233.39,
      density: 4.49,
      solubility: 0.0002,
      cost: 15,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white crystalline solid. Virtually insoluble in water. Used as a radiocontrast agent in X-ray imaging of the GI tract.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 10: NITRATE SALTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: '25',
      name: 'Silver Nitrate',
      formula: 'AgNO₃',
      state: 'solid',
      color: '#f8fafc',
      molecularWeight: 169.87,
      density: 4.35,
      solubility: 216,
      cost: 150,
      hazards: ['oxidizer', 'toxic', 'stains skin black'],
      allowsLiquidView: true,
      description: 'A white crystalline salt. Versatile precursor to many silver compounds. Darkens rapidly on exposure to light.'
    },
    {
      id: 'agno3_aq',
      name: 'Silver Nitrate Solution',
      formula: 'AgNO₃(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.07)',
      molarity: 0.1,
      molecularWeight: 169.87,
      density: 1.013,
      solubility: 100,
      cost: 160,
      hazards: ['oxidizer', 'toxic', 'stains skin black'],
      allowsLiquidView: true,
      description: 'A clear, colorless aqueous solution. Immediately forms a white AgCl precipitate with chloride ions, cream AgBr with bromide, and yellow AgI with iodide. Used widely in qualitative analysis.'
    },
    {
      id: '135',
      name: 'Potassium Nitrate',
      formula: 'KNO₃',
      state: 'solid',
      color: '#f8f8f4',
      molecularWeight: 101.10,
      density: 2.11,
      solubility: 31,
      cost: 10,
      hazards: ['oxidizer'],
      allowsLiquidView: true,
      description: 'Also known as saltpeter. A white crystalline salt used as a fertilizer, food preservative, and in gunpowder.'
    },
    {
      id: '136',
      name: 'Sodium Nitrate',
      formula: 'NaNO₃',
      state: 'solid',
      color: '#f8f8f8',
      molecularWeight: 84.99,
      density: 2.26,
      solubility: 87,
      cost: 8,
      hazards: ['oxidizer'],
      allowsLiquidView: true,
      description: 'A white crystalline solid also called Chile saltpeter. Used as a fertilizer, food preservative, and in pyrotechnics.'
    },
    {
      id: '39',
      name: 'Ammonium Nitrate',
      formula: 'NH₄NO₃',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 80.04,
      density: 1.72,
      solubility: 150,
      cost: 5,
      hazards: ['oxidizer', 'explosive when contaminated'],
      allowsLiquidView: true,
      description: 'A white crystalline salt. Highly soluble in water with an endothermic dissolution. Widely used as a fertilizer.'
    },
    {
      id: '42',
      name: 'Lead(II) Nitrate',
      formula: 'Pb(NO₃)₂',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 331.20,
      density: 4.53,
      solubility: 52,
      cost: 30,
      hazards: ['toxic', 'oxidizer', 'neurotoxin'],
      allowsLiquidView: true,
      description: 'A colorless crystal or white powder. Used in the production of lead-based pigments and as an oxidizer in matches.'
    },
    {
      id: 'pbno3_aq',
      name: 'Lead(II) Nitrate Solution',
      formula: 'Pb(NO₃)₂(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 331.20,
      density: 1.02,
      solubility: 100,
      cost: 35,
      hazards: ['toxic', 'neurotoxin'],
      allowsLiquidView: true,
      description: 'A clear, colorless aqueous solution. Forms a bright yellow PbI₂ precipitate with iodide ions and a white PbSO₄ precipitate with sulfate. Used in qualitative analysis to detect iodide ions.'
    },
    {
      id: '108',
      name: 'Cobalt(II) Nitrate',
      formula: 'Co(NO₃)₂',
      state: 'solid',
      color: '#d9534f',
      molecularWeight: 182.94,
      density: 2.49,
      solubility: 103,
      cost: 55,
      hazards: ['toxic', 'oxidizer'],
      allowsLiquidView: true,
      description: 'A red solid. Used in the preparation of cobalt catalysts and as a coloring agent for glass and ceramics.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 11: CARBONATE & BICARBONATE SALTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: '37',
      name: 'Calcium Carbonate',
      formula: 'CaCO₃',
      state: 'solid',
      color: '#f3f4f6',
      molecularWeight: 100.09,
      density: 2.71,
      solubility: 0.001,
      cost: 5,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white solid found in chalk, limestone, and marble. Reacts vigorously with acids to produce CO₂ gas.'
    },
    {
      id: '116',
      name: 'Sodium Bicarbonate',
      formula: 'NaHCO₃',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 84.01,
      density: 2.20,
      solubility: 9,
      cost: 3,
      hazards: [],
      allowsLiquidView: true,
      description: 'Also known as baking soda. A white crystalline solid. Used in cooking as a leavening agent and as an antacid.'
    },
    {
      id: '114',
      name: 'Sodium Carbonate',
      formula: 'Na₂CO₃',
      state: 'solid',
      color: '#f4f4f0',
      molecularWeight: 105.99,
      density: 2.54,
      solubility: 30,
      cost: 6,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'Also known as washing soda. A white solid used in glass manufacturing, as a cleaning agent, and in the Solvay process.'
    },
    {
      id: '115',
      name: 'Potassium Carbonate',
      formula: 'K₂CO₃',
      state: 'solid',
      color: '#f4f4f0',
      molecularWeight: 138.21,
      density: 2.43,
      solubility: 112,
      cost: 10,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A white salt, soluble in water. Mildly basic. Used in the production of soap, glass, and as a food additive.'
    },
    {
      id: '144',
      name: 'Lithium Carbonate',
      formula: 'Li₂CO₃',
      state: 'solid',
      color: '#f8f8f8',
      molecularWeight: 73.89,
      density: 2.11,
      solubility: 1.3,
      cost: 40,
      hazards: ['toxic at high doses'],
      allowsLiquidView: true,
      description: 'A white, odorless salt. Used as a mood-stabilizing medication for bipolar disorder and in lithium battery production.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 12: PERMANGANATE & CHROMATE / DICHROMATE
    // ═══════════════════════════════════════════════════════════════
    {
      id: '9',
      name: 'Potassium Permanganate',
      formula: 'KMnO₄',
      state: 'solid',
      color: '#7e22ce',
      molecularWeight: 158.03,
      density: 2.70,
      solubility: 6.4,
      cost: 15,
      hazards: ['oxidizer', 'irritant', 'toxic'],
      allowsLiquidView: true,
      description: 'Deep purple crystalline salt. A strong oxidizing agent used in chemical analysis and as a disinfectant.'
    },
    {
      id: 'kmno4_aq',
      name: 'Potassium Permanganate Solution',
      formula: 'KMnO₄(aq)',
      state: 'liquid',
      color: 'rgba(126, 34, 206, 0.60)',
      molarity: 0.01,
      molecularWeight: 158.03,
      density: 1.00,
      solubility: 100,
      cost: 18,
      hazards: ['oxidizer', 'irritant'],
      allowsLiquidView: true,
      description: 'An intensely purple aqueous solution, one of the most vividly colored in chemistry. Turns colorless (MnO₂ sludge) when it oxidizes reducing agents. Used in titrations (self-indicating).'
    },
    {
      id: '29',
      name: 'Potassium Dichromate',
      formula: 'K₂Cr₂O₇',
      state: 'solid',
      color: '#f97316',
      molecularWeight: 294.18,
      density: 2.67,
      solubility: 12,
      cost: 20,
      hazards: ['toxic', 'oxidizer', 'carcinogen'],
      allowsLiquidView: true,
      description: 'Bright orange crystals. A common oxidizing agent. Changes color from orange to green as Cr(VI) is reduced to Cr(III).'
    },
    {
      id: 'k2cr2o7_aq',
      name: 'Potassium Dichromate Solution',
      formula: 'K₂Cr₂O₇(aq)',
      state: 'liquid',
      color: 'rgba(249, 115, 22, 0.55)',
      molarity: 0.1,
      molecularWeight: 294.18,
      density: 1.01,
      solubility: 100,
      cost: 25,
      hazards: ['toxic', 'oxidizer', 'carcinogen'],
      allowsLiquidView: true,
      description: 'A vivid orange-red aqueous solution. The orange Cr₂O₇²⁻ is reduced to green Cr³⁺ by reducing agents. Changes to yellow in basic solution (chromate). Used in breathalyzer tests.'
    },
    {
      id: '110',
      name: 'Potassium Chromate',
      formula: 'K₂CrO₄',
      state: 'solid',
      color: '#f5c400',
      molecularWeight: 194.19,
      density: 2.73,
      solubility: 62,
      cost: 25,
      hazards: ['toxic', 'carcinogen'],
      allowsLiquidView: true,
      description: 'A bright yellow crystalline solid. Used as an indicator in precipitation titrations (Mohr method) and as a corrosion inhibitor.'
    },
    {
      id: '148',
      name: 'Ammonium Dichromate',
      formula: '(NH₄)₂Cr₂O₇',
      state: 'solid',
      color: '#e06000',
      molecularWeight: 252.07,
      density: 2.15,
      solubility: 35,
      cost: 25,
      hazards: ['toxic', 'oxidizer', 'carcinogen'],
      allowsLiquidView: true,
      description: 'A bright orange-red crystalline solid. When ignited, undergoes a spectacular exothermic decomposition resembling a volcanic eruption, producing green Cr₂O₃.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 13: COLORED INORGANIC SALTS (KEY LAB REAGENTS)
    // ═══════════════════════════════════════════════════════════════
    {
      id: '107',
      name: 'Lead(II) Iodide',
      formula: 'PbI₂',
      state: 'solid',
      color: '#f5d800',
      molecularWeight: 461.01,
      density: 6.16,
      solubility: 0.06,
      cost: 35,
      hazards: ['toxic'],
      allowsLiquidView: true,
      description: 'A bright golden-yellow solid that forms dramatically when Pb²⁺ and I⁻ solutions are mixed. Called "golden rain" demonstration.'
    },
    {
      id: '119',
      name: 'Potassium Ferrocyanide',
      formula: 'K₄[Fe(CN)₆]',
      state: 'solid',
      color: '#f5e642',
      molecularWeight: 368.35,
      density: 1.85,
      solubility: 28,
      cost: 30,
      hazards: ['low toxicity'],
      allowsLiquidView: true,
      description: 'A bright lemon-yellow crystalline salt. Used to detect iron(III) ions (forms intense blue Prussian blue precipitate).'
    },
    {
      id: '120',
      name: 'Potassium Ferricyanide',
      formula: 'K₃[Fe(CN)₆]',
      state: 'solid',
      color: '#dc2626',
      molecularWeight: 329.24,
      density: 1.89,
      solubility: 46,
      cost: 35,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'A bright red crystalline salt. Used to detect iron(II) ions (forms Turnbull\'s blue) and in blueprint making.'
    },
    {
      id: '126',
      name: 'Prussian Blue',
      formula: 'Fe₄[Fe(CN)₆]₃',
      state: 'solid',
      color: '#003153',
      molecularWeight: 859.24,
      density: 1.80,
      solubility: 0,
      cost: 25,
      hazards: [],
      allowsLiquidView: false,
      description: 'An intense deep-blue pigment. The first modern synthetic pigment. Used in art and as an antidote for heavy metal poisoning.'
    },
    {
      id: '109',
      name: 'Chromium(III) Oxide',
      formula: 'Cr₂O₃',
      state: 'solid',
      color: '#2d5a27',
      molecularWeight: 152.00,
      density: 5.22,
      solubility: 0,
      cost: 20,
      hazards: ['irritant'],
      allowsLiquidView: false,
      description: 'A dark green powder known as chrome green. The most stable oxide of chromium. Used as a pigment and abrasive.'
    },
    {
      id: '118',
      name: 'Copper(I) Oxide',
      formula: 'Cu₂O',
      state: 'solid',
      color: '#c1440e',
      molecularWeight: 143.09,
      density: 6.00,
      solubility: 0,
      cost: 30,
      hazards: ['toxic to aquatic life'],
      allowsLiquidView: false,
      description: 'A brick-red crystalline solid. A p-type semiconductor used in solar cells and as a red pigment in glass.'
    },
    {
      id: '147',
      name: 'Mercury(II) Iodide',
      formula: 'HgI₂',
      state: 'solid',
      color: '#e01010',
      molecularWeight: 454.40,
      density: 6.36,
      solubility: 0,
      cost: 100,
      hazards: ['highly toxic'],
      allowsLiquidView: false,
      description: 'A scarlet-red solid at room temperature. Transitions to a yellow form above 127°C. Used as a radiation detector material.'
    },
    {
      id: '127',
      name: 'Malachite',
      formula: 'Cu₂(CO₃)(OH)₂',
      state: 'solid',
      color: '#1a7a4a',
      molecularWeight: 221.12,
      density: 3.90,
      solubility: 0,
      cost: 15,
      hazards: ['irritant'],
      allowsLiquidView: false,
      description: 'A vivid green copper carbonate hydroxide mineral. Used as an ornamental stone and historically as a green pigment.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 14: OXIDES & PEROXIDES
    // ═══════════════════════════════════════════════════════════════
    {
      id: '101',
      name: 'Aluminum Oxide',
      formula: 'Al₂O₃',
      state: 'solid',
      color: '#f0f0ec',
      molecularWeight: 101.96,
      density: 3.99,
      solubility: 0,
      cost: 10,
      hazards: ['irritant if inhaled'],
      allowsLiquidView: false,
      description: 'A white or near-colorless crystalline powder (alumina). Used as an abrasive and the primary ore of aluminum.'
    },
    {
      id: '102',
      name: 'Silicon Dioxide',
      formula: 'SiO₂',
      state: 'solid',
      color: '#e8ede8',
      molecularWeight: 60.08,
      density: 2.65,
      solubility: 0,
      cost: 5,
      hazards: ['lung hazard if inhaled as dust'],
      allowsLiquidView: false,
      description: 'Also known as silica, found abundantly as quartz. Colorless crystalline solid used in glass and semiconductors.'
    },
    {
      id: '103',
      name: 'Manganese Dioxide',
      formula: 'MnO₂',
      state: 'solid',
      color: '#1a1a1a',
      molecularWeight: 86.94,
      density: 5.03,
      solubility: 0,
      cost: 15,
      hazards: ['irritant'],
      allowsLiquidView: false,
      description: 'A black or dark brown solid (pyrolusite). Used as a catalyst in decomposing H₂O₂ and as cathode material in batteries.'
    },
    {
      id: '104',
      name: 'Iron(III) Oxide',
      formula: 'Fe₂O₃',
      state: 'solid',
      color: '#8b3a2a',
      molecularWeight: 159.69,
      density: 5.24,
      solubility: 0,
      cost: 8,
      hazards: [],
      allowsLiquidView: false,
      description: 'Also known as rust or hematite. A reddish-brown powder. Main source of iron for the steel industry.'
    },
    {
      id: '152',
      name: 'Iron(II,III) Oxide',
      formula: 'Fe₃O₄',
      state: 'solid',
      color: '#0a0a0a',
      molecularWeight: 231.53,
      density: 5.17,
      solubility: 0,
      cost: 15,
      hazards: [],
      allowsLiquidView: false,
      description: 'Also known as magnetite. A black magnetic mineral. Used to create ferrofluids and as a black pigment.'
    },
    {
      id: '105',
      name: 'Copper(II) Oxide',
      formula: 'CuO',
      state: 'solid',
      color: '#1a1a18',
      molecularWeight: 79.55,
      density: 6.31,
      solubility: 0,
      cost: 20,
      hazards: ['irritant'],
      allowsLiquidView: false,
      description: 'A black solid. Used as a precursor to other copper compounds and as a black pigment in ceramics and glass.'
    },
    {
      id: '106',
      name: 'Zinc Oxide',
      formula: 'ZnO',
      state: 'solid',
      color: '#f8f8f4',
      molecularWeight: 81.38,
      density: 5.60,
      solubility: 0,
      cost: 10,
      hazards: ['toxic if inhaled as fume'],
      allowsLiquidView: false,
      description: 'A white powder. Widely used as a white pigment in paints and in sunscreen and cosmetics.'
    },
    {
      id: '138',
      name: 'Magnesium Oxide',
      formula: 'MgO',
      state: 'solid',
      color: '#f4f4f0',
      molecularWeight: 40.30,
      density: 3.58,
      solubility: 0.006,
      cost: 8,
      hazards: [],
      allowsLiquidView: false,
      description: 'A white solid mineral (periclase). Used as a refractory material, in antacids, and as a nutritional supplement.'
    },
    {
      id: '36',
      name: 'Hydrogen Peroxide',
      formula: 'H₂O₂',
      state: 'liquid',
      color: '#eff6ff',
      molecularWeight: 34.01,
      density: 1.45,
      solubility: 100,
      cost: 10,
      hazards: ['oxidizer', 'corrosive at high concentration'],
      allowsLiquidView: true,
      description: 'A very pale blue liquid, slightly more viscous than water. A mild antiseptic. Produces oxygen gas when catalyzed by MnO₂.'
    },
    {
      id: '150',
      name: 'Titanium Dioxide',
      formula: 'TiO₂',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 79.87,
      density: 4.23,
      solubility: 0,
      cost: 12,
      hazards: ['possible carcinogen if inhaled'],
      allowsLiquidView: false,
      description: 'A brilliant white powder. The most widely used white pigment in the world, found in paints, sunscreen, and food coloring (E171).'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 15: GASES (REACTIVE & INDUSTRIAL)
    // ═══════════════════════════════════════════════════════════════
    {
      id: '10',
      name: 'Ammonia',
      formula: 'NH₃',
      state: 'gas',
      color: '#dcfce7',
      molecularWeight: 17.03,
      density: 0.0007,
      solubility: 47,
      cost: 5,
      hazards: ['toxic', 'corrosive', 'respiratory irritant'],
      allowsLiquidView: true,
      description: 'A colorless gas with a characteristic pungent smell. Widely used as a fertilizer and in industrial cooling.'
    },
    {
      id: '78',
      name: 'Sulfur Dioxide',
      formula: 'SO₂',
      state: 'gas',
      color: '#fffde7',
      molecularWeight: 64.07,
      density: 0.0028,
      solubility: 11,
      cost: 8,
      hazards: ['toxic', 'respiratory irritant'],
      allowsLiquidView: true,
      description: 'A colorless gas with a pungent, suffocating smell. Produced by volcanic activity and fossil fuel combustion.'
    },
    {
      id: '79',
      name: 'Nitrogen Dioxide',
      formula: 'NO₂',
      state: 'gas',
      color: '#b84a00',
      molecularWeight: 46.01,
      density: 0.0019,
      solubility: 0.3,
      cost: 15,
      hazards: ['toxic', 'oxidizer', 'respiratory hazard'],
      allowsLiquidView: false,
      description: 'A reddish-brown gas with a sharp, biting odor. A significant air pollutant and plays a major role in smog formation.'
    },
    {
      id: '80',
      name: 'Nitrous Oxide',
      formula: 'N₂O',
      state: 'gas',
      color: '#f0f9ff',
      molecularWeight: 44.01,
      density: 0.0018,
      solubility: 0.11,
      cost: 10,
      hazards: ['asphyxiant at high concentration'],
      allowsLiquidView: false,
      description: 'A colorless gas with a slightly sweet odor. Known as laughing gas, used in surgery and as a propellant.'
    },
    {
      id: '81',
      name: 'Carbon Monoxide',
      formula: 'CO',
      state: 'gas',
      color: '#f0f4f8',
      molecularWeight: 28.01,
      density: 0.0012,
      solubility: 0.003,
      cost: 10,
      hazards: ['highly toxic', 'flammable', 'asphyxiant'],
      allowsLiquidView: false,
      description: 'A colorless, odorless, and tasteless gas that is toxic to hemoglobic animals. A combustion product of carbon fuels.'
    },
    {
      id: '17',
      name: 'Carbon Dioxide',
      formula: 'CO₂',
      state: 'gas',
      color: '#f8fafc',
      molecularWeight: 44.01,
      density: 0.0019,
      solubility: 0.14,
      cost: 5,
      hazards: ['asphyxiant at high concentration'],
      allowsLiquidView: true,
      description: 'A colorless gas vital to life on Earth. In the lab, generated by reacting carbonates with acids. Turns lime water milky.'
    },
    {
      id: '82',
      name: 'Hydrogen Sulfide',
      formula: 'H₂S',
      state: 'gas',
      color: '#f5f5e8',
      molecularWeight: 34.08,
      density: 0.0015,
      solubility: 0.4,
      cost: 15,
      hazards: ['highly toxic', 'flammable', 'rotten egg odor'],
      allowsLiquidView: false,
      description: 'A colorless gas with a characteristic foul odor of rotten eggs. Very poisonous — desensitizes smell at dangerous concentrations.'
    },
    {
      id: '84',
      name: 'Formaldehyde',
      formula: 'HCHO',
      state: 'gas',
      color: '#f8fafc',
      molecularWeight: 30.03,
      density: 0.0013,
      solubility: 40,
      cost: 10,
      hazards: ['toxic', 'carcinogen', 'respiratory irritant'],
      allowsLiquidView: false,
      description: 'A colorless gas with a strong smell. Used as a preservative (formalin solution) and in building materials.'
    },
    {
      id: '16',
      name: 'Methane',
      formula: 'CH₄',
      state: 'gas',
      color: '#f8fafc',
      molecularWeight: 16.04,
      density: 0.0006,
      solubility: 0.002,
      cost: 3,
      hazards: ['highly flammable', 'asphyxiant'],
      allowsLiquidView: false,
      description: 'The simplest alkane and the main component of natural gas. Colorless and odorless.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 16: ORGANIC LIQUIDS & SOLVENTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: '15',
      name: 'Ethanol',
      formula: 'C₂H₅OH',
      state: 'liquid',
      color: '#f8fafc',
      molecularWeight: 46.07,
      density: 0.78,
      solubility: 100,
      cost: 8,
      hazards: ['flammable'],
      allowsLiquidView: true,
      description: 'A volatile, flammable, colorless liquid with a characteristic odor. Widely used as a solvent, antiseptic, and fuel.'
    },
    {
      id: '88',
      name: 'Methanol',
      formula: 'CH₃OH',
      state: 'liquid',
      color: '#f8fafc',
      molecularWeight: 32.04,
      density: 0.79,
      solubility: 100,
      cost: 8,
      hazards: ['toxic', 'flammable', 'causes blindness'],
      allowsLiquidView: true,
      description: 'The simplest alcohol. A colorless volatile liquid. Highly toxic to humans — can cause blindness or death.'
    },
    {
      id: '89',
      name: 'Propanol',
      formula: 'C₃H₇OH',
      state: 'liquid',
      color: '#f8fafc',
      molecularWeight: 60.10,
      density: 0.80,
      solubility: 100,
      cost: 12,
      hazards: ['flammable', 'irritant'],
      allowsLiquidView: true,
      description: 'A colorless liquid with a sharp musty odor. Used as a solvent and in hand sanitizers.'
    },
    {
      id: '33',
      name: 'Acetone',
      formula: 'C₃H₆O',
      state: 'liquid',
      color: '#f1f5f9',
      molecularWeight: 58.08,
      density: 0.79,
      solubility: 100,
      cost: 8,
      hazards: ['highly flammable', 'irritant'],
      allowsLiquidView: true,
      description: 'The simplest ketone. A colorless, highly volatile and flammable liquid with a characteristic pungent odor.'
    },
    {
      id: '50',
      name: 'Benzene',
      formula: 'C₆H₆',
      state: 'liquid',
      color: '#f8fafc',
      molecularWeight: 78.11,
      density: 0.87,
      solubility: 0.18,
      cost: 15,
      hazards: ['carcinogen', 'flammable', 'toxic'],
      allowsLiquidView: true,
      description: 'A colorless liquid with a characteristic sweet odor. A known carcinogen. The parent compound of aromatic chemistry.'
    },
    {
      id: '85',
      name: 'Toluene',
      formula: 'C₇H₈',
      state: 'liquid',
      color: '#f4f8f0',
      molecularWeight: 92.14,
      density: 0.87,
      solubility: 0.052,
      cost: 10,
      hazards: ['flammable', 'toxic', 'CNS depressant'],
      allowsLiquidView: true,
      description: 'A colorless liquid with a sweet, pungent odor. Used as an industrial solvent and starting material for other chemicals.'
    },
    {
      id: '86',
      name: 'Chloroform',
      formula: 'CHCl₃',
      state: 'liquid',
      color: '#f0f4f8',
      molecularWeight: 119.38,
      density: 1.49,
      solubility: 0.8,
      cost: 25,
      hazards: ['toxic', 'carcinogen', 'CNS depressant'],
      allowsLiquidView: true,
      description: 'A heavy, colorless, faintly sweet-smelling liquid. Once used as an anesthetic, now mainly used as a solvent.'
    },
    {
      id: '87',
      name: 'Diethyl Ether',
      formula: 'C₄H₁₀O',
      state: 'liquid',
      color: '#f8fbfc',
      molecularWeight: 74.12,
      density: 0.71,
      solubility: 6,
      cost: 20,
      hazards: ['extremely flammable', 'peroxide formation hazard'],
      allowsLiquidView: true,
      description: 'A colorless, highly volatile and flammable organic liquid with a characteristic sweet smell. Commonly used as a laboratory solvent.'
    },
    {
      id: '32',
      name: 'Glycerin',
      formula: 'C₃H₈O₃',
      state: 'liquid',
      color: '#f8fafc',
      molecularWeight: 92.09,
      density: 1.26,
      solubility: 100,
      cost: 10,
      hazards: [],
      allowsLiquidView: true,
      description: 'A colorless, odorless, viscous liquid that is sweet-tasting and non-toxic. Used in pharmaceuticals, cosmetics, and food.'
    },
    {
      id: '91',
      name: 'Butyric Acid',
      formula: 'C₄H₈O₂',
      state: 'liquid',
      color: '#f8f4e8',
      molecularWeight: 88.11,
      density: 0.96,
      solubility: 100,
      cost: 25,
      hazards: ['irritant', 'very unpleasant odor'],
      allowsLiquidView: true,
      description: 'A colorless oily liquid responsible for the smell of rancid butter and vomit. Found in butter and used in food flavorings.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 17: ORGANIC SOLIDS & BIOCHEMICALS
    // ═══════════════════════════════════════════════════════════════
    {
      id: '92',
      name: 'Phenol',
      formula: 'C₆H₅OH',
      state: 'solid',
      color: '#ffe8c0',
      molecularWeight: 94.11,
      density: 1.07,
      solubility: 8.3,
      cost: 20,
      hazards: ['toxic', 'corrosive', 'skin burns'],
      allowsLiquidView: true,
      description: 'A white to light-pink crystalline solid with a sweetish-tarry odor. Turns purple-black with FeCl₃ solution.'
    },
    {
      id: '94',
      name: 'Naphthalene',
      formula: 'C₁₀H₈',
      state: 'solid',
      color: '#f8f8f0',
      molecularWeight: 128.17,
      density: 1.14,
      solubility: 0.003,
      cost: 10,
      hazards: ['irritant', 'possible carcinogen'],
      allowsLiquidView: false,
      description: 'A white crystalline solid with a characteristic strong odor. The main ingredient in traditional mothballs.'
    },
    {
      id: '95',
      name: 'Citric Acid',
      formula: 'C₆H₈O₇',
      state: 'solid',
      color: '#fffff0',
      molecularWeight: 192.12,
      density: 1.67,
      solubility: 59,
      cost: 8,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white, odorless solid. A weak organic acid found naturally in citrus fruits. Widely used as a food preservative and flavoring.'
    },
    {
      id: '96',
      name: 'Ascorbic Acid',
      formula: 'C₆H₈O₆',
      state: 'solid',
      color: '#fffde0',
      molecularWeight: 176.12,
      density: 1.65,
      solubility: 33,
      cost: 10,
      hazards: [],
      allowsLiquidView: true,
      description: 'Also known as Vitamin C. A white solid with a sour taste. An essential nutrient and antioxidant.'
    },
    {
      id: '97',
      name: 'Urea',
      formula: 'CO(NH₂)₂',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 60.06,
      density: 1.32,
      solubility: 108,
      cost: 5,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white crystalline solid. The main nitrogen-containing substance in mammalian urine. Widely used as a fertilizer.'
    },
    {
      id: '30',
      name: 'Glucose',
      formula: 'C₆H₁₂O₆',
      state: 'solid',
      color: '#f8fafc',
      molecularWeight: 180.16,
      density: 1.54,
      solubility: 91,
      cost: 8,
      hazards: [],
      allowsLiquidView: true,
      description: 'A simple sugar and the most abundant monosaccharide. The primary energy source for cells. White crystalline powder.'
    },
    {
      id: '31',
      name: 'Sucrose',
      formula: 'C₁₂H₂₂O₁₁',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 342.30,
      density: 1.58,
      solubility: 200,
      cost: 3,
      hazards: [],
      allowsLiquidView: true,
      description: 'Common table sugar. A disaccharide composed of glucose and fructose. White crystalline solid.'
    },
    {
      id: '130',
      name: 'Acetylsalicylic Acid',
      formula: 'C₉H₈O₄',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 180.16,
      density: 1.35,
      solubility: 3,
      cost: 15,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description: 'Commonly known as aspirin. A white crystalline powder. Used as an analgesic, antipyretic, and anti-inflammatory medication.'
    },
    {
      id: '131',
      name: 'Caffeine',
      formula: 'C₈H₁₀N₄O₂',
      state: 'solid',
      color: '#f8f8f8',
      molecularWeight: 194.19,
      density: 1.23,
      solubility: 2.2,
      cost: 20,
      hazards: ['toxic at high doses'],
      allowsLiquidView: true,
      description: 'A white, bitter-tasting crystalline alkaloid. A central nervous system stimulant found naturally in coffee, tea, and cocoa.'
    },
    {
      id: '98',
      name: 'Tartaric Acid',
      formula: 'C₄H₆O₆',
      state: 'solid',
      color: '#f8f8ec',
      molecularWeight: 150.09,
      density: 1.79,
      solubility: 133,
      cost: 15,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white crystalline organic acid found naturally in grapes. Used in food and in cream of tartar.'
    },
    {
      id: '99',
      name: 'Oxalic Acid',
      formula: 'C₂H₂O₄',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 90.03,
      density: 1.90,
      solubility: 9,
      cost: 10,
      hazards: ['toxic', 'irritant'],
      allowsLiquidView: true,
      description: 'A white crystalline solid found in spinach and rhubarb. Used as a cleaning agent and bleach. Toxic at high doses.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 18: INDICATORS & SPECIAL REAGENTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'phenolphthalein',
      name: 'Phenolphthalein',
      formula: 'C₂₀H₁₄O₄',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.02)',
      molecularWeight: 318.33,
      density: 1.30,
      solubility: 0,
      cost: 25,
      hazards: ['suspected carcinogen'],
      allowsLiquidView: true,
      description: 'An acid-base indicator that is colorless in acidic and neutral solutions and turns bright pink/fuchsia in basic solutions (pH > 8.2). The most commonly used titration indicator.'
    },
    {
      id: 'methyl_orange',
      name: 'Methyl Orange',
      formula: 'C₁₄H₁₄N₃NaO₃S',
      state: 'solid',
      color: '#f97316',
      molecularWeight: 327.33,
      density: 1.28,
      solubility: 5,
      cost: 30,
      hazards: [],
      allowsLiquidView: true,
      description: 'An orange-yellow solid pH indicator. Turns red below pH 3.1 and orange-yellow above pH 4.4. Used for strong acid/strong base titrations.'
    },
    {
      id: 'methyl_orange_aq',
      name: 'Methyl Orange Solution',
      formula: 'C₁₄H₁₄N₃NaO₃S(aq)',
      state: 'liquid',
      color: 'rgba(249, 115, 22, 0.35)',
      molarity: 0.001,
      molecularWeight: 327.33,
      density: 1.00,
      solubility: 100,
      cost: 32,
      hazards: [],
      allowsLiquidView: true,
      description: 'An orange aqueous solution at neutral pH. Turns bright red in acid (pH < 3.1) and yellow in base (pH > 4.4). Used in strong acid-strong base titrations.'
    },
    {
      id: 'litmus',
      name: 'Litmus Solution',
      formula: 'Mixture',
      state: 'liquid',
      color: 'rgba(100, 80, 160, 0.35)',
      molecularWeight: 0,
      density: 1.00,
      solubility: 100,
      cost: 15,
      hazards: [],
      allowsLiquidView: true,
      description: 'A purple aqueous mixture from lichen. Turns red in acidic solution (pH < 6) and blue in basic solution (pH > 8). Used as a simple acid-base indicator.'
    },
    {
      id: 'universal_indicator',
      name: 'Universal Indicator',
      formula: 'Mixture',
      state: 'liquid',
      color: 'rgba(0, 200, 80, 0.40)',
      molecularWeight: 0,
      density: 1.00,
      solubility: 100,
      cost: 20,
      hazards: ['flammable (alcohol-based)'],
      allowsLiquidView: true,
      description: 'A mixture of pH indicators in alcohol that produces a rainbow of colors across the pH scale: red (pH 1) → orange → yellow → green (pH 7) → blue → indigo → violet (pH 14).'
    },
    {
      id: '129',
      name: 'Sodium Thiosulfate',
      formula: 'Na₂S₂O₃',
      state: 'solid',
      color: '#f0f0ec',
      molecularWeight: 158.11,
      density: 1.67,
      solubility: 70,
      cost: 12,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white crystalline solid also called hypo. Used in photography as a fixer and to neutralize chlorine in water.'
    },
    {
      id: 'na2s2o3_aq',
      name: 'Sodium Thiosulfate Solution',
      formula: 'Na₂S₂O₃(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 158.11,
      density: 1.006,
      solubility: 100,
      cost: 15,
      hazards: [],
      allowsLiquidView: true,
      description: 'A clear, colorless aqueous solution. Reacts with iodine to decolorize the brown iodine color — the basis of iodometric titrations. Forms a sulfur precipitate with acids (the "disappearing cross" experiment).'
    },
    {
      id: 'starch_indicator',
      name: 'Starch Solution (Indicator)',
      formula: '(C₆H₁₀O₅)ₙ(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.08)',
      molecularWeight: 162.14,
      density: 1.00,
      solubility: 100,
      cost: 5,
      hazards: [],
      allowsLiquidView: true,
      description: 'A clear to slightly opalescent liquid. Turns a deep intense blue-black in the presence of iodine (I₃⁻ ions). Used as an endpoint indicator in iodometric titrations.'
    },
    {
      id: 'diphenylamine',
      name: 'Diphenylamine Indicator',
      formula: 'C₁₂H₁₁N',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.04)',
      molecularWeight: 169.22,
      density: 1.16,
      solubility: 0,
      cost: 35,
      hazards: ['toxic', 'irritant'],
      allowsLiquidView: true,
      description: 'A colorless solution in concentrated sulfuric acid. Used as a redox indicator — turns deep blue-violet when oxidized. Used in dichromate titrations.'
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 19: ADDITIONAL USEFUL LAB REAGENTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: '100',
      name: 'Boric Acid',
      formula: 'H₃BO₃',
      state: 'solid',
      color: '#f4f4f0',
      molecularWeight: 61.83,
      density: 1.44,
      solubility: 5.7,
      cost: 8,
      hazards: ['toxic to reproduction'],
      allowsLiquidView: true,
      description: 'A white, odorless powder. A weak acid used as an insecticide, antiseptic, flame retardant, and in nuclear reactors.'
    },
    {
      id: '113',
      name: 'Potassium Sulfate',
      formula: 'K₂SO₄',
      state: 'solid',
      color: '#f8f8f8',
      molecularWeight: 174.26,
      density: 2.66,
      solubility: 11,
      cost: 10,
      hazards: [],
      allowsLiquidView: true,
      description: 'A white crystalline salt. Used in fertilizers providing both potassium and sulfur and in the manufacture of glass.'
    },
    {
      id: '47',
      name: 'Potassium Iodide',
      formula: 'KI',
      state: 'solid',
      color: '#ffffff',
      molecularWeight: 166.00,
      density: 3.12,
      solubility: 140,
      cost: 20,
      hazards: ['irritant at high doses'],
      allowsLiquidView: true,
      description: 'A white crystalline salt. Used as an iodide source, in photography, and in radiation emergency medicine.'
    },
    {
      id: 'ki_aq',
      name: 'Potassium Iodide Solution',
      formula: 'KI(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 166.00,
      density: 1.010,
      solubility: 100,
      cost: 22,
      hazards: [],
      allowsLiquidView: true,
      description: 'A clear, colorless aqueous solution. Turns yellow-brown when oxidized by chlorine or permanganate (iodine liberated). Used to detect oxidizing agents and form I₃⁻ with iodine.'
    },
    {
      id: 'iodine_solution',
      name: 'Iodine Solution (Lugol\'s)',
      formula: 'I₂/KI(aq)',
      state: 'liquid',
      color: 'rgba(60, 30, 80, 0.65)',
      molarity: 0.05,
      molecularWeight: 253.81,
      density: 1.01,
      solubility: 100,
      cost: 30,
      hazards: ['irritant', 'oxidizer'],
      allowsLiquidView: true,
      description: 'A dark amber-brown to reddish-brown aqueous solution. Turns deep blue-black with starch. Used as a disinfectant (Lugol\'s iodine) and as a starch indicator in iodometric titrations.'
    },
    {
      id: '142',
      name: "Mohr's Salt",
      formula: 'Fe(NH₄)₂(SO₄)₂',
      state: 'solid',
      color: '#90c4a4',
      molecularWeight: 284.05,
      density: 1.86,
      solubility: 27,
      cost: 18,
      hazards: [],
      allowsLiquidView: true,
      description: 'Also called ferrous ammonium sulfate. A pale blue-green crystalline solid. A primary standard in volumetric analysis — more stable than ferrous sulfate.'
    },
    {
      id: '143',
      name: 'Alum',
      formula: 'KAl(SO₄)₂·12H₂O',
      state: 'solid',
      color: '#f8f8f8',
      molecularWeight: 474.38,
      density: 1.73,
      solubility: 15,
      cost: 5,
      hazards: [],
      allowsLiquidView: true,
      description: 'Potassium alum forms colorless octahedral crystals. Used in water purification, leather tanning, and as an aftershave astringent.'
    },
    {
      id: 'hcl_01m',
      name: 'Hydrochloric Acid Solution',
      formula: 'HCl(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.08)',
      molarity: 0.1,
      molecularWeight: 36.46,
      density: 1.05,
      solubility: 100,
      cost: 10,
      hazards: ['corrosive', 'skin irritant', 'respiratory irritant'],
      allowsLiquidView: true,
      description: 'A clear, colorless aqueous solution with a pungent odor. A strong acid that fully dissociates in water. Reacts with metals, carbonates, and bases. Used widely in titrations and qualitative analysis.'
    },
    {
      id: 'naoh_01m',
      name: 'Sodium Hydroxide Solution',
      formula: 'NaOH(aq)',
      state: 'liquid',
      color: 'rgba(77, 166, 255, 0.15)',
      molarity: 0.1,
      molecularWeight: 40.00,
      density: 1.04,
      solubility: 100,
      cost: 12,
      hazards: ['corrosive', 'severe skin burns', 'eye damage'],
      allowsLiquidView: true,
      description: 'A clear, colorless strong base solution with a slippery feel. Turns phenolphthalein bright pink. Reacts vigorously with acids and precipitates metal hydroxides. Used in titrations and saponification.'
    },
    {
      id: 'h2so4_dil',
      name: 'Dilute Sulfuric Acid',
      formula: 'H₂SO₄(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.08)',
      molarity: 0.5,
      molecularWeight: 98.08,
      density: 1.03,
      solubility: 100,
      cost: 10,
      hazards: ['corrosive', 'skin burns'],
      allowsLiquidView: true,
      description: 'A clear, colorless strong acid solution. Denser than water. Reacts with metals to produce hydrogen gas, and with carbonates to produce CO₂. Turns blue litmus red.'
    },
    {
      id: 'hno3_dil',
      name: 'Dilute Nitric Acid',
      formula: 'HNO₃(aq)',
      state: 'liquid',
      color: 'rgba(255, 252, 220, 0.25)',
      molarity: 0.5,
      molecularWeight: 63.01,
      density: 1.02,
      solubility: 100,
      cost: 15,
      hazards: ['corrosive', 'oxidizer'],
      allowsLiquidView: true,
      description: 'A pale yellow aqueous solution. A strong acid and mild oxidizer. Does not form precipitates with common anions — used to acidify solutions in qualitative analysis.'
    },
    {
      id: 'ammonia_aq',
      name: 'Ammonia Solution',
      formula: 'NH₃(aq)',
      state: 'liquid',
      color: 'rgba(220, 252, 231, 0.30)',
      molarity: 0.1,
      molecularWeight: 17.03,
      density: 0.99,
      solubility: 100,
      cost: 8,
      hazards: ['corrosive', 'pungent odor', 'irritant'],
      allowsLiquidView: true,
      description: 'A clear, colorless solution with a characteristic sharp smell. A weak base that precipitates metal hydroxides and forms complex ions (deep blue with Cu²⁺). Used in qualitative analysis of cations.'
    },
    {
      id: 'h2o',
      name: 'Distilled Water',
      formula: 'H₂O',
      state: 'liquid',
      color: 'rgba(220, 240, 255, 0.15)',
      molarity: 55.5,
      molecularWeight: 18.02,
      density: 1.00,
      solubility: 100,
      cost: 1,
      hazards: [],
      allowsLiquidView: true,
      description: 'Pure water. A clear, colorless, odorless liquid. The universal solvent. Used to prepare all aqueous solutions in the lab.'
    },
    {
      id: 'nacl_solid',
      name: 'Sodium Chloride',
      formula: 'NaCl',
      state: 'solid',
      color: '#F0F0F0',
      molecularWeight: 58.44,
      density: 2.16,
      solubility: 36,
      cost: 2,
      hazards: [],
      allowsLiquidView: true,
      description: 'Table salt. White cubic crystals. Fully soluble in water forming a transparent, colorless electrolyte solution.'
    },
    {
      id: 'agno3_solid',
      name: 'Silver Nitrate',
      formula: 'AgNO₃',
      state: 'solid',
      color: '#FFFFFF',
      molecularWeight: 169.87,
      density: 4.35,
      solubility: 216,
      cost: 150,
      hazards: ['oxidizer', 'toxic', 'stains skin black'],
      allowsLiquidView: true,
      description: 'A versatile precursor to many silver compounds. White crystalline powder. Darkens on exposure to light.'
    },
    {
      id: 'glucose_aq',
      name: 'Glucose Solution',
      formula: 'C₆H₁₂O₆(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.07)',
      molarity: 0.1,
      molecularWeight: 180.16,
      density: 1.01,
      solubility: 100,
      cost: 10,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous glucose solution. Slightly sweet taste. Used as the standard substrate in Fehling\'s, Benedict\'s, and Tollens\' tests to demonstrate aldehyde reducing chemistry.'
    },
    {
      id: 'znso4_aq',
      name: 'Zinc Sulfate Solution',
      formula: 'ZnSO₄(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 161.47,
      density: 1.01,
      solubility: 100,
      cost: 18,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution. Forms a white gelatinous Zn(OH)₂ precipitate with NaOH; this dissolves in excess NaOH (amphoteric). Used to demonstrate amphoteric hydroxide behaviour.'
    },
    {
      id: 'na2so4_aq',
      name: 'Sodium Sulfate Solution',
      formula: 'Na₂SO₄(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 142.04,
      density: 1.01,
      solubility: 100,
      cost: 10,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution. Produces a dense white BaSO₄ precipitate with BaCl₂ — the standard test for sulfate ions. Insoluble precipitate is acid-stable.'
    },
    {
      id: 'na2so3_aq',
      name: 'Sodium Sulfite Solution',
      formula: 'Na₂SO₃(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 126.04,
      density: 1.01,
      solubility: 100,
      cost: 12,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution with a faint sulfurous odour. Reacts with acids to liberate SO₂ gas. Used as the SO₂ source in the gas identification experiment.'
    },
    {
      id: 'chlorine_water',
      name: 'Chlorine Water',
      formula: 'Cl₂(aq)',
      state: 'liquid',
      color: 'rgba(250, 204, 21, 0.25)',
      molarity: 0.05,
      molecularWeight: 70.90,
      density: 1.00,
      solubility: 100,
      cost: 15,
      hazards: ['toxic', 'oxidizer', 'corrosive', 'irritant'],
      allowsLiquidView: true,
      description:
        'A pale yellow-green aqueous solution of dissolved chlorine. Contains Cl₂, HCl, and HOCl in equilibrium. A powerful bleaching agent — decolorizes dyes by oxidative destruction of chromophores. Used in the bleaching demonstration.'
    },
    {
      id: 'soap_solution',
      name: 'Soap Solution',
      formula: 'RCOONa(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.12)',
      molecularWeight: 306.00,
      density: 1.00,
      solubility: 100,
      cost: 2,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A dilute aqueous solution of sodium lauryl sulfate (dish soap). Produces stable foam when gas is bubbled through it. Used in the elephant toothpaste demonstration to trap O₂ gas as foam.'
    },
    {
      id: 'fehlings_a',
      name: "Fehling's Solution A",
      formula: 'CuSO₄(aq)',
      state: 'liquid',
      color: 'rgba(59, 130, 246, 0.50)',
      molarity: 0.35,
      molecularWeight: 159.61,
      density: 1.04,
      solubility: 100,
      cost: 20,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        "Component A of Fehling's reagent — a deep blue copper(II) sulfate solution (0.35 M CuSO₄). Must be mixed with equal volume of Fehling's B immediately before use to form the active deep-blue tartrate complex."
    },
    {
      id: 'fehlings_b',
      name: "Fehling's Solution B",
      formula: 'KNaC₄H₄O₆ / NaOH(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molecularWeight: 282.20,
      density: 1.06,
      solubility: 100,
      cost: 22,
      hazards: ['corrosive', 'irritant'],
      allowsLiquidView: true,
      description:
        "Component B of Fehling's reagent — a colorless alkaline solution of potassium sodium tartrate (Rochelle salt) in NaOH. The tartrate stabilizes Cu²⁺ in alkaline solution, preventing Cu(OH)₂ precipitation. Mix equal volume with Fehling's A before use."
    },
    {
      id: 'benedicts_reagent',
      name: "Benedict's Reagent",
      formula: 'Cu²⁺/Na₂CO₃/Na₃C₆H₅O₇(aq)',
      state: 'liquid',
      color: 'rgba(59, 130, 246, 0.55)',
      molecularWeight: 0,
      density: 1.05,
      solubility: 100,
      cost: 25,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        "A deep clear-blue alkaline solution containing copper(II) sulfate, sodium carbonate, and sodium citrate. The citrate stabilizes Cu²⁺ in alkaline solution. Reducing sugars reduce Cu²⁺ to brick-red Cu₂O precipitate on heating. More stable and reliable than Fehling's solution."
    },
    {
      id: 'protein_solution',
      name: 'Protein Solution',
      formula: 'Albumin(aq)',
      state: 'liquid',
      color: 'rgba(255, 248, 220, 0.30)',
      molecularWeight: 66000,
      density: 1.00,
      solubility: 100,
      cost: 8,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A dilute aqueous solution of egg white albumin (1–2% w/v). Slightly cloudy/opalescent. Contains peptide bonds that react with Cu²⁺ in alkaline solution to form a characteristic violet-purple complex in the Biuret test.'
    },
    {
      id: 'vegetable_oil',
      name: 'Vegetable Oil',
      formula: 'Triglyceride mixture',
      state: 'liquid',
      color: 'rgba(255, 220, 50, 0.35)',
      molecularWeight: 880.00,
      density: 0.92,
      solubility: 0,
      cost: 3,
      hazards: ['flammable at high temperature'],
      allowsLiquidView: true,
      description:
        'A pale golden oil composed mainly of triglycerides (glycerol esterified with fatty acids). Immiscible with water — forms a distinct layer. Undergoes saponification with NaOH to produce glycerol and sodium carboxylate salts (soap).'
    },
    {
      id: 'sodium_acetate',
      name: 'Sodium Acetate Solution',
      formula: 'CH₃COONa(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 82.03,
      density: 1.01,
      solubility: 100,
      cost: 8,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution with a faint vinegar-like odour. Weakly basic (pH ~9). Used with acetic acid to prepare acetate buffer solutions. Demonstrates conjugate base behaviour in buffer chemistry.'
    },
    {
      id: 'kscn_aq',
      name: 'Potassium Thiocyanate Solution',
      formula: 'KSCN(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 97.18,
      density: 1.004,
      solubility: 100,
      cost: 18,
      hazards: ['irritant', 'toxic if ingested'],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution. Produces an immediate and dramatic blood-red color with Fe³⁺ ions — one of the most sensitive colorimetric tests in qualitative analysis. Used as the confirmatory test for iron(III).'
    },
    {
      id: 'kscn_solid',
      name: 'Potassium Thiocyanate',
      formula: 'KSCN',
      state: 'solid',
      color: '#f8f8f4',
      molecularWeight: 97.18,
      density: 1.89,
      solubility: 177,
      cost: 20,
      hazards: ['irritant', 'toxic if ingested'],
      allowsLiquidView: true,
      description:
        'A white hygroscopic crystalline solid. Highly soluble in water. Forms blood-red complex with Fe³⁺. Used in gravimetric analysis and photography.'
    },
    {
      id: 'na2so3_solid',
      name: 'Sodium Sulfite',
      formula: 'Na₂SO₃',
      state: 'solid',
      color: '#f4f4f0',
      molecularWeight: 126.04,
      density: 2.63,
      solubility: 23,
      cost: 10,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        'A white crystalline powder. A mild reducing and bleaching agent. Reacts with acids to generate SO₂ gas. Used as a food preservative (E221) and in photography as a fixer component.'
    },
    {
      id: 'copper_sulfate_5h2o',
      name: 'Copper Sulfate Pentahydrate',
      formula: 'CuSO₄·5H₂O',
      state: 'solid',
      color: '#2563eb',
      molecularWeight: 249.68,
      density: 2.28,
      solubility: 32,
      cost: 22,
      hazards: ['irritant', 'toxic to aquatic life'],
      allowsLiquidView: true,
      description:
        'The familiar vivid royal-blue hydrated form of copper sulfate (bluestone/blue vitriol). The pentahydrate form, MW 249.68 g/mol, is what is typically found in labs. Turns white anhydrous CuSO₄ on strong heating.'
    },
    {
      id: 'iron2_sulfate_7h2o',
      name: 'Iron(II) Sulfate Heptahydrate',
      formula: 'FeSO₄·7H₂O',
      state: 'solid',
      color: '#7fc4a0',
      molecularWeight: 278.01,
      density: 1.895,
      solubility: 26,
      cost: 10,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        'The common green heptahydrate form of iron(II) sulfate (copperas/green vitriol). MW 278.01 g/mol. Pale blue-green crystals. Oxidises slowly in air to yellow-brown Fe³⁺. Used as an iron supplement and reducing agent.'
    },
    {
      id: 'kcl_aq',
      name: 'Potassium Chloride Solution',
      formula: 'KCl(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 74.55,
      density: 1.005,
      solubility: 100,
      cost: 5,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution. Physiologically important electrolyte. Produces a lilac/violet flame in a flame test (K⁺). Used in electrochemistry, medicine (IV fluids), and as a salt substitute.'
    },
    {
      id: 'kcl_solid',
      name: 'Potassium Chloride',
      formula: 'KCl',
      state: 'solid',
      color: '#f8f8f8',
      molecularWeight: 74.55,
      density: 1.984,
      solubility: 34,
      cost: 5,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A white crystalline solid. Highly soluble in water. Produces a characteristic lilac flame (K⁺). Used in fertilizers, medicine (electrolyte replenishment), and as a salt substitute for low-sodium diets.'
    },
    {
      id: 'nahso4_aq',
      name: 'Sodium Bisulfate Solution',
      formula: 'NaHSO₄(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.07)',
      molarity: 0.5,
      molecularWeight: 120.06,
      density: 1.02,
      solubility: 100,
      cost: 8,
      hazards: ['corrosive', 'irritant'],
      allowsLiquidView: true,
      description:
        'A clear, colorless acidic solution. Sodium hydrogen sulfate — a solid acid in aqueous solution. Used to acidify solutions in qualitative analysis where sulfate interference must be avoided. pH ~1 at this concentration.'
    },
    {
      id: 'nh4oh_aq',
      name: 'Ammonium Hydroxide Solution',
      formula: 'NH₄OH(aq)',
      state: 'liquid',
      color: 'rgba(220, 252, 231, 0.25)',
      molarity: 2.0,
      molecularWeight: 35.05,
      density: 0.91,
      solubility: 100,
      cost: 8,
      hazards: ['corrosive', 'toxic', 'pungent odor'],
      allowsLiquidView: true,
      description:
        'Concentrated ammonia solution (~28–30% NH₃ by weight). A pungent, colorless liquid. A common lab base used in qualitative analysis to precipitate and complex metal ions. Same as "concentrated Ammonia Solution" but at higher molarity.'
    },
    {
      id: 'k2so4_aq',
      name: 'Potassium Sulfate Solution',
      formula: 'K₂SO₄(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 174.26,
      density: 1.01,
      solubility: 100,
      cost: 12,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution. Produces a white BaSO₄ precipitate with BaCl₂ and a lilac/violet K⁺ flame. Used in the sulfate detection test and as an electrolyte in conductivity experiments.'
    },
    {
      id: 'mgcl2_aq',
      name: 'Magnesium Chloride Solution',
      formula: 'MgCl₂(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.05)',
      molarity: 0.1,
      molecularWeight: 95.21,
      density: 1.007,
      solubility: 100,
      cost: 8,
      hazards: [],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution. Divalent electrolyte. Forms a white Mg(OH)₂ precipitate with NaOH (unlike Zn²⁺ it does NOT dissolve in excess NaOH). Used in coagulation chemistry and as a Mg²⁺ source.'
    },
    {
      id: 'mnso4_aq',
      name: 'Manganese(II) Sulfate Solution',
      formula: 'MnSO₄(aq)',
      state: 'liquid',
      color: 'rgba(251, 207, 232, 0.30)',
      molarity: 0.1,
      molecularWeight: 151.00,
      density: 1.01,
      solubility: 100,
      cost: 22,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        'A very pale pink aqueous solution. Forms a pale pink/flesh-colored Mn(OH)₂ precipitate with NaOH, which slowly oxidises in air to dark brown MnO₂. Used in Winkler method for dissolved oxygen determination.'
    },
    {
      id: 'al2so4_aq',
      name: 'Aluminum Sulfate Solution',
      formula: 'Al₂(SO₄)₃(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 342.15,
      density: 1.01,
      solubility: 100,
      cost: 10,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        'A clear, colorless, slightly acidic aqueous solution. Forms a white gelatinous Al(OH)₃ precipitate with NaOH that dissolves in excess alkali (amphoteric). Used in water treatment as a flocculant and in papermaking.'
    },
    {
      id: 'h2c2o4_aq',
      name: 'Oxalic Acid Solution',
      formula: 'H₂C₂O₄(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 90.03,
      density: 1.004,
      solubility: 100,
      cost: 12,
      hazards: ['toxic', 'irritant'],
      allowsLiquidView: true,
      description:
        'A clear, colorless aqueous solution. A diprotic weak acid. Used as a primary standard in permanganate titrations (KMnO₄ vs oxalic acid at 60°C). Forms insoluble CaC₂O₄ with Ca²⁺ — used to detect calcium ions.'
    },
    {
      id: 'na2co3_aq',
      name: 'Sodium Carbonate Solution',
      formula: 'Na₂CO₃(aq)',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.06)',
      molarity: 0.1,
      molecularWeight: 105.99,
      density: 1.01,
      solubility: 100,
      cost: 8,
      hazards: ['irritant'],
      allowsLiquidView: true,
      description:
        'A clear, colorless alkaline solution. Moderately basic (pH ~11). Reacts with acids to produce CO₂. Precipitates metal carbonates from metal salt solutions. Used in buffer preparation and as a mild alkali source.'
    },
  ]
} as const





// ********************** Reactions & Experiments Data ************************







// ─────────────────────────────────────────────────────────────────────
export const reactionsSeed = {
  experiments: [
 
    // ═══════════════════════════════════════════════════════
    // TITRATIONS
    // ═══════════════════════════════════════════════════════
    {
      id: 'acid_base_strong',
      name: 'Titration: HCl vs NaOH',
      type: 'titration',
      theory:
        'A strong acid (HCl) is titrated with a strong base (NaOH) using phenolphthalein. At the equivalence point moles of H⁺ equal moles of OH⁻ and pH = 7.',
      initialChemicals: [],
      steps: [
        {
          id: 'fill_burette',
          action: 'pour',
          target: 'burette',
          chemical: 'Sodium Hydroxide Solution',
          volume: 50,
          hint: 'Close the stopcock. Fill the burette with 0.1M Sodium Hydroxide Solution to the 0.00 mL mark. Remove air bubbles from the tip.'
        },
        {
          id: 'add_acid',
          action: 'pipette',
          target: 'flask',
          chemical: 'Hydrochloric Acid Solution',
          volume: 25,
          concentration: 0.1,
          hint: 'Pipette exactly 25.00 mL of 0.1M Hydrochloric Acid Solution into the conical flask.'
        },
        {
          id: 'add_indicator',
          action: 'drop',
          chemical: 'Phenolphthalein',
          hint: 'Add 2–3 drops of Phenolphthalein indicator to the flask. It is colorless in acid.'
        },
        {
          id: 'titrate',
          action: 'burette',
          chemical: 'Sodium Hydroxide Solution',
          concentration: 0.1,
          until: 'color_change',
          hint: 'Open the burette slowly. Swirl continuously. The endpoint is the first persistent pale pink that does not fade after 30 seconds (≈ 25.00 mL).'
        }
      ],
      result: {
        color: 'rgba(255, 105, 180, 0.4)',
        equation: 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)',
        observations: [
          'Solution is colorless with phenolphthalein in acidic conditions.',
          'Pink clouds appear and vanish on each drop of NaOH approaching the endpoint.',
          'Endpoint: first permanent pale pink — pH jumps sharply to ~7 then ~9 beyond equivalence.'
        ],
        formula: 'M₁V₁ = M₂V₂   →   c(HCl) = c(NaOH) × V(NaOH) / V(HCl)'
      }
    },
    {
      id: 'acid_base_weak',
      name: 'Titration: Acetic Acid vs NaOH',
      type: 'titration',
      theory:
        'A weak acid (CH₃COOH) is titrated with a strong base (NaOH). The equivalence point pH > 7 due to hydrolysis of the acetate ion. Phenolphthalein is suitable.',
      initialChemicals: [],
      steps: [
        {
          id: 'fill_burette',
          action: 'pour',
          target: 'burette',
          chemical: 'Sodium Hydroxide Solution',
          volume: 50,
          hint: 'Fill the burette with standardised 0.1M Sodium Hydroxide Solution to the 0.00 mL mark.'
        },
        {
          id: 'add_acid',
          action: 'pipette',
          target: 'flask',
          chemical: 'Acetic Acid',
          volume: 25,
          concentration: 0.1,
          hint: 'Pipette 25.00 mL of 0.1M Acetic Acid into the conical flask.'
        },
        {
          id: 'add_indicator',
          action: 'drop',
          chemical: 'Phenolphthalein',
          hint: 'Add 2–3 drops of Phenolphthalein. Colorless in acidic solution.'
        },
        {
          id: 'titrate',
          action: 'burette',
          chemical: 'Sodium Hydroxide Solution',
          concentration: 0.1,
          until: 'color_change',
          hint: 'Titrate slowly near the endpoint. Expect ~25.00 mL. Endpoint: faint persistent pink (pH ≈ 8.7) — basic because acetate ion hydrolyses.'
        }
      ],
      result: {
        color: 'rgba(255, 105, 180, 0.35)',
        equation: 'CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)',
        observations: [
          'Weak acid — colorless initially with phenolphthalein.',
          'Half-equivalence point (buffer region) shows pH ≈ pKa = 4.74.',
          'Endpoint is faint pale pink at pH ≈ 8.7 (above 7 due to acetate hydrolysis).'
        ],
        formula: 'M₁V₁ = M₂V₂'
      }
    },
    {
      id: 'permanganate_titration',
      name: 'Permanganate Titration: KMnO₄ vs FeSO₄',
      type: 'titration',
      theory:
        'KMnO₄ (purple) oxidises Fe²⁺ to Fe³⁺ in acidic solution and is reduced to Mn²⁺ (colorless). KMnO₄ is self-indicating — no external indicator needed.',
      initialChemicals: [],
      steps: [
        {
          id: 'fill_burette',
          action: 'pour',
          target: 'burette',
          chemical: 'Potassium Permanganate Solution',
          volume: 50,
          hint: 'Fill the burette with standardised 0.02M Potassium Permanganate Solution. Use a brown or foil-wrapped burette to protect from light.'
        },
        {
          id: 'add_iron',
          action: 'pipette',
          target: 'flask',
          chemical: 'Iron(II) Sulfate Solution',
          volume: 25,
          hint: 'Pipette 25.00 mL of freshly prepared Iron(II) Sulfate Solution into the flask. Use fresh solution — Fe²⁺ oxidises slowly in air.'
        },
        {
          id: 'acidify',
          action: 'pour',
          target: 'flask',
          chemical: 'Dilute Sulfuric Acid',
          volume: 10,
          hint: 'Add 10 mL of Dilute Sulfuric Acid. IMPORTANT: use H₂SO₄, not HCl (Cl⁻ would be oxidised by KMnO₄). Solution should be colorless.'
        },
        {
          id: 'titrate',
          action: 'burette',
          chemical: 'Potassium Permanganate Solution',
          until: 'color_change',
          hint: 'Add KMnO₄ dropwise — each drop is instantly decolorised by excess Fe²⁺. Swirl after each drop. Endpoint: first faint permanent pink tinge that persists ≥ 30 s.'
        }
      ],
      result: {
        color: 'rgba(255, 150, 200, 0.3)',
        equation: 'MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O',
        observations: [
          'Each drop of purple KMnO₄ is instantly decolorised as Fe²⁺ reduces it to Mn²⁺.',
          'Near endpoint: decolorisation slows — the purple persists briefly.',
          'Endpoint: first faint permanent pink — self-indicating, no external indicator needed.'
        ],
        formula: 'n(Fe²⁺) = 5 × n(MnO₄⁻)'
      }
    },
    {
      id: 'dichromate_titration',
      name: 'Dichromate Titration: K₂Cr₂O₇ vs FeSO₄',
      type: 'titration',
      theory:
        'K₂Cr₂O₇ is a primary standard oxidant. It oxidises Fe²⁺ to Fe³⁺ in acidic solution. Diphenylamine indicator turns blue-violet at the endpoint.',
      initialChemicals: [],
      steps: [
        {
          id: 'fill_burette',
          action: 'pour',
          target: 'burette',
          chemical: 'Potassium Dichromate Solution',
          volume: 50,
          hint: 'Fill the burette with standardised 0.1M Potassium Dichromate Solution (a primary standard — no standardisation needed).'
        },
        {
          id: 'add_iron',
          action: 'pipette',
          target: 'flask',
          chemical: 'Iron(II) Sulfate Solution',
          volume: 25,
          hint: "Pipette 25.00 mL of Iron(II) Sulfate Solution. Solution is pale green (Fe²⁺). Use Mohr's Salt for more stable Fe²⁺ if available."
        },
        {
          id: 'acidify',
          action: 'pour',
          target: 'flask',
          chemical: 'Dilute Sulfuric Acid',
          volume: 10,
          hint: 'Add 10 mL of Dilute Sulfuric Acid to acidify. Essential — reaction does not proceed in neutral/basic solution.'
        },
        {
          id: 'add_indicator',
          action: 'drop',
          chemical: 'Diphenylamine Indicator',
          hint: 'Add 3–4 drops of Diphenylamine Indicator. Solution turns dark green (Cr³⁺ accumulates during titration).'
        },
        {
          id: 'titrate',
          action: 'burette',
          chemical: 'Potassium Dichromate Solution',
          until: 'color_change',
          hint: 'Titrate — solution stays green as Cr³⁺ builds up. At endpoint: sharp permanent change from green to blue-violet (diphenylamine oxidised by first excess Cr₂O₇²⁻).'
        }
      ],
      result: {
        color: 'rgba(70, 30, 120, 0.5)',
        equation: 'Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O',
        observations: [
          'Solution is initially pale green (Fe²⁺ + indicator).',
          'During titration: turns darker green as Cr³⁺ accumulates.',
          'Endpoint: sharp color change to permanent blue-violet.'
        ],
        formula: 'n(Fe²⁺) = 6 × n(Cr₂O₇²⁻)'
      }
    },
    {
      id: 'iodometric_titration',
      name: 'Iodometric Titration: Na₂S₂O₃ vs I₂',
      type: 'titration',
      theory:
        'Sodium thiosulfate reduces iodine to iodide. Starch indicator gives a deep blue-black with I₂ — the endpoint is its complete disappearance.',
      initialChemicals: [],
      steps: [
        {
          id: 'fill_burette',
          action: 'pour',
          target: 'burette',
          chemical: 'Sodium Thiosulfate Solution',
          volume: 50,
          hint: 'Fill the burette with standardised 0.1M Sodium Thiosulfate Solution.'
        },
        {
          id: 'add_iodine',
          action: 'pour',
          target: 'flask',
          chemical: "Iodine Solution (Lugol's)",
          volume: 25,
          hint: "Add 25 mL of Iodine Solution (Lugol's) to the flask. Dark reddish-brown color."
        },
        {
          id: 'titrate_to_pale',
          action: 'burette',
          chemical: 'Sodium Thiosulfate Solution',
          hint: 'Add thiosulfate rapidly, swirling, until solution lightens to pale straw-yellow. Do NOT add starch yet.'
        },
        {
          id: 'add_starch',
          action: 'drop',
          chemical: 'Starch Solution (Indicator)',
          hint: 'Now add starch indicator — solution turns deep blue-black (I₃⁻-starch complex). Adding starch too early gives a false endpoint.'
        },
        {
          id: 'titrate_to_endpoint',
          action: 'burette',
          chemical: 'Sodium Thiosulfate Solution',
          until: 'color_change',
          hint: 'Add thiosulfate dropwise. One half-drop causes the deep blue-black to vanish permanently to colorless. Record final burette reading.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.1)',
        equation: '2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻',
        observations: [
          'Dark reddish-brown iodine solution fades to pale yellow-straw on adding thiosulfate.',
          'Starch turns solution deep blue-black.',
          'Endpoint: one drop causes complete disappearance of blue-black to colorless.'
        ],
        formula: 'n(I₂) = ½ × n(S₂O₃²⁻)'
      }
    },
    {
      id: 'mohr_titration',
      name: "Mohr's Method: Cl⁻ by AgNO₃",
      type: 'titration',
      theory:
        "Mohr's method determines chloride concentration by titrating with silver nitrate using potassium chromate as indicator. The endpoint is a colour change from yellow to red-brown (Ag₂CrO₄ precipitates after all Cl⁻ is consumed).",
      initialChemicals: [],
      steps: [
        {
          id: 'fill_burette',
          action: 'pour',
          target: 'burette',
          chemical: 'Silver Nitrate Solution',
          volume: 50,
          hint: 'Fill the burette with standardised 0.1M Silver Nitrate Solution. Protect from light — AgNO₃ is light-sensitive.'
        },
        {
          id: 'add_chloride',
          action: 'pipette',
          target: 'flask',
          chemical: 'Sodium Chloride Solution',
          volume: 25,
          hint: 'Pipette 25.00 mL of Sodium Chloride Solution into a white-tiled conical flask.'
        },
        {
          id: 'add_indicator',
          action: 'drop',
          chemical: 'Potassium Chromate',
          hint: 'Add 1 mL (about 20 drops) of Potassium Chromate indicator. Solution turns bright yellow.'
        },
        {
          id: 'titrate',
          action: 'burette',
          chemical: 'Silver Nitrate Solution',
          until: 'color_change',
          hint: 'Titrate with AgNO₃. White AgCl precipitate forms throughout. Endpoint: the first permanent red-brown tinge (Ag₂CrO₄) that does not redissolve on shaking.'
        }
      ],
      result: {
        color: 'rgba(180, 60, 20, 0.55)',
        precipitate: true,
        equation: 'Ag⁺ + Cl⁻ → AgCl↓ (white, Ksp = 1.8×10⁻¹⁰)\nAt endpoint: 2Ag⁺ + CrO₄²⁻ → Ag₂CrO₄↓ (brick-red)',
        observations: [
          'White AgCl curdy precipitate forms throughout the titration.',
          'Endpoint: first permanent brick-red colour from Ag₂CrO₄ precipitation.',
          'Method requires neutral–slightly alkaline conditions (pH 6.5–9).'
        ],
        formula: 'n(Cl⁻) = n(Ag⁺) = c(AgNO₃) × V(AgNO₃)'
      }
    },
 
    // ═══════════════════════════════════════════════════════
    // ION DETECTION / QUALITATIVE ANALYSIS
    // ═══════════════════════════════════════════════════════
    {
      id: 'halide_detection',
      name: 'Halide Ion Detection (AgNO₃ Test)',
      type: 'ion_detection',
      theory:
        'AgNO₃ precipitates halide ions with characteristic colours: AgCl (white), AgBr (cream), AgI (yellow). Ammonia solubility distinguishes them conclusively.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_sample',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Chloride Solution',
          volume: 10,
          hint: 'Add 10 mL of the unknown halide solution (Sodium Chloride Solution used here).'
        },
        {
          id: 'acidify',
          action: 'drop',
          chemical: 'Dilute Nitric Acid',
          hint: 'Add 2–3 drops of Dilute Nitric Acid to remove interfering CO₃²⁻ and SO₃²⁻ ions that would also precipitate with Ag⁺.'
        },
        {
          id: 'add_agno3',
          action: 'drop',
          chemical: 'Silver Nitrate Solution',
          hint: 'Add Silver Nitrate Solution dropwise. A white curdy AgCl precipitate forms immediately. Observe the colour carefully (white = Cl⁻, cream = Br⁻, yellow = I⁻).'
        },
        {
          id: 'add_ammonia_dil',
          action: 'pour',
          target: 'tube',
          chemical: 'Ammonia Solution',
          volume: 5,
          hint: 'Add dilute Ammonia Solution. AgCl dissolves (white precipitate clears). AgBr only partially dissolves in concentrated NH₃. AgI is insoluble in NH₃.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.8)',
        precipitate: true,
        equation: 'Ag⁺ + Cl⁻ → AgCl↓ (white)   dissolves in dil NH₃\nAg⁺ + Br⁻ → AgBr↓ (cream)  dissolves in conc NH₃ only\nAg⁺ + I⁻  → AgI↓  (yellow)  insoluble in NH₃',
        observations: [
          'Chloride: white curdy precipitate — dissolves in dilute ammonia → [Ag(NH₃)₂]⁺.',
          'Bromide: cream precipitate — only partially soluble in concentrated ammonia.',
          'Iodide: yellow precipitate — completely insoluble in ammonia (confirms I⁻).'
        ]
      }
    },
    {
      id: 'sulfate_detection',
      name: 'Sulfate Ion Detection (BaCl₂ Test)',
      type: 'ion_detection',
      theory:
        'Ba²⁺ reacts with SO₄²⁻ to form BaSO₄, a dense white precipitate insoluble in dilute acids. Acidification first removes interfering CO₃²⁻ and SO₃²⁻.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_sample',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Sulfate Solution',
          volume: 10,
          hint: 'Add 10 mL of Sodium Sulfate Solution to the test tube.'
        },
        {
          id: 'acidify',
          action: 'drop',
          chemical: 'Dilute Nitric Acid',
          hint: 'Add 5 drops of Dilute Nitric Acid. This dissolves any BaCO₃ or BaSO₃ that might otherwise form false positives.'
        },
        {
          id: 'add_bacl2',
          action: 'drop',
          chemical: 'Barium Chloride Solution',
          hint: 'Add Barium Chloride Solution dropwise. An immediate dense white precipitate confirms SO₄²⁻.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.85)',
        precipitate: true,
        equation: 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄↓ (white, insoluble in dilute acids)',
        observations: [
          'Dense white precipitate of BaSO₄ forms immediately.',
          'Precipitate does NOT dissolve in dilute HNO₃ — this distinguishes sulfate from carbonate and sulfite.'
        ]
      }
    },
    {
      id: 'carbonate_detection',
      name: 'Carbonate Ion Detection (Acid + Limewater)',
      type: 'ion_detection',
      theory:
        'Carbonate and bicarbonate ions react with acid to liberate CO₂, which turns limewater milky by forming CaCO₃ precipitate.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_sample',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Carbonate',
          volume: 2,
          hint: 'Add a spatula of Sodium Carbonate (or 2 mL of carbonate solution) to the test tube.'
        },
        {
          id: 'add_acid',
          action: 'pour',
          target: 'tube',
          chemical: 'Hydrochloric Acid Solution',
          volume: 5,
          hint: 'Add Hydrochloric Acid Solution. Vigorous effervescence — CO₂ is evolved immediately.'
        },
        {
          id: 'test_limewater',
          action: 'bubble',
          target: 'limewater_tube',
          chemical: 'Carbon Dioxide',
          hint: 'Pass the evolved gas through Lime Water via a delivery tube. The clear solution turns milky-white.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.80)',
        precipitate: true,
        equation: 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑\nCO₂ + Ca(OH)₂ → CaCO₃↓ (milky white) + H₂O',
        observations: [
          'Vigorous effervescence when acid is added — CO₂ is produced.',
          'Lime Water turns milky-white confirming CO₂.',
          'Excess CO₂ re-dissolves the precipitate: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (clear again).'
        ]
      }
    },
    {
      id: 'iron3_detection',
      name: 'Iron(III) Ion Detection (Thiocyanate Test)',
      type: 'ion_detection',
      theory:
        'Thiocyanate ions react with Fe³⁺ to form the blood-red pentaaquathiocyanateiron(III) complex. This is one of the most sensitive colour tests in qualitative analysis.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_fecl3',
          action: 'pour',
          target: 'tube',
          chemical: 'Iron(III) Chloride Solution',
          volume: 5,
          hint: 'Add 5 mL of Iron(III) Chloride Solution (amber colour) to the test tube.'
        },
        {
          id: 'add_kscn',
          action: 'drop',
          chemical: 'Potassium Thiocyanate Solution',
          hint: 'Add 2–3 drops of Potassium Thiocyanate Solution. An immediate intense blood-red colour develops.'
        }
      ],
      result: {
        color: 'rgba(180, 0, 0, 0.75)',
        equation: 'Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ (blood-red)\nFe³⁺ + 6SCN⁻ → [Fe(SCN)₆]³⁻ (excess SCN⁻)',
        observations: [
          'Immediate intense blood-red colour on adding SCN⁻ to Fe³⁺.',
          'Extremely sensitive — detects ppm concentrations of Fe³⁺.',
          'Colour intensifies with more SCN⁻ as more complex forms.'
        ]
      }
    },
 
    // ═══════════════════════════════════════════════════════
    // PRECIPITATION REACTIONS
    // ═══════════════════════════════════════════════════════
    {
      id: 'golden_rain',
      name: 'Golden Rain: Pb²⁺ + I⁻',
      type: 'precipitation',
      theory:
        'Lead(II) iodide is sparingly soluble. Mixing Pb²⁺ and I⁻ solutions produces a dramatic golden-yellow precipitate that dissolves on heating and recrystallises on cooling.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_lead',
          action: 'pour',
          target: 'beaker',
          chemical: 'Lead(II) Nitrate Solution',
          volume: 100,
          hint: 'Pour 100 mL of Lead(II) Nitrate Solution into a 250 mL beaker. CAUTION: lead compounds are toxic.'
        },
        {
          id: 'add_iodide',
          action: 'pour',
          target: 'beaker',
          chemical: 'Potassium Iodide Solution',
          volume: 100,
          hint: 'Quickly pour Potassium Iodide Solution into the beaker. A brilliant golden-yellow PbI₂ precipitate forms instantly.'
        },
        {
          id: 'heat',
          action: 'heat',
          target: 'beaker',
          hint: 'Gently heat the beaker with stirring. The golden precipitate dissolves — PbI₂ is more soluble in hot water.'
        },
        {
          id: 'cool',
          action: 'cool',
          target: 'beaker',
          hint: 'Allow to cool slowly WITHOUT stirring. Golden PbI₂ crystals "rain" down through the clear solution — the classic golden rain effect.'
        }
      ],
      result: {
        color: 'rgba(245, 216, 0, 0.70)',
        precipitate: true,
        equation: 'Pb²⁺(aq) + 2I⁻(aq) → PbI₂↓ (bright golden-yellow)',
        observations: [
          'Immediate brilliant golden-yellow precipitate on mixing.',
          'Precipitate dissolves completely in hot water (increased solubility).',
          'On slow cooling, golden needle-like PbI₂ crystals fall through the solution.'
        ]
      }
    },
    {
      id: 'prussian_blue_formation',
      name: 'Prussian Blue Formation (Fe³⁺ test)',
      type: 'precipitation',
      theory:
        'Fe³⁺ reacts with ferrocyanide [Fe(CN)₆]⁴⁻ to form Prussian blue — one of the most intense pigments known. Used as the confirmatory test for Fe³⁺.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_fecl3',
          action: 'pour',
          target: 'tube',
          chemical: 'Iron(III) Chloride Solution',
          volume: 5,
          hint: 'Add 5 mL of amber Iron(III) Chloride Solution to the test tube.'
        },
        {
          id: 'add_ferrocyanide',
          action: 'drop',
          chemical: 'Potassium Ferrocyanide',
          hint: 'Add a few drops of Potassium Ferrocyanide solution. An intense deep blue precipitate forms immediately.'
        }
      ],
      result: {
        color: 'rgba(0, 49, 83, 0.85)',
        precipitate: true,
        equation: '4Fe³⁺ + 3[Fe(CN)₆]⁴⁻ → Fe₄[Fe(CN)₆]₃↓ (Prussian blue)',
        observations: [
          'Intense deep blue precipitate — one of the deepest blues in chemistry.',
          'Even trace Fe³⁺ gives a visible blue colour.',
          'Confirmatory test for Fe³⁺ ions.'
        ]
      }
    },
    {
      id: 'turnbulls_blue',
      name: "Turnbull's Blue (Fe²⁺ test)",
      type: 'precipitation',
      theory:
        "Iron(II) ions react with ferricyanide [Fe(CN)₆]³⁻ to form Turnbull's blue — structurally identical to Prussian blue. Confirmatory test for Fe²⁺.",
      initialChemicals: [],
      steps: [
        {
          id: 'add_feso4',
          action: 'pour',
          target: 'tube',
          chemical: 'Iron(II) Sulfate Solution',
          volume: 5,
          hint: 'Add 5 mL of pale green Iron(II) Sulfate Solution to the test tube.'
        },
        {
          id: 'add_ferricyanide',
          action: 'drop',
          chemical: 'Potassium Ferricyanide',
          hint: "Add a few drops of Potassium Ferricyanide solution. A deep blue precipitate (Turnbull's blue) confirms Fe²⁺."
        }
      ],
      result: {
        color: 'rgba(0, 49, 83, 0.80)',
        precipitate: true,
        equation: '3Fe²⁺ + 2[Fe(CN)₆]³⁻ → Fe₃[Fe(CN)₆]₂↓ (Turnbull\'s blue)',
        observations: [
          "Deep blue precipitate forms — structurally identical to Prussian blue.",
          'Confirmatory test for Fe²⁺.',
          'Fe³⁺ gives no precipitate with ferricyanide (distinguishes the two oxidation states).'
        ]
      }
    },
    {
      id: 'copper_hydroxide_precipitation',
      name: 'Cu(OH)₂ Precipitation and Decomposition',
      type: 'precipitation',
      theory:
        'NaOH precipitates pale blue Cu(OH)₂ from Cu²⁺ solutions. On heating, Cu(OH)₂ dehydrates to black CuO.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_cuso4',
          action: 'pour',
          target: 'tube',
          chemical: 'Copper Sulfate Solution',
          volume: 10,
          hint: 'Add 10 mL of blue Copper Sulfate Solution to the test tube.'
        },
        {
          id: 'add_naoh',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Add Sodium Hydroxide Solution dropwise. A pale blue gelatinous Cu(OH)₂ precipitate forms. Excess NaOH does NOT dissolve it (unlike NH₃).'
        },
        {
          id: 'heat',
          action: 'heat',
          target: 'tube',
          hint: 'Gently heat in a water bath. The pale blue precipitate turns black — Cu(OH)₂ dehydrates to CuO.'
        }
      ],
      result: {
        color: 'rgba(20, 20, 18, 0.70)',
        precipitate: true,
        equation: 'Cu²⁺ + 2OH⁻ → Cu(OH)₂↓ (pale blue gelatinous)\nCu(OH)₂ →(heat) CuO(s) + H₂O(l)  (black)',
        observations: [
          'Pale blue gelatinous Cu(OH)₂ precipitate forms with NaOH.',
          'Does not dissolve in excess NaOH (unlike Zn(OH)₂).',
          'Turns black (CuO) on gentle heating.'
        ]
      }
    },
    {
      id: 'iron_hydroxide_tests',
      name: 'Fe(OH)₂ vs Fe(OH)₃ Precipitate Tests',
      type: 'precipitation',
      theory:
        'NaOH gives characteristic hydroxide precipitates: dirty green Fe(OH)₂ from Fe²⁺, rust-red Fe(OH)₃ from Fe³⁺. Fe(OH)₂ oxidises slowly in air to Fe(OH)₃.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_feso4',
          action: 'pour',
          target: 'tube_a',
          chemical: 'Iron(II) Sulfate Solution',
          volume: 5,
          hint: 'Add 5 mL of pale green Iron(II) Sulfate Solution to tube A.'
        },
        {
          id: 'add_fecl3',
          action: 'pour',
          target: 'tube_b',
          chemical: 'Iron(III) Chloride Solution',
          volume: 5,
          hint: 'Add 5 mL of amber Iron(III) Chloride Solution to tube B.'
        },
        {
          id: 'add_naoh_both',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Add Sodium Hydroxide Solution to both tubes. Tube A → dirty green Fe(OH)₂. Tube B → rust-red/brown Fe(OH)₃.'
        },
        {
          id: 'observe_oxidation',
          action: 'observe',
          hint: 'Shake tube A in air. The dirty green Fe(OH)₂ slowly turns rust-red/brown as it oxidises to Fe(OH)₃ in the presence of dissolved O₂.'
        }
      ],
      result: {
        color: 'rgba(139, 58, 42, 0.60)',
        precipitate: true,
        equation: 'Fe²⁺ + 2OH⁻ → Fe(OH)₂↓ (dirty green)\nFe³⁺ + 3OH⁻ → Fe(OH)₃↓ (rust-red)\n4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃',
        observations: [
          'Fe²⁺: dirty green/grey-green gelatinous precipitate.',
          'Fe³⁺: rust-red/brown precipitate immediately.',
          'The dirty green Fe(OH)₂ slowly browns in air — oxidation to Fe(OH)₃.'
        ]
      }
    },
    {
      id: 'zinc_hydroxide_amphoteric',
      name: 'Zn(OH)₂: Amphoteric Behaviour',
      type: 'precipitation',
      theory:
        'Zn(OH)₂ is amphoteric — it dissolves in both acids and excess alkali, distinguishing Zn²⁺ from most other divalent metal ions.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_znso4',
          action: 'pour',
          target: 'tube',
          chemical: 'Zinc Sulfate Solution',
          volume: 10,
          hint: 'Add 10 mL of colorless Zinc Sulfate Solution to the test tube.'
        },
        {
          id: 'add_naoh_few',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Add Sodium Hydroxide Solution dropwise. A white gelatinous Zn(OH)₂ precipitate forms.'
        },
        {
          id: 'add_naoh_excess',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Hydroxide Solution',
          volume: 10,
          hint: 'Add excess Sodium Hydroxide Solution. The white precipitate dissolves completely to give a clear zincate [Zn(OH)₄]²⁻ solution.'
        },
        {
          id: 'add_acid',
          action: 'drop',
          chemical: 'Hydrochloric Acid Solution',
          hint: 'Add Hydrochloric Acid Solution dropwise. The white precipitate reforms, then dissolves again in excess acid. This confirms amphoteric behaviour.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.10)',
        equation: 'Zn²⁺ + 2OH⁻ → Zn(OH)₂↓ (white)\nZn(OH)₂ + 2OH⁻ → [Zn(OH)₄]²⁻ (clear zincate)\nZn(OH)₂ + 2H⁺ → Zn²⁺ + 2H₂O',
        observations: [
          'White gelatinous precipitate forms with dilute NaOH.',
          'Completely dissolves in excess NaOH — amphoteric (dissolves in base).',
          'Precipitate reforms then dissolves again in excess acid.'
        ]
      }
    },
    {
      id: 'cobalt_ammonia_complex',
      name: 'Co²⁺ + Ammonia: Complex Formation',
      type: 'complex_formation',
      theory:
        'Excess ammonia dissolves Co(OH)₂ to form the hexaamminecobalt(II) complex. On standing in air this oxidises to the more stable Co(III) ammonia complex.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_cocl2',
          action: 'pour',
          target: 'tube',
          chemical: 'Cobalt(II) Chloride Solution',
          volume: 5,
          hint: 'Add 5 mL of pink Cobalt(II) Chloride Solution to the test tube.'
        },
        {
          id: 'add_ammonia_drop',
          action: 'drop',
          chemical: 'Ammonia Solution',
          hint: 'Add Ammonia Solution dropwise. A blue-green Co(OH)₂ precipitate forms initially.'
        },
        {
          id: 'add_ammonia_excess',
          action: 'pour',
          target: 'tube',
          chemical: 'Ammonia Solution',
          volume: 10,
          hint: 'Add excess Ammonia Solution. The precipitate dissolves to give a straw-yellow/brown [Co(NH₃)₆]²⁺ solution. Leave in air — it deepens to dark brown (Co³⁺ complex).'
        }
      ],
      result: {
        color: 'rgba(180, 120, 20, 0.55)',
        equation: 'Co²⁺ + 2NH₃ + 2H₂O → Co(OH)₂↓ + 2NH₄⁺\nCo(OH)₂ + 6NH₃ → [Co(NH₃)₆]²⁺ + 2OH⁻ (straw-yellow)\n4[Co(NH₃)₆]²⁺ + O₂ + 2H₂O → 4[Co(NH₃)₆]³⁺ + 4OH⁻ (dark brown)',
        observations: [
          'Pink CoCl₂ → blue-green Co(OH)₂ precipitate with dilute NH₃.',
          'Excess NH₃ dissolves precipitate → straw-yellow/brown hexaammine complex.',
          'Standing in air: gradual deepening to dark brown (Co³⁺ oxidation).'
        ]
      }
    },
    {
      id: 'copper_ammonia_complex',
      name: 'Cu²⁺ + Ammonia: Deep Blue Complex',
      type: 'complex_formation',
      theory:
        'Excess ammonia dissolves pale blue Cu(OH)₂ to give the intensely deep royal blue tetraamminecopper(II) complex — one of the most vivid colour changes in qualitative analysis.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_cuso4',
          action: 'pour',
          target: 'tube',
          chemical: 'Copper Sulfate Solution',
          volume: 5,
          hint: 'Add 5 mL of pale blue Copper Sulfate Solution.'
        },
        {
          id: 'add_ammonia_drop',
          action: 'drop',
          chemical: 'Ammonia Solution',
          hint: 'Add Ammonia Solution dropwise. A pale blue Cu(OH)₂ precipitate forms.'
        },
        {
          id: 'add_ammonia_excess',
          action: 'pour',
          target: 'tube',
          chemical: 'Ammonia Solution',
          volume: 10,
          hint: 'Add excess Ammonia Solution. The pale blue precipitate dissolves to give a strikingly deep royal blue [Cu(NH₃)₄]²⁺ solution.'
        }
      ],
      result: {
        color: 'rgba(29, 78, 216, 0.75)',
        equation: 'Cu²⁺ + 2NH₃ + 2H₂O → Cu(OH)₂↓ + 2NH₄⁺\nCu(OH)₂ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ + 2OH⁻ (deep royal blue)',
        observations: [
          'Pale blue Cu(OH)₂ precipitate forms with dilute NH₃.',
          'Dissolves completely in excess NH₃ → deep intense royal blue solution.',
          'One of the most dramatic colour changes in qualitative analysis.'
        ]
      }
    },
 
    // ═══════════════════════════════════════════════════════
    // REDOX / DECOMPOSITION
    // ═══════════════════════════════════════════════════════
    {
      id: 'elephant_toothpaste',
      name: 'Elephant Toothpaste: H₂O₂ Decomposition',
      type: 'decomposition',
      theory:
        'Concentrated H₂O₂ decomposes rapidly in the presence of I⁻ catalyst. Soap traps the O₂ as foam. The exothermic decomposition produces steam and a tall warm foam column.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_h2o2',
          action: 'pour',
          target: 'cylinder',
          chemical: 'Hydrogen Peroxide',
          volume: 50,
          hint: 'Pour 50 mL of 30% Hydrogen Peroxide into a tall graduated cylinder. CAUTION: concentrated H₂O₂ is corrosive — use gloves.'
        },
        {
          id: 'add_soap',
          action: 'pour',
          target: 'cylinder',
          chemical: 'Soap Solution',
          volume: 10,
          hint: 'Add 10 mL of Soap Solution to the cylinder. This will trap the oxygen bubbles as foam.'
        },
        {
          id: 'add_ki',
          action: 'pour',
          target: 'cylinder',
          chemical: 'Potassium Iodide Solution',
          volume: 10,
          hint: 'Quickly pour Potassium Iodide Solution into the cylinder and step back. A large warm foam erupts rapidly.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.85)',
        equation: '2H₂O₂(aq) →(I⁻ catalyst) 2H₂O(l) + O₂(g)  [exothermic]',
        observations: [
          'A large column of warm white foam erupts rapidly from the cylinder.',
          'Foam is hot — the O₂ decomposition is exothermic.',
          'I⁻ acts as a catalyst — it is regenerated and not consumed.',
          'Glowing splint relights in the foam (O₂ present).'
        ]
      }
    },
    {
      id: 'mno2_h2o2_decomposition',
      name: 'MnO₂ Catalytic Decomposition of H₂O₂',
      type: 'decomposition',
      theory:
        'MnO₂ acts as a heterogeneous catalyst for H₂O₂ decomposition. It is not consumed in the reaction.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_h2o2',
          action: 'pour',
          target: 'tube',
          chemical: 'Hydrogen Peroxide',
          volume: 10,
          hint: 'Add 10 mL of Hydrogen Peroxide to the test tube.'
        },
        {
          id: 'add_mno2',
          action: 'add_solid',
          target: 'tube',
          chemical: 'Manganese Dioxide',
          mass: 0.5,
          hint: 'Add a small spatula (≈0.5 g) of black Manganese Dioxide powder. Vigorous O₂ evolution begins immediately.'
        },
        {
          id: 'test_oxygen',
          action: 'glowing_splint',
          target: 'tube',
          hint: 'Hold a glowing (not burning) splint at the mouth of the tube — it relights brightly, confirming O₂.'
        }
      ],
      result: {
        color: 'rgba(239, 246, 255, 0.9)',
        equation: '2H₂O₂(aq) →(MnO₂) 2H₂O(l) + O₂(g)',
        observations: [
          'Vigorous O₂ bubbling begins immediately.',
          'Glowing splint relights — confirming oxygen.',
          'MnO₂ is unchanged at the end (true catalyst).'
        ]
      }
    },
    {
      id: 'iodine_clock',
      name: 'Iodine Clock Reaction',
      type: 'kinetics',
      theory:
        'Iodate oxidises iodide slowly to I₂, but thiosulfate instantly reduces I₂ back to I⁻. Once thiosulfate is exhausted, I₂ accumulates and reacts with starch — triggering an instantaneous colour change. The delay time is controlled by concentration.',
      initialChemicals: [],
      steps: [
        {
          id: 'prepare_solution_a',
          action: 'mix',
          target: 'beaker_a',
          chemicals: ['Potassium Iodide Solution', 'Sodium Thiosulfate Solution', 'Starch Solution (Indicator)'],
          hint: 'Solution A: mix Potassium Iodide Solution + Sodium Thiosulfate Solution + Starch Solution (Indicator) in beaker A.'
        },
        {
          id: 'prepare_solution_b',
          action: 'mix',
          target: 'beaker_b',
          chemicals: ['Potassium Dichromate Solution', 'Dilute Sulfuric Acid'],
          hint: 'Solution B: mix Potassium Dichromate Solution + Dilute Sulfuric Acid in beaker B (acts as iodate source in the clock reaction).'
        },
        {
          id: 'mix_solutions',
          action: 'pour',
          target: 'beaker_a',
          chemical: 'Potassium Dichromate Solution',
          hint: 'Pour Solution B into Solution A quickly and start timing. The combined solution looks clear...'
        },
        {
          id: 'observe_clock',
          action: 'observe',
          hint: 'Wait — the solution appears clear for a predictable delay time. Then suddenly, the entire solution turns deep blue-black simultaneously. Vary concentration or temperature to change the clock time.'
        }
      ],
      result: {
        color: 'rgba(15, 10, 40, 0.90)',
        equation: 'IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O  (slow)\n2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻       (fast, consumes I₂)\nOnce S₂O₃²⁻ exhausted: I₂ + starch → deep blue-black',
        observations: [
          'Solution stays completely clear for a predictable delay (clock period).',
          'Sudden transition — entire solution turns deep blue-black simultaneously.',
          'Demonstrates kinetics, rate-determining steps, and threshold effects.'
        ]
      }
    },
    {
      id: 'bleaching_with_chlorine',
      name: 'Bleaching Action of Chlorine Water',
      type: 'redox',
      theory:
        'Chlorine dissolved in water forms HOCl, a powerful oxidising bleach that destroys the azo chromophore of dye molecules.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_dye',
          action: 'pour',
          target: 'tube',
          chemical: 'Methyl Orange Solution',
          volume: 5,
          hint: 'Add 5 mL of orange Methyl Orange Solution to the tube.'
        },
        {
          id: 'add_chlorine_water',
          action: 'pour',
          target: 'tube',
          chemical: 'Chlorine Water',
          volume: 5,
          hint: 'Add 5 mL of pale yellow-green Chlorine Water. The orange colour fades and disappears rapidly.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.08)',
        equation: 'Cl₂ + H₂O ⇌ HCl + HOCl\nHOCl oxidises azo dye chromophore → colorless products (irreversible)',
        observations: [
          'Orange methyl orange rapidly decolorises to colorless.',
          'Bleaching is irreversible — the dye molecule is destroyed, not just deprotonated.',
          'Demonstrates the oxidative bleaching action of hypochlorous acid.'
        ]
      }
    },
    {
      id: 'thermite_reaction',
      name: 'Thermite Reaction: Al + Fe₂O₃',
      type: 'redox',
      theory:
        'Aluminium reduces iron(III) oxide to produce molten iron. The reaction is highly exothermic (≈3000°C) and self-sustaining once initiated.',
      initialChemicals: [],
      steps: [
        {
          id: 'mix_thermite',
          action: 'mix',
          target: 'crucible',
          chemicals: ['Aluminum', 'Iron(III) Oxide'],
          hint: 'Mix fine Aluminum powder and Iron(III) Oxide powder in a 1:3 mass ratio in a ceramic or clay crucible. Handle in a fume hood.'
        },
        {
          id: 'ignite',
          action: 'ignite',
          target: 'crucible',
          hint: 'Ignite with a Magnesium ribbon fuse (Magnesium burns hot enough to initiate the reaction). Step well back.'
        },
        {
          id: 'observe',
          action: 'observe',
          hint: 'An intensely bright white-orange flash occurs. Do NOT look directly — UV hazard. Molten iron collects at the bottom.'
        }
      ],
      result: {
        color: 'rgba(251, 191, 36, 0.9)',
        equation: '2Al(s) + Fe₂O₃(s) → Al₂O₃(s) + 2Fe(l)   ΔH = −850 kJ/mol',
        observations: [
          'Extremely bright white-orange flash — temperature reaches ≈3000°C.',
          'Shower of brilliant sparks and molten metal droplets.',
          'Molten iron (silvery) pools at the bottom of the crucible.',
          'White Al₂O₃ slag floats on top of the molten iron.'
        ]
      }
    },
    {
      id: 'sodium_water_reaction',
      name: 'Sodium Metal + Water',
      type: 'displacement',
      theory:
        'Sodium reacts vigorously with water producing NaOH and H₂. The exothermic reaction may ignite the hydrogen. The alkaline solution turns phenolphthalein pink.',
      initialChemicals: [
        { name: 'Distilled Water', target: 'trough', volume: 500, color: 'rgba(220,240,255,0.2)' }
      ],
      steps: [
        {
          id: 'add_indicator',
          action: 'drop',
          chemical: 'Phenolphthalein',
          target: 'trough',
          hint: 'Add a few drops of Phenolphthalein to the water trough.'
        },
        {
          id: 'add_sodium',
          action: 'add_solid',
          target: 'trough',
          chemical: 'Sodium',
          mass: 0.5,
          hint: 'Cut a small piece of Sodium metal under mineral oil and add to the water. Use forceps. Stand back — vigorous fizzing and possible ignition.'
        },
        {
          id: 'observe',
          action: 'observe',
          hint: 'Sodium melts into a ball, skates on the surface, fizzes vigorously. Water turns bright pink as NaOH forms. May ignite with an orange flame (Na⁺ emission).'
        }
      ],
      result: {
        color: 'rgba(255, 105, 180, 0.45)',
        equation: '2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)  [ΔH = −368 kJ/mol]',
        observations: [
          'Sodium melts into a silvery ball — reaction heat exceeds Na melting point (98°C).',
          'Vigorous fizzing — H₂ gas produced.',
          'Water turns bright pink — NaOH is strongly alkaline (pH > 13).',
          'Sodium may ignite the H₂ with an orange flame (Na⁺ D-line emission).'
        ]
      }
    },
    {
      id: 'potassium_water_reaction',
      name: 'Potassium Metal + Water',
      type: 'displacement',
      theory:
        'Potassium reacts even more vigorously than sodium. The heat spontaneously ignites the hydrogen gas, producing a characteristic lilac/violet flame from K⁺ emission.',
      initialChemicals: [
        { name: 'Distilled Water', target: 'trough', volume: 500, color: 'rgba(220,240,255,0.2)' }
      ],
      steps: [
        {
          id: 'add_indicator',
          action: 'drop',
          chemical: 'Phenolphthalein',
          target: 'trough',
          hint: 'Add Phenolphthalein to the water. Erect a safety screen.'
        },
        {
          id: 'add_potassium',
          action: 'add_solid',
          target: 'trough',
          chemical: 'Potassium',
          mass: 0.3,
          hint: 'Add a small piece of Potassium metal. It immediately ignites with a lilac/violet flame and moves rapidly across the surface.'
        }
      ],
      result: {
        color: 'rgba(255, 105, 180, 0.50)',
        equation: '2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)  [spontaneous H₂ ignition]',
        observations: [
          'Potassium ignites spontaneously — lilac/violet flame from K⁺ emission (766 nm).',
          'More violent than sodium; may spit molten potassium droplets.',
          'Water turns pink (phenolphthalein) from KOH formation.'
        ]
      }
    },
    {
      id: 'magnesium_acid_reaction',
      name: 'Magnesium + Hydrochloric Acid',
      type: 'displacement',
      theory:
        'Mg displaces H₂ from HCl. Rate of H₂ evolution can be used to study kinetics by varying concentration or temperature.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_hcl',
          action: 'pour',
          target: 'flask',
          chemical: 'Hydrochloric Acid Solution',
          volume: 30,
          hint: 'Add 30 mL of Hydrochloric Acid Solution to the conical flask.'
        },
        {
          id: 'add_magnesium',
          action: 'add_solid',
          target: 'flask',
          chemical: 'Magnesium',
          mass: 1,
          hint: 'Add a strip of Magnesium ribbon. Vigorous effervescence begins immediately.'
        },
        {
          id: 'test_gas',
          action: 'burning_splint',
          hint: 'Test evolved gas with a burning splint — a squeaky pop confirms H₂.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.12)',
        equation: 'Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)',
        observations: [
          'Rapid H₂ effervescence as magnesium dissolves.',
          'Solution warms — exothermic reaction.',
          'Magnesium completely dissolves if acid is in excess.',
          'Squeaky pop with burning splint confirms H₂.'
        ]
      }
    },
    {
      id: 'zinc_copper_sulfate_displacement',
      name: 'Zinc + Copper Sulfate Displacement',
      type: 'displacement',
      theory:
        'Zinc is higher in the electrochemical series than copper and displaces Cu²⁺ from solution. The blue fades as Cu deposits on zinc.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_cuso4',
          action: 'pour',
          target: 'beaker',
          chemical: 'Copper Sulfate Solution',
          volume: 50,
          hint: 'Pour 50 mL of blue Copper Sulfate Solution into the beaker.'
        },
        {
          id: 'add_zinc',
          action: 'add_solid',
          target: 'beaker',
          chemical: 'Zinc',
          mass: 2,
          hint: 'Add Zinc granules or a zinc strip. The blue fades and reddish-brown copper deposits on the zinc surface.'
        },
        {
          id: 'observe',
          action: 'observe',
          hint: 'Leave for 5–10 minutes. The blue colour fades to colourless (ZnSO₄ is colourless) and copper coats the zinc.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.12)',
        equation: 'Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)',
        observations: [
          'Blue CuSO₄ fades as Cu²⁺ is removed from solution.',
          'Reddish-brown copper deposits on zinc surface.',
          'Solution becomes colourless (ZnSO₄ is colourless).'
        ]
      }
    },
    {
      id: 'copper_displacement',
      name: 'Metal Displacement: Fe + CuSO₄',
      type: 'displacement',
      theory:
        'Iron displaces copper from copper sulfate because iron is higher in the reactivity series (more reactive). The blue solution fades as Fe²⁺ (pale green) replaces Cu²⁺.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_copper_sulfate',
          action: 'pour',
          target: 'beaker',
          chemical: 'Copper Sulfate Solution',
          volume: 50,
          hint: 'Pour 50 mL of blue Copper Sulfate Solution into the beaker.'
        },
        {
          id: 'add_iron',
          action: 'add_solid',
          target: 'beaker',
          chemical: 'Iron',
          mass: 2,
          hint: 'Add a clean iron nail or iron filings to the blue solution. A reddish-brown copper deposit forms on the iron.'
        },
        {
          id: 'observe',
          action: 'wait',
          duration: 300,
          hint: 'Wait 5 minutes. The vivid blue fades to pale green (FeSO₄ solution) and copper coats the iron.'
        }
      ],
      result: {
        color: 'rgba(74, 222, 128, 0.3)',
        equation: 'Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)',
        observations: [
          'Vivid blue fades to pale green (FeSO₄).',
          'Reddish-brown copper deposits on the iron.',
          'Iron partially dissolves as it is oxidised to Fe²⁺.'
        ]
      }
    },
 
    // ═══════════════════════════════════════════════════════
    // GAS TESTS
    // ═══════════════════════════════════════════════════════
    {
      id: 'acid_carbonate_co2',
      name: 'Acid + Carbonate: CO₂ Generation',
      type: 'gas_evolution',
      theory:
        'Acids react with carbonates to produce CO₂ gas, water, and a salt. CO₂ is confirmed by turning limewater milky.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_carbonate',
          action: 'add_solid',
          target: 'flask',
          chemical: 'Calcium Carbonate',
          mass: 5,
          hint: 'Add marble chips or Calcium Carbonate powder to the flask.'
        },
        {
          id: 'add_acid',
          action: 'pour',
          target: 'flask',
          chemical: 'Hydrochloric Acid Solution',
          volume: 20,
          hint: 'Pour Hydrochloric Acid Solution over the marble chips. Vigorous effervescence of CO₂ begins immediately.'
        },
        {
          id: 'test_gas',
          action: 'bubble',
          target: 'limewater_tube',
          chemical: 'Carbon Dioxide',
          hint: 'Direct the CO₂ through Lime Water via a delivery tube. The clear limewater turns milky-white, confirming CO₂.'
        }
      ],
      result: {
        color: 'rgba(243, 244, 246, 0.9)',
        precipitate: true,
        equation: 'CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\nCO₂ + Ca(OH)₂(aq) → CaCO₃↓ + H₂O  (milky white)',
        observations: [
          'Vigorous fizzing as marble chips dissolve.',
          'Lime Water turns milky-white — CO₂ confirmed.',
          'Excess CO₂ turns the limewater clear again (soluble Ca(HCO₃)₂ forms).'
        ]
      }
    },
    {
      id: 'baking_soda_vinegar',
      name: 'Baking Soda + Vinegar (NaHCO₃ + CH₃COOH)',
      type: 'gas_evolution',
      theory:
        'A classic acid-carbonate reaction. The endothermic dissolution and CO₂ evolution make the mixture noticeably cold.',
      initialChemicals: [
        { name: 'Acetic Acid', target: 'beaker', volume: 50, color: 'rgba(248,250,252,0.2)' }
      ],
      steps: [
        {
          id: 'add_vinegar',
          action: 'pour',
          target: 'beaker',
          chemical: 'Acetic Acid',
          volume: 50,
          hint: 'Pour 50 mL of Acetic Acid (vinegar) into the beaker.'
        },
        {
          id: 'add_baking_soda',
          action: 'add_solid',
          target: 'beaker',
          chemical: 'Sodium Bicarbonate',
          mass: 5,
          hint: 'Add Sodium Bicarbonate. Vigorous CO₂ effervescence begins. The mixture becomes noticeably cold.'
        }
      ],
      result: {
        color: 'rgba(248, 250, 252, 0.15)',
        equation: 'NaHCO₃(s) + CH₃COOH(aq) → CH₃COONa(aq) + H₂O(l) + CO₂(g)',
        observations: [
          'Vigorous CO₂ effervescence.',
          'Mixture feels cold — endothermic overall.',
          'Fizzing stops when NaHCO₃ is consumed; solution contains sodium acetate.'
        ]
      }
    },
    {
      id: 'ammonia_hcl_smoke',
      name: 'Ammonia + HCl Gas: White Smoke',
      type: 'gas_phase_reaction',
      theory:
        'NH₃(g) and HCl(g) react directly in air to produce a dense white smoke of solid NH₄Cl particles.',
      initialChemicals: [],
      steps: [
        {
          id: 'open_hcl',
          action: 'open_bottle',
          chemical: 'Hydrochloric Acid',
          hint: 'Open a bottle of concentrated Hydrochloric Acid. Fumes of HCl gas escape into the air.'
        },
        {
          id: 'open_ammonia',
          action: 'open_bottle',
          chemical: 'Ammonia',
          hint: 'Open a bottle of concentrated Ammonia nearby. NH₃ fumes diffuse toward the HCl fumes.'
        },
        {
          id: 'observe_smoke',
          action: 'observe',
          hint: 'Where the NH₃ and HCl gas clouds meet, a dramatic dense white smoke of NH₄Cl solid particles forms instantly.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.9)',
        equation: 'NH₃(g) + HCl(g) → NH₄Cl(s)  (dense white smoke)',
        observations: [
          'Dense white smoke forms at the interface of the two gas clouds.',
          'Composed of tiny NH₄Cl solid particles.',
          'Can be used to demonstrate gas diffusion rates.'
        ]
      }
    },
    {
      id: 'test_for_hydrogen',
      name: 'Gas Test: Hydrogen (Squeaky Pop)',
      type: 'gas_test',
      theory:
        'Hydrogen burns with a characteristic squeaky pop. Zn + HCl is the standard lab source of H₂.',
      initialChemicals: [],
      steps: [
        {
          id: 'generate_h2',
          action: 'mix',
          target: 'tube',
          chemicals: ['Zinc', 'Hydrochloric Acid Solution'],
          hint: 'Add Zinc granules to Hydrochloric Acid Solution in a test tube. H₂ gas is produced immediately.'
        },
        {
          id: 'collect_gas',
          action: 'collect_gas',
          target: 'tube',
          hint: 'Collect H₂ by placing an inverted test tube (filled with water) over the delivery tube. Allow H₂ to displace the water.'
        },
        {
          id: 'apply_splint',
          action: 'burning_splint',
          target: 'tube',
          hint: 'Apply a burning splint to the mouth of the tube — a squeaky pop is heard as H₂ ignites with atmospheric O₂.'
        }
      ],
      result: {
        color: 'rgba(240, 244, 248, 0.5)',
        equation: 'Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)\n2H₂(g) + O₂(g) → 2H₂O(l)  (squeaky pop)',
        observations: [
          'A squeaky pop confirms hydrogen.',
          'Larger volumes give a louder bark.',
          'The only flammable colourless gas that burns to give only water.'
        ]
      }
    },
    {
      id: 'test_for_oxygen',
      name: 'Gas Test: Oxygen (Glowing Splint)',
      type: 'gas_test',
      theory:
        'Oxygen relights a glowing splint — the definitive test. MnO₂ catalyses rapid H₂O₂ decomposition to give a convenient O₂ source.',
      initialChemicals: [],
      steps: [
        {
          id: 'generate_o2',
          action: 'mix',
          target: 'tube',
          chemicals: ['Hydrogen Peroxide', 'Manganese Dioxide'],
          hint: 'Add a spatula of Manganese Dioxide to Hydrogen Peroxide — O₂ is generated rapidly.'
        },
        {
          id: 'collect_gas',
          action: 'collect_gas',
          target: 'tube',
          hint: 'Collect O₂ by downward displacement (O₂ is denser than air).'
        },
        {
          id: 'apply_splint',
          action: 'glowing_splint',
          target: 'tube',
          hint: 'Insert a glowing (not burning) splint into the tube — it relights brightly in pure O₂.'
        }
      ],
      result: {
        color: 'rgba(191, 219, 254, 0.5)',
        equation: '2H₂O₂(aq) →(MnO₂) 2H₂O(l) + O₂(g)\nGlowing splint relights in O₂',
        observations: [
          'Glowing splint relights — definitive test for oxygen.',
          'Burns more vigorously in pure O₂ than in air.',
          'If splint does not relight: insufficient O₂ or too much air dilution.'
        ]
      }
    },
    {
      id: 'test_for_chlorine',
      name: 'Gas Test: Chlorine (Damp Litmus / Starch-Iodide)',
      type: 'gas_test',
      theory:
        'Chlorine is pale yellow-green, has a bleaching smell, bleaches damp litmus, and turns starch-iodide paper blue-black.',
      initialChemicals: [],
      steps: [
        {
          id: 'generate_cl2',
          action: 'mix',
          target: 'flask',
          chemicals: ['Manganese Dioxide', 'Hydrochloric Acid'],
          hint: 'Add concentrated Hydrochloric Acid to Manganese Dioxide and gently warm. Pale yellow-green Cl₂ gas is produced: MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O.'
        },
        {
          id: 'test_litmus',
          action: 'damp_litmus',
          hint: 'Hold damp red litmus paper in the Cl₂. It first turns blue (HCl/moisture makes it alkaline briefly), then is bleached white (HOCl destroys the dye).'
        },
        {
          id: 'test_starch_iodide',
          action: 'starch_iodide_paper',
          hint: 'Hold damp starch-iodide paper in the gas — it turns deep blue-black as Cl₂ oxidises I⁻ → I₂, which reacts with starch.'
        }
      ],
      result: {
        color: 'rgba(250, 204, 21, 0.35)',
        equation: 'MnO₂ + 4HCl → MnCl₂ + Cl₂↑ + 2H₂O\nCl₂ + H₂O → HCl + HOCl  (bleaches damp litmus)\nCl₂ + 2KI → 2KCl + I₂    (I₂ + starch → blue-black)',
        observations: [
          'Pale yellow-green gas with suffocating bleaching odour.',
          'Damp litmus is bleached white.',
          'Starch-iodide paper turns deep blue-black.',
          'All three confirm chlorine.'
        ]
      }
    },
    {
      id: 'test_for_ammonia',
      name: 'Gas Test: Ammonia (Litmus / HCl Smoke)',
      type: 'gas_test',
      theory:
        'NH₃ is the only common alkaline gas — it turns damp red litmus blue and forms white NH₄Cl smoke with HCl fumes.',
      initialChemicals: [],
      steps: [
        {
          id: 'generate_nh3',
          action: 'heat',
          target: 'tube',
          chemicals: ['Ammonium Chloride', 'Calcium Hydroxide'],
          hint: 'Mix Ammonium Chloride and Calcium Hydroxide solids and heat gently. Colourless NH₃ gas with a pungent smell is produced.'
        },
        {
          id: 'test_litmus',
          action: 'damp_litmus',
          hint: 'Hold damp red litmus paper in the gas — it turns blue, confirming an alkaline gas.'
        },
        {
          id: 'test_hcl_smoke',
          action: 'hcl_fumes',
          hint: 'Hold a glass rod dipped in concentrated Hydrochloric Acid near the gas — dense white smoke of NH₄Cl confirms ammonia.'
        }
      ],
      result: {
        color: 'rgba(220, 252, 231, 0.4)',
        equation: '2NH₄Cl(s) + Ca(OH)₂(s) →(heat) CaCl₂(s) + 2NH₃(g) + 2H₂O(g)\nNH₃(g) + HCl(g) → NH₄Cl(s)  (white smoke)',
        observations: [
          'Pungent, choking smell.',
          'Damp red litmus turns blue — only alkaline gas.',
          'White smoke with HCl fumes — confirms ammonia specifically.'
        ]
      }
    },
    {
      id: 'test_for_sulfur_dioxide',
      name: 'Gas Test: Sulfur Dioxide (KMnO₄ Decolorisation)',
      type: 'gas_test',
      theory:
        'SO₂ is a reducing gas — it decolorises acidified KMnO₄ (purple → colourless) and turns dichromate paper from orange to green.',
      initialChemicals: [],
      steps: [
        {
          id: 'generate_so2',
          action: 'mix',
          target: 'flask',
          chemicals: ['Sodium Sulfite Solution', 'Dilute Sulfuric Acid'],
          hint: 'Add Dilute Sulfuric Acid to Sodium Sulfite Solution. Colourless SO₂ gas with a pungent suffocating smell is produced: Na₂SO₃ + H₂SO₄ → Na₂SO₄ + SO₂ + H₂O.'
        },
        {
          id: 'test_kmno4',
          action: 'bubble_through',
          target: 'kmno4_tube',
          chemical: 'Potassium Permanganate Solution',
          hint: 'Bubble SO₂ through acidified Potassium Permanganate Solution. The purple colour is discharged to colourless.'
        },
        {
          id: 'test_dichromate',
          action: 'dichromate_paper',
          hint: 'Hold damp Potassium Dichromate paper in the SO₂. Orange turns green (Cr⁶⁺ → Cr³⁺).'
        }
      ],
      result: {
        color: 'rgba(255, 253, 231, 0.5)',
        equation: 'Na₂SO₃ + H₂SO₄ → Na₂SO₄ + SO₂↑ + H₂O\n5SO₂ + 2MnO₄⁻ + 2H₂O → 5SO₄²⁻ + 2Mn²⁺ + 4H⁺  (purple → colourless)\nSO₂ + K₂Cr₂O₇ → Cr³⁺  (orange → green)',
        observations: [
          'Pungent smell like burning matches.',
          'Purple acidified KMnO₄ decolorises to colourless.',
          'Orange dichromate paper turns green.',
          'Both tests confirm SO₂.'
        ]
      }
    },
 
    // ═══════════════════════════════════════════════════════
    // FLAME TESTS
    // ═══════════════════════════════════════════════════════
    {
      id: 'flame_tests',
      name: 'Flame Tests for Metal Cations',
      type: 'qualitative_analysis',
      theory:
        'Metal ions in a flame are thermally excited and emit characteristic wavelengths of light — a rapid qualitative identification test.',
      initialChemicals: [],
      steps: [
        {
          id: 'clean_wire',
          action: 'clean',
          chemical: 'Hydrochloric Acid Solution',
          hint: 'Dip nichrome wire in Hydrochloric Acid Solution and heat in a blue Bunsen flame repeatedly until the wire imparts no colour. This removes metal ion contamination.'
        },
        {
          id: 'test_sodium',
          action: 'flame_test',
          chemical: 'Sodium Chloride',
          hint: 'Dip the clean wire in Sodium Chloride and hold in the flame. Intense, persistent golden-yellow flame — Na⁺ (589 nm D-line).'
        },
        {
          id: 'test_potassium',
          action: 'flame_test',
          chemical: 'Potassium Nitrate',
          hint: 'Test Potassium Nitrate. Lilac/violet flame — K⁺ (766 nm). View through blue cobalt glass to remove Na⁺ yellow contamination.'
        },
        {
          id: 'test_lithium',
          action: 'flame_test',
          chemical: 'Lithium Chloride',
          hint: 'Test Lithium Chloride. Bright crimson-red flame — Li⁺ (670 nm). Most intense red in the alkali flame tests.'
        },
        {
          id: 'test_calcium',
          action: 'flame_test',
          chemical: 'Calcium Chloride',
          hint: 'Test Calcium Chloride. Brick-red/orange-red flame — Ca²⁺ (622 nm).'
        },
        {
          id: 'test_barium',
          action: 'flame_test',
          chemical: 'Barium Chloride',
          hint: 'Test Barium Chloride. Pale apple-green flame — Ba²⁺ (524 nm).'
        },
        {
          id: 'test_copper',
          action: 'flame_test',
          chemical: 'Copper(II) Chloride',
          hint: 'Test Copper(II) Chloride. Bright blue-green/emerald flame — Cu²⁺ (515 nm). Most vivid green in flame tests.'
        },
        {
          id: 'test_strontium',
          action: 'flame_test',
          chemical: 'Strontium Chloride',
          hint: 'Test Strontium Chloride. Bright scarlet-crimson flame — Sr²⁺ (674 nm). Used in red fireworks.'
        }
      ],
      result: {
        color: 'rgba(251, 191, 36, 0.8)',
        equation: 'M^n+ + thermal energy → M^n+* (excited state) → M^n+ + hν (visible photon)',
        observations: [
          'Na⁺: intense golden-yellow (589 nm) — even trace amounts dominate.',
          'K⁺: lilac/violet (766 nm) — needs cobalt glass to filter Na contamination.',
          'Li⁺: bright crimson-red (670 nm).',
          'Ca²⁺: brick-red/orange-red (622 nm).',
          'Ba²⁺: pale apple-green (524 nm).',
          'Cu²⁺: bright blue-green/emerald (515 nm).',
          'Sr²⁺: bright scarlet-crimson (674 nm).'
        ]
      }
    },
 
    // ═══════════════════════════════════════════════════════
    // ACID-BASE / BUFFER
    // ═══════════════════════════════════════════════════════
    {
      id: 'buffer_demonstration',
      name: 'Buffer Solution Demonstration',
      type: 'acid_base',
      theory:
        'A buffer resists pH change. An acetate buffer (CH₃COOH / CH₃COONa) is compared to plain water when small amounts of acid or base are added.',
      initialChemicals: [],
      steps: [
        {
          id: 'prepare_buffer',
          action: 'mix',
          target: 'flask_a',
          chemicals: ['Acetic Acid', 'Sodium Acetate Solution'],
          hint: 'Prepare buffer: mix equal volumes of 0.1M Acetic Acid and 0.1M Sodium Acetate Solution. pH ≈ 4.7 (pKa of acetic acid).'
        },
        {
          id: 'prepare_water',
          action: 'pour',
          target: 'flask_b',
          chemical: 'Distilled Water',
          volume: 50,
          hint: 'Add 50 mL of Distilled Water to flask B as control (pH = 7).'
        },
        {
          id: 'add_indicator_both',
          action: 'drop',
          chemical: 'Universal Indicator',
          hint: 'Add Universal Indicator to both flasks. Buffer → yellow-orange (pH ≈ 4.7); water → green (pH = 7).'
        },
        {
          id: 'add_acid_both',
          action: 'drop',
          chemical: 'Hydrochloric Acid Solution',
          hint: 'Add 5 drops of Hydrochloric Acid Solution to each. Buffer: barely changes colour. Water: turns red (pH drops sharply).'
        },
        {
          id: 'add_base_both',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Repeat with Sodium Hydroxide Solution. Buffer: colour barely changes. Plain water: turns violet/purple (pH rises sharply).'
        }
      ],
      result: {
        color: 'rgba(255, 200, 100, 0.4)',
        equation: 'CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O  (base neutralised by weak acid)\nCH₃COO⁻ + H⁺ → CH₃COOH         (acid neutralised by conjugate base)',
        observations: [
          'Buffer solution: pH barely changes on adding acid or base.',
          'Plain water: pH changes dramatically with each addition.',
          'Demonstrates the Henderson-Hasselbalch buffer mechanism.'
        ]
      }
    },
 
    // ═══════════════════════════════════════════════════════
    // ORGANIC REACTIONS
    // ═══════════════════════════════════════════════════════
    {
      id: 'fehling_test',
      name: "Fehling's Test for Reducing Sugars",
      type: 'redox',
      theory:
        "Fehling's reagent contains Cu²⁺ in alkaline tartrate solution. Reducing sugars reduce Cu²⁺ to Cu⁺ (brick-red Cu₂O precipitate). Non-reducing sugars (e.g. sucrose) give no reaction.",
      initialChemicals: [],
      steps: [
        {
          id: 'prepare_fehlings',
          action: 'mix',
          target: 'tube',
          chemicals: ["Fehling's Solution A", "Fehling's Solution B"],
          hint: "Mix equal volumes of Fehling's Solution A (deep blue CuSO₄) and Fehling's Solution B (colourless tartrate/NaOH). A deep blue solution forms. Use immediately."
        },
        {
          id: 'add_glucose',
          action: 'drop',
          chemical: 'Glucose Solution',
          hint: "Add 1 mL of Glucose Solution to the blue Fehling's mixture."
        },
        {
          id: 'heat',
          action: 'heat',
          target: 'tube',
          duration: 120,
          hint: 'Heat in a boiling water bath for 2 minutes. The blue colour fades through green → yellow → orange → brick-red Cu₂O precipitate.'
        }
      ],
      result: {
        color: 'rgba(193, 68, 14, 0.70)',
        precipitate: true,
        equation: 'RCHO + 2Cu²⁺ + 5OH⁻ → RCOO⁻ + Cu₂O↓ + 3H₂O\n(Cu²⁺ deep blue → Cu₂O brick-red)',
        observations: [
          "Deep blue Fehling's → green → yellow → brick-red precipitate.",
          'Brick-red Cu₂O is the positive result for aldehyde/reducing sugar.',
          'Sucrose (non-reducing) gives no colour change — stays blue.'
        ]
      }
    },
    {
      id: 'tollens_test',
      name: "Tollens' Test: Silver Mirror",
      type: 'redox',
      theory:
        "Tollens' reagent ([Ag(NH₃)₂]⁺) is reduced by aldehydes to Ag metal, depositing a bright silver mirror on the test tube wall. Ketones do not react.",
      initialChemicals: [],
      steps: [
        {
          id: 'prepare_tollens',
          action: 'mix',
          target: 'tube',
          chemicals: ['Silver Nitrate Solution', 'Ammonia Solution'],
          hint: "Add Silver Nitrate Solution to a CLEAN tube. Add Ammonia Solution dropwise — a brown Ag₂O precipitate forms then redissolves to give clear [Ag(NH₃)₂]⁺ (Tollens' reagent). Use immediately; do not store (explosion risk when dry)."
        },
        {
          id: 'add_aldehyde',
          action: 'drop',
          chemical: 'Glucose Solution',
          hint: "Add a few drops of Glucose Solution (acts as aldehyde source) to the fresh Tollens' reagent."
        },
        {
          id: 'warm',
          action: 'heat',
          target: 'tube',
          duration: 180,
          hint: 'Place in a warm water bath at 50–60°C. Do NOT boil. A bright silver mirror deposits on the inner wall within 3–5 minutes.'
        }
      ],
      result: {
        color: 'rgba(200, 200, 200, 0.6)',
        equation: 'RCHO + 2[Ag(NH₃)₂]⁺ + 2OH⁻ → RCOO⁻ + 2Ag(s)↓ + 4NH₃ + H₂O',
        observations: [
          'Bright silver mirror forms on inner tube walls — Ag⁺ reduced to Ag metal.',
          'Positive for aldehydes and reducing sugars.',
          'Ketones do not react with Tollens\' reagent (cannot be oxidised easily).'
        ]
      }
    },
    {
      id: 'benedict_test',
      name: "Benedict's Test for Reducing Sugars",
      type: 'redox',
      theory:
        "Benedict's reagent (alkaline Cu-citrate) is reduced by reducing sugars. The colour change (blue → brick-red) gives a semi-quantitative estimate of sugar concentration.",
      initialChemicals: [],
      steps: [
        {
          id: 'add_benedicts',
          action: 'pour',
          target: 'tube',
          chemical: "Benedict's Reagent",
          volume: 5,
          hint: "Add 5 mL of deep blue Benedict's Reagent to the test tube."
        },
        {
          id: 'add_glucose',
          action: 'drop',
          chemical: 'Glucose Solution',
          hint: 'Add 8 drops of Glucose Solution to the blue reagent.'
        },
        {
          id: 'heat',
          action: 'heat',
          target: 'tube',
          duration: 120,
          hint: 'Heat in a boiling water bath for 2 minutes. Colour change: blue → green (trace) → yellow (low) → orange → brick-red (high concentration).'
        }
      ],
      result: {
        color: 'rgba(193, 68, 14, 0.65)',
        precipitate: true,
        equation: 'Reducing sugar + 2Cu²⁺ (blue) →(heat) Cu₂O↓ (brick-red) + oxidised sugar',
        observations: [
          'Blue → green → yellow/orange → brick-red depending on glucose concentration.',
          'Brick-red precipitate = positive for reducing sugar.',
          'Sucrose (non-reducing): no colour change — stays blue.'
        ]
      }
    },
    {
      id: 'iodoform_test',
      name: 'Iodoform Test for Methyl Ketones',
      type: 'organic_qualitative',
      theory:
        'Methyl ketones (CH₃CO–) and alcohols oxidisable to them give a pale yellow CHI₃ (iodoform) precipitate with I₂/NaOH — has a distinctive antiseptic odour.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_sample',
          action: 'pour',
          target: 'tube',
          chemical: 'Acetone',
          volume: 1,
          hint: 'Add 1 mL of Acetone to the test tube.'
        },
        {
          id: 'add_naoh',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Hydroxide Solution',
          volume: 3,
          hint: 'Add 3 mL of Sodium Hydroxide Solution.'
        },
        {
          id: 'add_iodine',
          action: 'drop',
          chemical: "Iodine Solution (Lugol's)",
          hint: "Add Iodine Solution (Lugol's) dropwise until the solution remains pale yellow. A pale yellow CHI₃ precipitate with a distinctive antiseptic smell confirms a methyl ketone."
        }
      ],
      result: {
        color: 'rgba(245, 235, 180, 0.70)',
        precipitate: true,
        equation: 'CH₃COCH₃ + 3I₂ + 4NaOH → CHI₃↓ + CH₃COONa + 3NaI + 3H₂O',
        observations: [
          'Pale yellow iodoform (CHI₃) precipitate forms.',
          'Distinctive sweet antiseptic smell of iodoform confirms positive result.',
          'Positive: acetone, ethanol, acetaldehyde, methyl ketones.',
          'Negative: benzaldehyde, diethyl ketone, methanol.'
        ]
      }
    },
    {
      id: 'biuret_test',
      name: 'Biuret Test for Proteins',
      type: 'biochemical',
      theory:
        'Cu²⁺ in alkaline solution forms a violet-purple complex with peptide bonds (–CO–NH–). The intensity indicates protein concentration.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_protein',
          action: 'pour',
          target: 'tube',
          chemical: 'Protein Solution',
          volume: 2,
          hint: 'Add 2 mL of Protein Solution (dilute egg white albumin — slightly cloudy/opalescent) to the test tube.'
        },
        {
          id: 'add_naoh',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Hydroxide Solution',
          volume: 2,
          hint: 'Add 2 mL of Sodium Hydroxide Solution. Mix gently.'
        },
        {
          id: 'add_cuso4',
          action: 'drop',
          chemical: 'Copper Sulfate Solution',
          hint: 'Add 3–4 drops of Copper Sulfate Solution. A violet-purple colour confirms the presence of peptide bonds (protein/polypeptide).'
        }
      ],
      result: {
        color: 'rgba(126, 58, 183, 0.55)',
        equation: 'Cu²⁺ + peptide bonds (–CO–NH–) → violet [Cu-peptide] complex  (alkaline conditions)',
        observations: [
          'Blue CuSO₄ turns violet-purple in protein presence.',
          'Deeper violet = higher protein concentration.',
          'Amino acids → blue; dipeptides → pink; polypeptides/proteins → violet.'
        ]
      }
    },
    {
      id: 'iodine_starch_test',
      name: 'Iodine-Starch Test',
      type: 'biochemical',
      theory:
        'I₃⁻ ions form a charge-transfer complex inside the amylose helix of starch, producing an intense deep blue-black colour. Reversible on heating.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_starch',
          action: 'pour',
          target: 'tube',
          chemical: 'Starch Solution (Indicator)',
          volume: 5,
          hint: 'Add 5 mL of Starch Solution (Indicator) — appears clear to slightly opalescent.'
        },
        {
          id: 'add_iodine',
          action: 'drop',
          chemical: "Iodine Solution (Lugol's)",
          hint: "Add a few drops of Iodine Solution (Lugol's). An immediate intense deep blue-black colour forms."
        },
        {
          id: 'heat',
          action: 'heat',
          target: 'tube',
          hint: 'Heat the tube — blue-black disappears (amylose helix uncoils, I₃⁻ released). Cool again — blue-black returns.'
        }
      ],
      result: {
        color: 'rgba(10, 5, 30, 0.88)',
        equation: 'I₃⁻ + amylose helix → [I₃⁻·amylose] complex  (deep blue-black)\n[I₃⁻·amylose] →(heat) I₃⁻ + amylose  (colourless, reversible)',
        observations: [
          'Immediate intense deep blue-black colour.',
          'Colour disappears on heating — complex breaks apart.',
          'Returns on cooling — fully reversible.',
          'Used as starch AND iodine indicator in titrations.'
        ]
      }
    },
    {
      id: 'saponification',
      name: 'Saponification: Soap Making',
      type: 'organic_synthesis',
      theory:
        'NaOH hydrolyses triglyceride ester bonds to produce glycerol and sodium carboxylate salts (soap). Salting out with NaCl precipitates the soap.',
      initialChemicals: [],
      steps: [
        {
          id: 'mix_oil_naoh',
          action: 'mix',
          target: 'beaker',
          chemicals: ['Vegetable Oil', 'Sodium Hydroxide Solution'],
          hint: 'Mix 10 mL of Vegetable Oil with 20 mL of Sodium Hydroxide Solution in a beaker. The mixture appears cloudy/milky.'
        },
        {
          id: 'heat_stir',
          action: 'heat_stir',
          target: 'beaker',
          duration: 600,
          hint: 'Heat and stir continuously for 10 minutes. The mixture thickens and becomes pasty as soap forms.'
        },
        {
          id: 'salt_out',
          action: 'pour',
          target: 'beaker',
          chemical: 'Sodium Chloride Solution',
          hint: 'Add saturated Sodium Chloride Solution. The soap precipitates as a white/cream solid (salting out — NaCl reduces soap solubility).'
        },
        {
          id: 'test_lather',
          action: 'test_lather',
          hint: 'Collect the white soap solid, rinse with cold water, and dissolve a small piece in warm water. Test for lather by shaking.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.85)',
        equation: 'CH₂(OOCR)–CH(OOCR)–CH₂(OOCR) + 3NaOH → 3 RCOONa (soap) + C₃H₅(OH)₃ (glycerol)',
        observations: [
          'Mixture thickens and becomes pasty.',
          'White soap precipitates on adding NaCl.',
          'Soap produces rich lather with warm water.',
          'Aqueous layer contains glycerol and excess NaCl.'
        ]
      }
    },
    {
      id: 'ester_synthesis',
      name: 'Ester Synthesis: Ethyl Acetate',
      type: 'organic_synthesis',
      theory:
        'Fischer esterification: carboxylic acid + alcohol ⇌ ester + water, catalysed by H₂SO₄. Equilibrium limits yield to ~65%.',
      initialChemicals: [],
      steps: [
        {
          id: 'mix_reagents',
          action: 'mix',
          target: 'flask',
          chemicals: ['Ethanol', 'Acetic Acid'],
          hint: 'Mix 10 mL of Ethanol and 10 mL of Acetic Acid in a round-bottom flask.'
        },
        {
          id: 'add_catalyst',
          action: 'drop',
          chemical: 'Sulfuric Acid',
          hint: 'Add 2–3 drops of concentrated Sulfuric Acid as catalyst. Mix carefully — exothermic.'
        },
        {
          id: 'heat_reflux',
          action: 'heat',
          target: 'flask',
          duration: 300,
          hint: 'Heat under reflux for 5 minutes to reach equilibrium.'
        },
        {
          id: 'pour_water',
          action: 'pour',
          target: 'separating_funnel',
          chemical: 'Distilled Water',
          hint: 'Pour into Distilled Water in a separating funnel. The ester (ethyl acetate) separates as the upper layer — sweet, fruity nail polish remover smell confirms it.'
        }
      ],
      result: {
        color: 'rgba(248, 250, 252, 0.4)',
        equation: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O   [H₂SO₄ catalyst]',
        observations: [
          'Sweet fruity (nail polish remover) smell confirms ethyl acetate.',
          'Upper organic layer + lower aqueous layer in separating funnel.',
          'Reversible reaction — equilibrium limits yield to ~65%.'
        ]
      }
    },
 
    // ═══════════════════════════════════════════════════════
    // ELECTROCHEMISTRY
    // ═══════════════════════════════════════════════════════
    {
      id: 'electrolysis_water',
      name: 'Electrolysis of Water',
      type: 'electrolysis',
      theory:
        'Water is decomposed into H₂ (cathode) and O₂ (anode) by electric current. Dilute H₂SO₄ is added as electrolyte to increase conductivity.',
      initialChemicals: [],
      steps: [
        {
          id: 'prepare_electrolyte',
          action: 'mix',
          target: 'hoffmann_apparatus',
          chemicals: ['Distilled Water', 'Dilute Sulfuric Acid'],
          hint: 'Fill Hoffmann apparatus with dilute H₂SO₄ / Distilled Water mixture as the electrolyte.'
        },
        {
          id: 'apply_current',
          action: 'electrolysis',
          voltage: 12,
          hint: 'Apply 12V DC. Gas bubbles form at both electrodes immediately.'
        },
        {
          id: 'collect_gases',
          action: 'collect_gas',
          hint: 'Collect gases: cathode (–): H₂ at twice the volume. Anode (+): O₂ at half the volume. Ratio confirms H₂O formula.'
        },
        {
          id: 'test_gases',
          action: 'test_both',
          hint: 'Test cathode gas: burning splint → squeaky pop (H₂). Test anode gas: glowing splint → relights (O₂).'
        }
      ],
      result: {
        color: 'rgba(220, 240, 255, 0.2)',
        equation: 'Cathode: 2H₂O + 2e⁻ → H₂↑ + 2OH⁻\nAnode:   2H₂O → O₂↑ + 4H⁺ + 4e⁻\nOverall: 2H₂O(l) → 2H₂(g) + O₂(g)',
        observations: [
          'H₂ collects at cathode at twice the rate of O₂.',
          'Volume ratio H₂:O₂ = 2:1 — confirms H₂O formula.',
          'Burning splint confirms H₂; glowing splint confirms O₂.'
        ]
      }
    },
    {
      id: 'electrolysis_copper_sulfate',
      name: 'Electrolysis of CuSO₄ (Cu electrodes)',
      type: 'electrolysis',
      theory:
        'Cu dissolves from the anode and deposits on the cathode. Solution concentration stays constant — the basis of copper electrorefining.',
      initialChemicals: [],
      steps: [
        {
          id: 'setup',
          action: 'setup_electrolysis',
          chemical: 'Copper Sulfate Solution',
          electrode_material: 'Copper',
          hint: 'Set up electrolysis cell with Copper Sulfate Solution and two Copper electrodes.'
        },
        {
          id: 'weigh_electrodes',
          action: 'weigh',
          hint: 'Weigh both copper electrodes precisely before starting.'
        },
        {
          id: 'apply_current',
          action: 'electrolysis',
          voltage: 6,
          duration: 1800,
          hint: 'Apply 6V for 30 minutes. The cathode gradually develops a thick pink copper coating.'
        },
        {
          id: 'reweigh',
          action: 'weigh',
          hint: 'Reweigh both electrodes. Cathode mass increases; anode mass decreases by the same amount. Solution stays blue (concentration unchanged).'
        }
      ],
      result: {
        color: 'rgba(59, 130, 246, 0.45)',
        equation: 'Cathode: Cu²⁺ + 2e⁻ → Cu(s)  (deposit)\nAnode:   Cu(s) → Cu²⁺ + 2e⁻  (dissolve)\nNet: Cu transfers from anode to cathode',
        observations: [
          'Pink copper deposits on cathode — mass increases.',
          'Anode dissolves — mass decreases by equal amount.',
          'Blue colour of CuSO₄ stays constant — Cu²⁺ concentration unchanged.',
          'Principle of copper electrorefining.'
        ]
      }
    },
    // ─── TITRATIONS ────────────────────────────────────────────────
    {
      id: 'oxalate_permanganate_titration',
      name: 'Permanganate Titration: KMnO₄ vs Oxalic Acid',
      type: 'titration',
      theory:
        'Oxalic acid (H₂C₂O₄) reduces KMnO₄ in acidic solution. The reaction requires heating to ~60°C to proceed at a reasonable rate. Initially slow (autocatalytic — Mn²⁺ produced catalyses the reaction).',
      initialChemicals: [],
      steps: [
        {
          id: 'fill_burette',
          action: 'pour',
          target: 'burette',
          chemical: 'Potassium Permanganate Solution',
          volume: 50,
          hint: 'Fill the burette with standardised 0.02M Potassium Permanganate Solution.'
        },
        {
          id: 'add_oxalate',
          action: 'pipette',
          target: 'flask',
          chemical: 'Oxalic Acid Solution',
          volume: 25,
          hint: 'Pipette 25.00 mL of 0.1M Oxalic Acid Solution into the conical flask.'
        },
        {
          id: 'acidify',
          action: 'pour',
          target: 'flask',
          chemical: 'Dilute Sulfuric Acid',
          volume: 10,
          hint: 'Add 10 mL of Dilute Sulfuric Acid. Acidic conditions are essential.'
        },
        {
          id: 'heat',
          action: 'heat',
          target: 'flask',
          duration: 60,
          hint: 'Heat to 60–70°C. Do NOT boil — oxalic acid decomposes above 90°C.'
        },
        {
          id: 'titrate',
          action: 'burette',
          chemical: 'Potassium Permanganate Solution',
          until: 'color_change',
          hint: 'Add KMnO₄. First drops decolorize slowly (induction period). As Mn²⁺ builds up (autocatalysis), each drop decolorizes faster. Endpoint: first faint permanent pink.'
        }
      ],
      result: {
        color: 'rgba(255, 150, 200, 0.3)',
        equation: '2MnO₄⁻ + 5H₂C₂O₄ + 6H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O',
        observations: [
          'First few drops of KMnO₄ decolorize very slowly — induction period (no Mn²⁺ catalyst yet).',
          'As Mn²⁺ accumulates, decolorization becomes progressively faster (autocatalysis).',
          'Endpoint: first faint permanent pink that persists 30 s. Temperature must be maintained at 60°C.'
        ],
        formula: 'n(KMnO₄) × 5/2 = n(H₂C₂O₄)'
      }
    },
    {
      id: 'back_titration_caco3',
      name: 'Back Titration: CaCO₃ Purity',
      type: 'titration',
      theory:
        'An excess of HCl is added to dissolve the CaCO₃ sample. The unreacted HCl is then back-titrated with NaOH. The difference gives the amount of HCl consumed by the carbonate.',
      initialChemicals: [],
      steps: [
        {
          id: 'weigh_sample',
          action: 'weigh',
          chemical: 'Calcium Carbonate',
          hint: 'Accurately weigh ~0.25 g of the CaCO₃ sample (or limestone) into a conical flask.'
        },
        {
          id: 'add_excess_hcl',
          action: 'pipette',
          target: 'flask',
          chemical: 'Hydrochloric Acid Solution',
          volume: 50,
          hint: 'Add excess 0.1M Hydrochloric Acid Solution (50 mL). The CaCO₃ dissolves with CO₂ effervescence.'
        },
        {
          id: 'boil_off_co2',
          action: 'heat',
          target: 'flask',
          duration: 120,
          hint: 'Gently heat to expel all dissolved CO₂ (prevents interference in the back-titration). Cool to room temperature.'
        },
        {
          id: 'add_indicator',
          action: 'drop',
          chemical: 'Phenolphthalein',
          hint: 'Add 2–3 drops of Phenolphthalein indicator.'
        },
        {
          id: 'back_titrate',
          action: 'burette',
          chemical: 'Sodium Hydroxide Solution',
          until: 'color_change',
          hint: 'Back-titrate the excess HCl with 0.1M Sodium Hydroxide Solution. Endpoint: first persistent pale pink. Record V(NaOH).'
        }
      ],
      result: {
        color: 'rgba(255, 105, 180, 0.35)',
        equation: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\nExcess HCl + NaOH → NaCl + H₂O',
        observations: [
          'Vigorous CO₂ effervescence when HCl is added to CaCO₃.',
          'Solution clears completely after heating (CO₂ expelled).',
          'Back-titration endpoint: pale pink (phenolphthalein).',
          'Purity % = [n(HCl)initial - n(NaOH)] × MW(CaCO₃)/2 × mass_sample × 100'
        ],
        formula: 'n(CaCO₃) = [c(HCl)×V(HCl) - c(NaOH)×V(NaOH)] / 2'
      }
    },
  
    // ─── ION DETECTION ─────────────────────────────────────────────
    {
      id: 'ammonium_ion_detection',
      name: 'Ammonium Ion Detection (NaOH Test)',
      type: 'ion_detection',
      theory:
        'Ammonium salts react with warm NaOH to liberate ammonia gas, detected by its smell, alkaline effect on litmus, and white smoke with HCl.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_sample',
          action: 'pour',
          target: 'tube',
          chemical: 'Ammonium Chloride Solution',
          volume: 5,
          hint: 'Add 5 mL of Ammonium Chloride Solution (or any ammonium salt solution) to the test tube.'
        },
        {
          id: 'add_naoh',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Hydroxide Solution',
          volume: 5,
          hint: 'Add Sodium Hydroxide Solution and mix.'
        },
        {
          id: 'warm',
          action: 'heat',
          target: 'tube',
          duration: 60,
          hint: 'Warm the tube gently. A pungent smell is detected.'
        },
        {
          id: 'test_litmus',
          action: 'damp_litmus',
          hint: 'Hold damp red litmus paper at the mouth of the tube — it turns blue, confirming NH₃ gas.'
        },
        {
          id: 'test_hcl',
          action: 'hcl_fumes',
          hint: 'Hold a glass rod dipped in Hydrochloric Acid near the mouth — dense white NH₄Cl smoke confirms ammonium ion.'
        }
      ],
      result: {
        color: 'rgba(220, 252, 231, 0.4)',
        equation: 'NH₄⁺ + OH⁻ →(heat) NH₃↑ + H₂O\nNH₃ + HCl → NH₄Cl (white smoke)',
        observations: [
          'Pungent ammonia smell on warming.',
          'Damp red litmus turns blue (alkaline gas).',
          'White smoke with HCl fumes confirms NH₄⁺.'
        ]
      }
    },
    {
      id: 'nitrate_ring_test',
      name: 'Nitrate Ion Detection (Brown Ring Test)',
      type: 'ion_detection',
      theory:
        'In the brown ring test, iron(II) sulfate reduces nitrate to NO in acidic solution. The NO combines with excess FeSO₄ to form a brown [Fe(NO)]²⁺ complex at the interface of the two liquid layers.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_sample',
          action: 'pour',
          target: 'tube',
          chemical: 'Potassium Nitrate',
          volume: 5,
          hint: 'Dissolve a small amount of Potassium Nitrate in 5 mL water in the test tube (or add 5 mL of the nitrate solution).'
        },
        {
          id: 'add_feso4',
          action: 'pour',
          target: 'tube',
          chemical: 'Iron(II) Sulfate Solution',
          volume: 5,
          hint: 'Add 5 mL of freshly prepared Iron(II) Sulfate Solution to the test tube. Mix well.'
        },
        {
          id: 'add_conc_h2so4',
          action: 'pour',
          target: 'tube',
          chemical: 'Sulfuric Acid',
          volume: 2,
          hint: 'Carefully pour 2 mL of concentrated Sulfuric Acid down the inside of the inclined tube so it sinks below the aqueous layer. Do NOT mix — two layers must form.'
        },
        {
          id: 'observe_ring',
          action: 'observe',
          hint: 'Observe the interface between the two layers. A dark brown ring forms at the boundary — confirming nitrate ions.'
        }
      ],
      result: {
        color: 'rgba(101, 50, 0, 0.7)',
        equation: 'NO₃⁻ + 3Fe²⁺ + 4H⁺ → NO + 3Fe³⁺ + 2H₂O\n[Fe(H₂O)₅(NO)]²⁺ = brown ring complex',
        observations: [
          'A dark brown ring forms at the interface of the aqueous and acid layers.',
          'The ring is the pentaaquanitrosyliron(II) complex [Fe(H₂O)₅NO]²⁺.',
          'MUST use conc. H₂SO₄ as the acid — HNO₃ and HCl are not suitable.'
        ]
      }
    },
    {
      id: 'calcium_ion_detection',
      name: 'Calcium Ion Detection (Flame + Oxalate)',
      type: 'ion_detection',
      theory:
        'Ca²⁺ can be confirmed by (a) brick-red/orange-red flame test and (b) formation of white insoluble calcium oxalate precipitate with ammonium oxalate.',
      initialChemicals: [],
      steps: [
        {
          id: 'flame_test',
          action: 'flame_test',
          chemical: 'Calcium Chloride',
          hint: 'Perform a flame test with Calcium Chloride — a brick-red/orange-red flame confirms Ca²⁺.'
        },
        {
          id: 'add_ca_solution',
          action: 'pour',
          target: 'tube',
          chemical: 'Calcium Chloride Solution',
          volume: 5,
          hint: 'Add 5 mL of Calcium Chloride Solution to a test tube.'
        },
        {
          id: 'add_oxalate',
          action: 'drop',
          chemical: 'Oxalic Acid Solution',
          hint: 'Add Oxalic Acid Solution (or ammonium oxalate solution) dropwise. A white CaC₂O₄ precipitate forms.'
        },
        {
          id: 'test_solubility',
          action: 'drop',
          chemical: 'Hydrochloric Acid Solution',
          hint: 'Add Hydrochloric Acid Solution — the precipitate dissolves, distinguishing CaC₂O₄ from BaSO₄ (which is acid-stable).'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.85)',
        precipitate: true,
        equation: 'Ca²⁺ + C₂O₄²⁻ → CaC₂O₄↓ (white, soluble in dilute HCl)\nFlame test: Ca²⁺ → brick-red (622 nm)',
        observations: [
          'Brick-red/orange-red flame confirms Ca²⁺.',
          'White precipitate with oxalate confirms Ca²⁺.',
          'Precipitate dissolves in dilute HCl — distinguishes from sulfate precipitates.'
        ]
      }
    },
    {
      id: 'magnesium_ion_detection',
      name: 'Magnesium Ion Detection (NaOH Precipitate)',
      type: 'ion_detection',
      theory:
        'Mg²⁺ forms a white gelatinous Mg(OH)₂ precipitate with NaOH. Unlike Zn(OH)₂ and Al(OH)₃, Mg(OH)₂ does NOT dissolve in excess NaOH — this is a key distinguishing test.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_mgcl2',
          action: 'pour',
          target: 'tube',
          chemical: 'Magnesium Chloride Solution',
          volume: 5,
          hint: 'Add 5 mL of Magnesium Chloride Solution (or MgSO₄ solution) to the test tube.'
        },
        {
          id: 'add_naoh_drop',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Add Sodium Hydroxide Solution dropwise. A white gelatinous Mg(OH)₂ precipitate forms.'
        },
        {
          id: 'add_naoh_excess',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Hydroxide Solution',
          volume: 10,
          hint: 'Add excess NaOH. The precipitate does NOT dissolve (unlike Zn(OH)₂ or Al(OH)₃ which dissolve in excess NaOH).'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.85)',
        precipitate: true,
        equation: 'Mg²⁺ + 2OH⁻ → Mg(OH)₂↓ (white, gelatinous)\nDoes NOT dissolve in excess NaOH',
        observations: [
          'White gelatinous precipitate forms with NaOH.',
          'Insoluble in excess NaOH — non-amphoteric (distinguishes Mg²⁺ from Zn²⁺ and Al³⁺).',
          'Mg²⁺ does not give a notable flame colour (colourless).'
        ]
      }
    },
  
    // ─── PRECIPITATION ──────────────────────────────────────────────
    {
      id: 'aluminum_hydroxide_amphoteric',
      name: 'Al(OH)₃: Amphoteric Behaviour',
      type: 'precipitation',
      theory:
        'Al(OH)₃ is amphoteric — it dissolves in both acid (forming Al³⁺) and excess alkali (forming aluminate [Al(OH)₄]⁻). This distinguishes Al³⁺ from Mg²⁺ (which gives insoluble Mg(OH)₂ in excess NaOH).',
      initialChemicals: [],
      steps: [
        {
          id: 'add_alum',
          action: 'pour',
          target: 'tube',
          chemical: 'Aluminum Sulfate Solution',
          volume: 10,
          hint: 'Add 10 mL of Aluminum Sulfate Solution to the test tube.'
        },
        {
          id: 'add_naoh_few',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Add NaOH dropwise. A white gelatinous Al(OH)₃ precipitate forms — appears like jelly.'
        },
        {
          id: 'add_naoh_excess',
          action: 'pour',
          target: 'tube',
          chemical: 'Sodium Hydroxide Solution',
          volume: 15,
          hint: 'Add excess NaOH. The precipitate completely dissolves to give a clear aluminate [Al(OH)₄]⁻ solution.'
        },
        {
          id: 'add_acid',
          action: 'drop',
          chemical: 'Hydrochloric Acid Solution',
          hint: 'Add HCl dropwise. Precipitate reforms (Al(OH)₃), then dissolves again in excess acid (Al³⁺). Confirms amphoteric character.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.08)',
        equation: 'Al³⁺ + 3OH⁻ → Al(OH)₃↓ (white gelatinous)\nAl(OH)₃ + OH⁻ → [Al(OH)₄]⁻ (tetrahydroxoaluminate, clear)\nAl(OH)₃ + 3H⁺ → Al³⁺ + 3H₂O',
        observations: [
          'White gelatinous Al(OH)₃ — dissolves in both excess NaOH and excess HCl.',
          'Excess NaOH: precipitate clears completely (aluminate ion forms).',
          'Key distinguishing test: Mg(OH)₂ does NOT dissolve in excess NaOH.'
        ]
      }
    },
    {
      id: 'manganese_hydroxide_oxidation',
      name: 'Mn(OH)₂ Precipitation and Air Oxidation',
      type: 'precipitation',
      theory:
        'Mn²⁺ forms a pale pink/flesh-colored Mn(OH)₂ precipitate with NaOH. This rapidly oxidises in air through a brown intermediate to dark brown MnO₂. Used in the Winkler dissolved oxygen method.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_mnso4',
          action: 'pour',
          target: 'tube',
          chemical: 'Manganese(II) Sulfate Solution',
          volume: 5,
          hint: 'Add 5 mL of very pale pink Manganese(II) Sulfate Solution.'
        },
        {
          id: 'add_naoh',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Add Sodium Hydroxide Solution. A pale pink/flesh-coloured Mn(OH)₂ precipitate forms.'
        },
        {
          id: 'expose_air',
          action: 'observe',
          hint: 'Leave the tube open and shake. The pale pink precipitate turns brown then dark brown/black as Mn(OH)₂ oxidises to MnO(OH) and MnO₂ in air.'
        }
      ],
      result: {
        color: 'rgba(50, 30, 10, 0.65)',
        precipitate: true,
        equation: 'Mn²⁺ + 2OH⁻ → Mn(OH)₂↓ (pale pink)\n2Mn(OH)₂ + O₂ → 2MnO(OH)↓ + H₂O (brown)\n4MnO(OH) + O₂ → 4MnO₂↓ (dark brown/black)',
        observations: [
          'Pale pink/flesh-coloured Mn(OH)₂ precipitate initially.',
          'Rapidly turns brown then dark brown/black on exposure to air.',
          'The rate of colour change indicates dissolved oxygen — basis of Winkler O₂ method.'
        ]
      }
    },
    {
      id: 'nickel_ammonia_complex',
      name: 'Ni²⁺ + Ammonia: Blue Complex',
      type: 'complex_formation',
      theory:
        'Nickel(II) ions form a blue hexaamminenickel(II) complex with excess ammonia, distinct from the paler green aquo complex. The colour change is less dramatic than the copper ammonia complex.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_niso4',
          action: 'pour',
          target: 'tube',
          chemical: 'Nickel(II) Sulfate Solution',
          volume: 5,
          hint: 'Add 5 mL of emerald-green Nickel(II) Sulfate Solution.'
        },
        {
          id: 'add_ammonia_drop',
          action: 'drop',
          chemical: 'Ammonia Solution',
          hint: 'Add Ammonia Solution dropwise. A pale green Ni(OH)₂ precipitate forms initially.'
        },
        {
          id: 'add_ammonia_excess',
          action: 'pour',
          target: 'tube',
          chemical: 'Ammonia Solution',
          volume: 10,
          hint: 'Add excess Ammonia Solution. The precipitate dissolves to give a blue [Ni(NH₃)₆]²⁺ solution — noticeably different from the green aquo complex.'
        }
      ],
      result: {
        color: 'rgba(30, 100, 200, 0.55)',
        equation: 'Ni²⁺ + 2NH₃ + 2H₂O → Ni(OH)₂↓ + 2NH₄⁺\nNi(OH)₂ + 6NH₃ → [Ni(NH₃)₆]²⁺ + 2OH⁻ (blue/blue-violet)',
        observations: [
          'Green NiSO₄ → pale green Ni(OH)₂ precipitate with dilute NH₃.',
          'Excess NH₃ dissolves precipitate → blue [Ni(NH₃)₆]²⁺ solution.',
          'Less dramatic than the Cu²⁺/NH₃ reaction but clearly distinguishable colour change.'
        ]
      }
    },
  
    // ─── REDOX ──────────────────────────────────────────────────────
    {
      id: 'magnesium_burning',
      name: 'Magnesium Combustion in Air',
      type: 'redox',
      theory:
        'Magnesium burns with an intense white flame in air, producing white MgO and a small amount of Mg₃N₂. The reaction is highly exothermic. The bright UV emission makes direct viewing dangerous.',
      initialChemicals: [],
      steps: [
        {
          id: 'prepare_mg',
          action: 'add_solid',
          target: 'crucible',
          chemical: 'Magnesium',
          mass: 0.5,
          hint: 'Hold a short piece of Magnesium ribbon with tongs. Do not look directly at the flame.'
        },
        {
          id: 'ignite',
          action: 'ignite',
          target: 'crucible',
          hint: 'Hold the Mg ribbon in a Bunsen flame until it ignites. Then hold over a watch glass. It burns with an intensely bright white flame.'
        },
        {
          id: 'observe_product',
          action: 'observe',
          hint: 'White MgO powder forms. Note: attempting to extinguish with CO₂ or water is ineffective — Mg burns in CO₂ (forming C + MgO) and water (forming MgO + H₂).'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.90)',
        equation: '2Mg(s) + O₂(g) → 2MgO(s)  (white, ΔH = −601 kJ/mol)\n3Mg(s) + N₂(g) → Mg₃N₂(s)  (minor product)',
        observations: [
          'Intensely bright white flame — dangerous UV emission, do not look directly.',
          'White MgO powder forms as the product.',
          'Burns in CO₂ and water — cannot be extinguished with them.',
          'Flame temperature ≈3100°C.'
        ]
      }
    },
    {
      id: 'iron_burning_oxygen',
      name: 'Iron Wool Burning in Oxygen',
      type: 'redox',
      theory:
        'Iron wool burns vigorously in pure oxygen producing Fe₃O₄ (magnetite) — a mixed oxide. It does not burn in air under normal conditions but ignites easily when the surface area is increased (wool form).',
      initialChemicals: [],
      steps: [
        {
          id: 'generate_o2',
          action: 'mix',
          target: 'flask',
          chemicals: ['Hydrogen Peroxide', 'Manganese Dioxide'],
          hint: 'Generate O₂ in a wide-mouthed flask by adding Manganese Dioxide to Hydrogen Peroxide. Allow O₂ to fill the flask.'
        },
        {
          id: 'ignite_iron',
          action: 'ignite',
          chemical: 'Iron',
          hint: 'Ignite a piece of iron wool in a Bunsen flame until glowing red. Quickly insert into the O₂-filled flask.'
        },
        {
          id: 'observe',
          action: 'observe',
          hint: 'The iron burns vigorously with bright orange sparks in pure O₂, producing a shower of black Fe₃O₄ particles.'
        }
      ],
      result: {
        color: 'rgba(255, 140, 0, 0.7)',
        equation: '3Fe(s) + 2O₂(g) → Fe₃O₄(s)  (black magnetite)',
        observations: [
          'Iron wool glows and burns vigorously with bright orange/yellow sparks.',
          'Black Fe₃O₄ (magnetite) particles form and fall to the bottom.',
          'Burns in pure O₂ but not in air — too slow in 21% O₂.',
          'The product is magnetic — can be tested with a magnet.'
        ]
      }
    },
    {
      id: 'sulfur_burning',
      name: 'Sulfur Combustion and SO₂ Test',
      type: 'redox',
      theory:
        'Sulfur burns in air with a blue flame to produce SO₂ gas, which has a pungent suffocating smell and decolorises acidified KMnO₄ solution.',
      initialChemicals: [],
      steps: [
        {
          id: 'ignite_sulfur',
          action: 'ignite',
          chemical: 'Sulfur',
          hint: 'Heat a spatula of Sulfur in a Bunsen flame. It melts first, then ignites with a pale blue flame.'
        },
        {
          id: 'test_so2',
          action: 'bubble_through',
          target: 'kmno4_tube',
          chemical: 'Potassium Permanganate Solution',
          hint: 'Hold the burning sulfur near the mouth of a tube containing acidified Potassium Permanganate Solution. The purple color decolorises to confirm SO₂.'
        }
      ],
      result: {
        color: 'rgba(220, 252, 231, 0.3)',
        equation: 'S(s) + O₂(g) → SO₂(g)  (pale blue flame)\n5SO₂ + 2MnO₄⁻ + 2H₂O → 5SO₄²⁻ + 2Mn²⁺ + 4H⁺',
        observations: [
          'Sulfur burns with a characteristic pale blue flame.',
          'Pungent suffocating smell of SO₂ (burning matches smell).',
          'Purple KMnO₄ decolorises to colourless — confirms SO₂ (reducing gas).'
        ]
      }
    },
    {
      id: 'chromate_dichromate_equilibrium',
      name: 'Chromate/Dichromate pH Equilibrium',
      type: 'acid_base',
      theory:
        'CrO₄²⁻ (yellow) and Cr₂O₇²⁻ (orange) exist in equilibrium. Adding acid converts yellow chromate to orange dichromate; adding base reverses it. A vivid colour demonstration of pH-controlled equilibrium.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_chromate',
          action: 'pour',
          target: 'beaker',
          chemical: 'Potassium Chromate',
          volume: 20,
          hint: 'Dissolve Potassium Chromate in 20 mL water. The solution is bright yellow (CrO₄²⁻, alkaline/neutral conditions).'
        },
        {
          id: 'add_acid',
          action: 'drop',
          chemical: 'Hydrochloric Acid Solution',
          hint: 'Add Hydrochloric Acid Solution dropwise. The yellow immediately turns orange — CrO₄²⁻ converts to Cr₂O₇²⁻ in acid.'
        },
        {
          id: 'add_base',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Now add Sodium Hydroxide Solution. The orange turns back to yellow — Cr₂O₇²⁻ reconverts to CrO₄²⁻ in base. Fully reversible.'
        }
      ],
      result: {
        color: 'rgba(249, 115, 22, 0.55)',
        equation: '2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O   (yellow ⇌ orange)',
        observations: [
          'Yellow CrO₄²⁻ → orange Cr₂O₇²⁻ on adding acid.',
          'Orange Cr₂O₇²⁻ → yellow CrO₄²⁻ on adding base.',
          'Completely reversible — excellent demonstration of acid-base equilibrium and chromium chemistry.'
        ]
      }
    },
    {
      id: 'disappearing_cross',
      name: 'Disappearing Cross (Na₂S₂O₃ + HCl)',
      type: 'kinetics',
      theory:
        'Sodium thiosulfate reacts with hydrochloric acid to produce a colloidal sulfur precipitate, which gradually makes the solution opaque. Used to study reaction rates — time is measured until a black cross under the flask disappears.',
      initialChemicals: [],
      steps: [
        {
          id: 'setup_cross',
          action: 'observe',
          hint: 'Place a conical flask on a piece of paper with a black cross drawn on it. The cross should be visible through the bottom of the flask.'
        },
        {
          id: 'add_thiosulfate',
          action: 'pour',
          target: 'flask',
          chemical: 'Sodium Thiosulfate Solution',
          volume: 50,
          hint: 'Add 50 mL of Sodium Thiosulfate Solution to the flask. The solution is clear.'
        },
        {
          id: 'add_acid_start_timer',
          action: 'pour',
          target: 'flask',
          chemical: 'Hydrochloric Acid Solution',
          volume: 5,
          hint: 'Add 5 mL of Hydrochloric Acid Solution and immediately start the timer. Swirl once to mix.'
        },
        {
          id: 'observe_until_opaque',
          action: 'observe',
          hint: 'Watch the cross through the flask. The solution gradually becomes milky/opaque. Stop the timer when the cross is no longer visible. Repeat at different temperatures to study kinetics.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 220, 0.7)',
        equation: 'Na₂S₂O₃ + 2HCl → 2NaCl + SO₂ + S↓ + H₂O\n(colloidal sulfur makes solution opaque)',
        observations: [
          'Solution gradually turns milky/opalescent as colloidal sulfur forms.',
          'Cross disappears after a reproducible time interval.',
          'Rate ∝ [Na₂S₂O₃] and [HCl] — both concentrations affect the disappearance time.',
          'Temperature increase significantly shortens the time (Arrhenius behaviour).'
        ]
      }
    },
    {
      id: 'lead_chromate_precipitation',
      name: 'Lead Chromate Precipitation (Yellow)',
      type: 'precipitation',
      theory:
        'Lead(II) ions react with chromate ions to form a bright canary-yellow insoluble precipitate. This is the confirmatory test for Pb²⁺ in the presence of chromate.',
      initialChemicals: [],
      steps: [
        {
          id: 'add_lead',
          action: 'pour',
          target: 'tube',
          chemical: 'Lead(II) Nitrate Solution',
          volume: 5,
          hint: 'Add 5 mL of Lead(II) Nitrate Solution to the test tube.'
        },
        {
          id: 'add_chromate',
          action: 'drop',
          chemical: 'Potassium Chromate',
          hint: 'Add a few drops of Potassium Chromate solution (yellow). A bright canary-yellow PbCrO₄ precipitate forms immediately.'
        },
        {
          id: 'test_naoh',
          action: 'drop',
          chemical: 'Sodium Hydroxide Solution',
          hint: 'Add NaOH — the yellow precipitate is insoluble in alkali (distinguishes from CrO₄²⁻ alone).'
        }
      ],
      result: {
        color: 'rgba(255, 215, 0, 0.80)',
        precipitate: true,
        equation: 'Pb²⁺ + CrO₄²⁻ → PbCrO₄↓ (canary yellow, Ksp = 1.8×10⁻¹⁴)',
        observations: [
          'Immediate bright canary-yellow precipitate of PbCrO₄.',
          'Insoluble in dilute NaOH and dilute HNO₃.',
          'Confirmatory test for Pb²⁺ in the presence of chromate indicator.'
        ]
      }
    },
  ]
} as const;

