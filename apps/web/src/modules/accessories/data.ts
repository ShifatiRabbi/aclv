import type { Equipment } from './types';

export const laboratoryEquipment: Equipment[] = [
  {
    id: 'beaker',
    title: 'Beaker',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Mixing, heating, and stirring liquids in school and research labs.',
    description: 'Low-form beaker with spout for easy pouring. Used for approximate volume measurements.',
    measurements: [
      { capacity_ml: 50, height_mm: 60, diameter_mm: 42, graduation_step_ml: 10, svg_scale_factor: 1.0 },
      { capacity_ml: 100, height_mm: 70, diameter_mm: 50, graduation_step_ml: 20, svg_scale_factor: 1.2 },
      { capacity_ml: 250, height_mm: 95, diameter_mm: 70, graduation_step_ml: 50, svg_scale_factor: 1.5 },
      { capacity_ml: 500, height_mm: 120, diameter_mm: 85, graduation_step_ml: 100, svg_scale_factor: 1.8 },
      { capacity_ml: 1000, height_mm: 145, diameter_mm: 105, graduation_step_ml: 100, svg_scale_factor: 2.2 }
    ]
  },
  {
    id: 'erlenmeyer',
    title: 'Erlenmeyer Flask',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Titration, boiling, and storage of liquids.',
    description: 'Conical flask with a flat bottom and cylindrical neck. Ideal for swirling liquids without spilling.',
    measurements: [
      { capacity_ml: 50, height_mm: 85, diameter_mm: 51, graduation_step_ml: 10, svg_scale_factor: 1.0, neck_diameter_mm: 22 },
      { capacity_ml: 100, height_mm: 105, diameter_mm: 64, graduation_step_ml: 20, svg_scale_factor: 1.2, neck_diameter_mm: 22 },
      { capacity_ml: 250, height_mm: 145, diameter_mm: 85, graduation_step_ml: 50, svg_scale_factor: 1.5, neck_diameter_mm: 34 },
      { capacity_ml: 500, height_mm: 180, diameter_mm: 105, graduation_step_ml: 100, svg_scale_factor: 1.8, neck_diameter_mm: 34 },
      { capacity_ml: 1000, height_mm: 220, diameter_mm: 131, graduation_step_ml: 100, svg_scale_factor: 2.2, neck_diameter_mm: 42 }
    ]
  },
  {
    id: 'separatory_funnel',
    title: 'Separatory Funnel',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Liquid-liquid extractions to separate components of a mixture.',
    description: 'Pear-shaped funnel with a stopcock at the bottom and a stoppered top, used to separate immiscible liquids of different densities.',
    measurements: [
      { capacity_ml: 125, height_mm: 250, diameter_mm: 70, graduation_step_ml: 0, svg_scale_factor: 1.5, neck_diameter_mm: 19 },
      { capacity_ml: 250, height_mm: 300, diameter_mm: 85, graduation_step_ml: 0, svg_scale_factor: 1.8, neck_diameter_mm: 24 },
      { capacity_ml: 500, height_mm: 350, diameter_mm: 105, graduation_step_ml: 0, svg_scale_factor: 2.1, neck_diameter_mm: 24 }
    ]
  },
  {
    id: 'condenser',
    title: 'Liebig Condenser',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Cooling and condensing vapors in distillation setups.',
    description: 'Consists of an inner glass tube through which vapors pass and an outer jacket through which cooling water flows.',
    measurements: [
      { capacity_ml: 200, height_mm: 300, diameter_mm: 40, graduation_step_ml: 0, svg_scale_factor: 1.5 },
      { capacity_ml: 300, height_mm: 400, diameter_mm: 40, graduation_step_ml: 0, svg_scale_factor: 1.8 },
      { capacity_ml: 400, height_mm: 500, diameter_mm: 40, graduation_step_ml: 0, svg_scale_factor: 2.0 }
    ]
  },
  {
    id: 'filtering_flask',
    title: 'Filtering Flask',
    category: 'Glassware',
    material: 'Heavy-Wall Borosilicate',
    lab_usage: 'Vacuum filtration of solutions.',
    description: 'Also known as a Buchner flask, it features a thick wall to withstand vacuum pressure and a side-arm for tubing.',
    measurements: [
      { capacity_ml: 100, height_mm: 105, diameter_mm: 64, graduation_step_ml: 25, svg_scale_factor: 1.2, neck_diameter_mm: 24 },
      { capacity_ml: 250, height_mm: 155, diameter_mm: 85, graduation_step_ml: 50, svg_scale_factor: 1.5, neck_diameter_mm: 35 },
      { capacity_ml: 500, height_mm: 185, diameter_mm: 105, graduation_step_ml: 100, svg_scale_factor: 1.8, neck_diameter_mm: 35 },
      { capacity_ml: 1000, height_mm: 230, diameter_mm: 135, graduation_step_ml: 200, svg_scale_factor: 2.2, neck_diameter_mm: 45 }
    ]
  },
  {
    id: 'measuring_cylinder',
    title: 'Measuring Cylinder',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Precise volume measurement of liquids.',
    description: 'Tall, narrow cylinder with a hexagonal base for stability. Features highly accurate graduation lines.',
    measurements: [
      { capacity_ml: 50, height_mm: 195, diameter_mm: 25, graduation_step_ml: 1, svg_scale_factor: 1.0 },
      { capacity_ml: 100, height_mm: 250, diameter_mm: 30, graduation_step_ml: 1, svg_scale_factor: 1.2 },
      { capacity_ml: 250, height_mm: 330, diameter_mm: 40, graduation_step_ml: 2, svg_scale_factor: 1.5 },
      { capacity_ml: 500, height_mm: 380, diameter_mm: 53, graduation_step_ml: 5, svg_scale_factor: 1.8 },
      { capacity_ml: 1000, height_mm: 460, diameter_mm: 67, graduation_step_ml: 10, svg_scale_factor: 2.2 }
    ]
  },
  {
    id: 'burette',
    title: 'Burette',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Quantitative chemical analysis and titrations.',
    description: 'Precision vertical glass tube with a stopcock at the bottom. The zero mark is at the top.',
    measurements: [
      { capacity_ml: 10, height_mm: 350, diameter_mm: 10, graduation_step_ml: 0.1, svg_scale_factor: 1.5 },
      { capacity_ml: 25, height_mm: 450, diameter_mm: 12, graduation_step_ml: 0.1, svg_scale_factor: 1.8 },
      { capacity_ml: 50, height_mm: 550, diameter_mm: 14, graduation_step_ml: 0.1, svg_scale_factor: 2.0 }
    ]
  },
  {
    id: 'volumetric_flask',
    title: 'Volumetric Flask',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Preparation of precise molar solutions.',
    description: 'Flat bottomed flask with a long neck and a single calibration mark. Calibrated at 20°C.',
    measurements: [
      { capacity_ml: 50, height_mm: 140, diameter_mm: 48, graduation_step_ml: 50, svg_scale_factor: 1.0, neck_diameter_mm: 13 },
      { capacity_ml: 100, height_mm: 170, diameter_mm: 60, graduation_step_ml: 100, svg_scale_factor: 1.2, neck_diameter_mm: 13 },
      { capacity_ml: 250, height_mm: 220, diameter_mm: 80, graduation_step_ml: 250, svg_scale_factor: 1.5, neck_diameter_mm: 16 },
      { capacity_ml: 500, height_mm: 260, diameter_mm: 100, graduation_step_ml: 500, svg_scale_factor: 1.8, neck_diameter_mm: 19 },
      { capacity_ml: 1000, height_mm: 300, diameter_mm: 125, graduation_step_ml: 1000, svg_scale_factor: 2.2, neck_diameter_mm: 24 }
    ]
  },
  {
    id: 'crucible',
    title: 'Crucible & Lid',
    category: 'Heating & Support',
    material: 'Porcelain / Alumina',
    lab_usage: 'High temperature heating of chemical compounds.',
    description: 'A small cup-shaped container used to heat substances to very high temperatures. Includes a loose-fitting lid.',
    measurements: [
      { capacity_ml: 15, height_mm: 32, diameter_mm: 35, graduation_step_ml: 0, svg_scale_factor: 1.0 },
      { capacity_ml: 30, height_mm: 40, diameter_mm: 45, graduation_step_ml: 0, svg_scale_factor: 1.2 },
      { capacity_ml: 50, height_mm: 50, diameter_mm: 53, graduation_step_ml: 0, svg_scale_factor: 1.4 }
    ]
  },
  {
    id: 'test_tube',
    title: 'Test Tube',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Qualitative chemical reactions and small-scale heating.',
    description: 'Finger-like length of glass tubing, open at the top and with a rounded U-shaped bottom.',
    measurements: [
      { capacity_ml: 10, height_mm: 75, diameter_mm: 12, graduation_step_ml: 2, svg_scale_factor: 0.8 },
      { capacity_ml: 20, height_mm: 150, diameter_mm: 16, graduation_step_ml: 5, svg_scale_factor: 1.0 },
      { capacity_ml: 30, height_mm: 150, diameter_mm: 18, graduation_step_ml: 10, svg_scale_factor: 1.2 },
      { capacity_ml: 50, height_mm: 200, diameter_mm: 25, graduation_step_ml: 10, svg_scale_factor: 1.5 }
    ]
  },
  {
    id: 'petri_dish',
    title: 'Petri Dish',
    category: 'Glassware',
    material: 'Borosilicate Glass 3.3',
    lab_usage: 'Cell culture and microbiological studies.',
    description: 'Shallow transparent lidded dish used to culture cells or small organisms.',
    measurements: [
      { capacity_ml: 60, height_mm: 15, diameter_mm: 60, graduation_step_ml: 0, svg_scale_factor: 1.0 },
      { capacity_ml: 90, height_mm: 15, diameter_mm: 90, graduation_step_ml: 0, svg_scale_factor: 1.2 },
      { capacity_ml: 100, height_mm: 20, diameter_mm: 100, graduation_step_ml: 0, svg_scale_factor: 1.3 },
      { capacity_ml: 150, height_mm: 25, diameter_mm: 150, graduation_step_ml: 0, svg_scale_factor: 1.5 }
    ]
  },
  {
    id: 'wash_bottle',
    title: 'Wash Bottle',
    category: 'Heating & Support',
    material: 'Low Density Polyethylene (LDPE)',
    lab_usage: 'Rinsing glassware and precision addition of liquids.',
    description: 'Squeeze bottle with a nozzle, used to rinse various pieces of laboratory glassware, such as test tubes and round bottom flasks.',
    measurements: [
      { capacity_ml: 250, height_mm: 150, diameter_mm: 60, graduation_step_ml: 50, svg_scale_factor: 1.2 },
      { capacity_ml: 500, height_mm: 180, diameter_mm: 75, graduation_step_ml: 100, svg_scale_factor: 1.5 },
      { capacity_ml: 1000, height_mm: 220, diameter_mm: 95, graduation_step_ml: 100, svg_scale_factor: 1.8 }
    ]
  }
];
