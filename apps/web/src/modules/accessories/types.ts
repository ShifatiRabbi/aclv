export interface Measurement {
  capacity_ml: number;
  height_mm: number;
  diameter_mm: number;
  graduation_step_ml: number;
  svg_scale_factor: number;
  neck_diameter_mm?: number;
}

// export interface Equipment {
//   id: string;
//   title: string;
//   category: 'Glassware' | 'Heating & Support';
//   material: string;
//   lab_usage: string;
//   measurements: Measurement[];
//   description: string;
// }

/** Dimensions and graduation data common to every equipment entry. */
export interface BaseMeasurement {
  capacity_ml: number;          // 0 when not applicable (e.g. wire gauze, tubing)
  height_mm:   number;
  diameter_mm: number;
  graduation_step_ml: number; // 0 when not graduated
}

/** Beaker, Erlenmeyer, test tube, petri dish, reagent bottle, round-bottom flask… */
export interface GlasswareMeasurement extends BaseMeasurement {
  wall_thickness_mm?: number;
  neck_diameter_mm?:  number;
  joint_size?:         string;    // e.g. "24/29 (NS 24)"
  neck_size?:           string;    // GL thread, e.g. "GL 45"
  tolerance_ml?:        string;    // e.g. "±0.05" — string to keep the ± sign
}

/** Separatory funnel — no graduations, has a stopcock stem. */
export interface SeparatoryFunnelMeasurement extends GlasswareMeasurement {
  neck_diameter_mm: number;      // required for sep. funnel
}

/** Filtering (Büchner) flask — thick wall + side-arm. */
export interface FilteringFlaskMeasurement extends GlasswareMeasurement {
  wall_thickness_mm: number;
  side_arm_od_mm:    number;
}

/** Burette — tip OD matters for flow rate. */
export interface BuretteMeasurement extends GlasswareMeasurement {
  tolerance_ml: string;
  tip_od_mm:    number;
}

/** Liebig condenser — inner tube + outer jacket dimensions. */
export interface CondenserMeasurement extends BaseMeasurement {
  inner_tube_od_mm:  number;
  outer_jacket_od_mm: number;
  joint_size:         string;
}

/** Measuring cylinder — Class A/B tolerance. */
export interface MeasuringCylinderMeasurement extends BaseMeasurement {
  tolerance_ml: string;
}

/** Graduated / serological pipette. */
export interface PipetteMeasurement extends BaseMeasurement {
  tolerance_ml: string;
}

/** Laboratory thermometer. */
export interface ThermometerMeasurement extends BaseMeasurement {
  range_c:           string;  // e.g. "-10 to +110"
  graduation_step_c: number;
  accuracy_c:        string;  // e.g. "±1"
}

/** Crucible — max temperature is the key spec. */
export interface CrucibleMeasurement extends BaseMeasurement {
  max_temp_c: number;
}

/** Bunsen burner. */
export interface BunsenBurnerMeasurement extends BaseMeasurement {
  barrel_id_mm: number;
  max_temp_c:   number;
}

/** Tripod stand. */
export interface TripodStandMeasurement extends BaseMeasurement {
  ring_diameter_mm: number;
  max_load_kg:      number;
}

/** Wire gauze — flat item, dimensions as size string. */
export interface WireGauzeMeasurement extends BaseMeasurement {
  size_mm:   string;  // e.g. "150×150"
  mesh_size: string;  // e.g. "10×10"
}

/** Magnetic stirrer / hot plate. */
export interface MagneticStirrerMeasurement extends BaseMeasurement {
  plate_size_mm: string;
  max_temp_c:    number;
  max_rpm:       number;
  max_volume_l:  number;
}

/** PTFE magnetic stir bar — length is the primary size. */
export interface StirBarMeasurement extends BaseMeasurement {
  length_mm: number;
}

/** Evaporating dish. */
export type EvaporatingDishMeasurement = BaseMeasurement;

/** Wash bottle. */
export interface WashBottleMeasurement extends BaseMeasurement {
  nozzle_od_mm: number;
}

/** Retort stand. */
export interface RetortStandMeasurement extends BaseMeasurement {
  base_mm:        string;  // e.g. "250×160"
  rod_diameter_mm: number;
}

/** Laboratory funnel. */
export interface FunnelMeasurement extends BaseMeasurement {
  stem_length_mm: number;
  stem_od_mm:     number;
}

/** Rubber / silicone stopper. */
export interface StopperMeasurement extends BaseMeasurement {
  size_number:  number;
  top_od_mm:    number;
  bottom_od_mm: number;
}

/** Glass tubing — length is fixed at 1000 mm per stick. */
export interface GlassTubingMeasurement extends BaseMeasurement {
  od_mm:            number;
  id_mm:            number;
  wall_thickness_mm: number;
  length_mm:         number;
}

/** Desiccator. */
export interface DesiccatorMeasurement extends BaseMeasurement {
  notes: string;  // e.g. "2.5 kg capacity plate"
}

/** Büchner funnel. */
export interface BuchnerFunnelMeasurement extends BaseMeasurement {
  plate_diameter_mm: number;
  no_holes:          number;
}

/** Test tube rack. */
export interface TestTubeRackMeasurement extends BaseMeasurement {
  holes:            number;
  hole_diameter_mm: number;
  footprint_mm:     string;
}

/** Spatula. */
export interface SpatulaMeasurement extends BaseMeasurement {
  blade_width_mm:  number;
  blade_length_mm: number;
}

/** Inoculation loop. */
export interface InoculationLoopMeasurement extends BaseMeasurement {
  loop_volume_ul:  number;
  loop_diameter_mm: number;
}

/** Safety goggles. */
export interface GoggLesmeasurement extends BaseMeasurement {
  lens_thickness_mm:  number;
  field_of_view_deg:  number;
}

/** Lab coat / gloves — no fixed dimensions, only sizes. */
export interface WearableMeasurement extends BaseMeasurement {
  sizes:         string;  // e.g. "XS / S / M / L / XL / XXL"
  thickness_mm?: number;  // glove wall thickness
}

/** CO₂ fire extinguisher. */
export interface FireExtinguisherMeasurement extends BaseMeasurement {
  co2_kg:  number;
  range_m: number;
}

/** Eye wash station. */
export interface EyeWashMeasurement extends BaseMeasurement {
  flow_lpm:   number;
  flush_min:  number;
}

/** Discriminated union of every measurement shape. */
export type AnyMeasurement =
  | GlasswareMeasurement
  | SeparatoryFunnelMeasurement
  | FilteringFlaskMeasurement
  | BuretteMeasurement
  | CondenserMeasurement
  | MeasuringCylinderMeasurement
  | PipetteMeasurement
  | ThermometerMeasurement
  | CrucibleMeasurement
  | BunsenBurnerMeasurement
  | TripodStandMeasurement
  | WireGauzeMeasurement
  | MagneticStirrerMeasurement
  | StirBarMeasurement
  | EvaporatingDishMeasurement
  | WashBottleMeasurement
  | RetortStandMeasurement
  | FunnelMeasurement
  | StopperMeasurement
  | GlassTubingMeasurement
  | DesiccatorMeasurement
  | BuchnerFunnelMeasurement
  | TestTubeRackMeasurement
  | SpatulaMeasurement
  | InoculationLoopMeasurement
  | GoggLesmeasurement
  | WearableMeasurement
  | FireExtinguisherMeasurement
  | EyeWashMeasurement;

/** All valid equipment categories. */
export type EquipmentCategory =
  | 'Glassware'
  | 'Heating & Support'
  | 'Measurement'
  | 'Safety'
  | 'Accessories';

/**
 * Top-level equipment record.
 * `measurements` is typed as AnyMeasurement[] so each entry
 * can carry only the fields relevant to its equipment type,
 * while still being stored in a flat homogeneous array.
 */
export interface Equipment {
  id:          string;
  title:       string;
  category:    EquipmentCategory;
  material:    string;
  standard?:   string;  // ISO / DIN / ANSI reference, optional
  lab_usage:   string;
  description: string;
  measurements: AnyMeasurement[];
}