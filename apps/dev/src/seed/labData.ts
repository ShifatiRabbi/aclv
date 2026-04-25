export const chemicalsSeed = {
  chemicals: [
    {
      id: 'hcl_01m',
      name: 'Hydrochloric Acid',
      formula: 'HCl',
      state: 'liquid',
      color: 'rgba(255, 255, 255, 0.1)',
      molarity: 0.1,
      molecularWeight: 36.46,
      density: 1.05,
      cost: 10,
      hazards: ['corrosive', 'skin irritant', 'respiratory irritant']
    },
    {
      id: 'naoh_01m',
      name: 'Sodium Hydroxide',
      formula: 'NaOH',
      state: 'liquid',
      color: 'rgba(77, 166, 255, 0.2)',
      molarity: 0.1,
      molecularWeight: 40.0,
      density: 1.04,
      cost: 12,
      hazards: ['corrosive', 'severe skin burns', 'eye damage']
    },
    {
      id: 'agno3_solid',
      name: 'Silver Nitrate',
      formula: 'AgNO3',
      state: 'powder',
      color: '#FFFFFF',
      molecularWeight: 169.87,
      density: 4.35,
      solubility: 216,
      cost: 150,
      hazards: ['oxidizer', 'toxic']
    },
    {
      id: 'nacl_solid',
      name: 'Sodium Chloride',
      formula: 'NaCl',
      state: 'powder',
      color: '#F0F0F0',
      molecularWeight: 58.44,
      density: 2.16,
      solubility: 36,
      cost: 2,
      hazards: []
    },
    {
      id: 'phenolphthalein',
      name: 'Phenolphthalein',
      formula: 'C20H14O4',
      state: 'liquid',
      color: 'transparent',
      molecularWeight: 318.33,
      density: 1.3,
      cost: 25,
      hazards: []
    }
  ]
} as const

export const reactionsSeed = {
  experiments: [
    {
      id: 'acid_base_strong',
      name: 'Titration: HCl vs NaOH',
      type: 'titration',
      theory:
        'In this experiment, we determine the concentration of a Strong Acid (HCl) by titrating it with a Strong Base (NaOH) using Phenolphthalein as an indicator.',
      initialChemicals: [
        {
          name: 'Water',
          target: 'flask',
          volume: 0,
          color: 'rgba(255, 255, 255, 0.1)'
        }
      ],
      steps: [
        {
          id: 'fill_burette',
          action: 'pour',
          target: 'burette',
          chemical: '0.1M NaOH',
          volume: 50,
          hint: 'Ensure the stopcock is closed and fill the burette with 0.1M NaOH to exactly the 0.00mL mark.'
        },
        {
          id: 'add_acid',
          action: 'pipette',
          target: 'flask',
          chemical: '0.1M HCl',
          volume: 25,
          concentration: 0.1,
          hint: 'Use the pipette to transfer 25mL of 0.1M HCl to the conical flask.'
        },
        {
          id: 'add_indicator',
          action: 'drop',
          chemical: 'Phenolphthalein',
          hint: 'Add 2-3 drops of Phenolphthalein indicator. It remains colorless in acid.'
        },
        {
          id: 'titrate',
          action: 'burette',
          chemical: '0.1M NaOH',
          concentration: 0.1,
          until: 'color_change',
          hint: 'Slowly open the burette. Watch for the permanent pale pink endpoint at 25.00mL.'
        }
      ],
      result: {
        color: 'rgba(255, 105, 180, 0.4)',
        equation: 'HCl + NaOH → NaCl + H2O',
        observations: [
          'The solution remained colorless when the indicator was added to HCl.',
          'As NaOH was added, localized pink clouds appeared and disappeared.',
          'At the endpoint, the solution turned a persistent pale pink color.'
        ],
        formula: 'M1V1 = M2V2'
      }
    },
    {
      id: 'ion_detection_chloride',
      name: 'Chloride Ion Detection',
      type: 'ion_detection',
      theory:
        'The presence of Chloride ions (Cl-) is confirmed by adding Silver Nitrate (AgNO3), which forms a white precipitate of Silver Chloride (AgCl).',
      initialChemicals: [],
      steps: [
        {
          id: 'add_sample',
          action: 'pour',
          target: 'tube',
          chemical: 'NaCl Solution',
          volume: 10,
          hint: 'Pour approximately 10mL of the unknown sample (NaCl solution) into the test tube.'
        },
        {
          id: 'add_silver_nitrate',
          action: 'drop',
          chemical: '0.1M AgNO3',
          hint: 'Add a few drops of Silver Nitrate solution to the test tube.'
        }
      ],
      result: {
        color: 'rgba(255, 255, 255, 0.8)',
        precipitate: true,
        equation: 'AgNO3 + NaCl → AgCl↓ + NaNO3',
        observations: [
          'A thick, white curd-like precipitate forms immediately upon adding Silver Nitrate.',
          'The precipitate is Silver Chloride (AgCl).'
        ]
      }
    }
  ]
} as const

