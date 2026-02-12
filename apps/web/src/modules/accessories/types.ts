export interface Measurement {
  capacity_ml: number;
  height_mm: number;
  diameter_mm: number;
  graduation_step_ml: number;
  svg_scale_factor: number;
  neck_diameter_mm?: number;
}

export interface Equipment {
  id: string;
  title: string;
  category: 'Glassware' | 'Heating & Support';
  material: string;
  lab_usage: string;
  measurements: Measurement[];
  description: string;
}
