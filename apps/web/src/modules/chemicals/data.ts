
import { Equipment } from './types';

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
  }
];
