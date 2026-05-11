import type { Equipment } from './types';

export const laboratoryEquipment: Equipment[] = [
  {
    "id": "beaker",
    "title": "Beaker",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "ISO 3819 / DIN 12331",
    "lab_usage": "Mixing, heating, stirring, and temporary storage of liquids in school and research labs.",
    "description": "Low-form Griffin beaker with a wide mouth, flat base, and a small spout for pouring. Graduated for approximate volume readings. Rated for autoclave sterilization at 121°C.",
    "measurements": [
      {
        "capacity_ml": 25,
        "height_mm": 50,
        "diameter_mm": 36,
        "graduation_step_ml": 5,
        "wall_thickness_mm": 1.5
      },
      {
        "capacity_ml": 50,
        "height_mm": 58,
        "diameter_mm": 42,
        "graduation_step_ml": 10,
        "wall_thickness_mm": 1.5
      },
      {
        "capacity_ml": 100,
        "height_mm": 70,
        "diameter_mm": 52,
        "graduation_step_ml": 20,
        "wall_thickness_mm": 1.5
      },
      {
        "capacity_ml": 150,
        "height_mm": 80,
        "diameter_mm": 61,
        "graduation_step_ml": 25,
        "wall_thickness_mm": 1.8
      },
      {
        "capacity_ml": 250,
        "height_mm": 95,
        "diameter_mm": 72,
        "graduation_step_ml": 50,
        "wall_thickness_mm": 1.8
      },
      {
        "capacity_ml": 400,
        "height_mm": 110,
        "diameter_mm": 85,
        "graduation_step_ml": 50,
        "wall_thickness_mm": 2
      },
      {
        "capacity_ml": 600,
        "height_mm": 125,
        "diameter_mm": 96,
        "graduation_step_ml": 100,
        "wall_thickness_mm": 2
      },
      {
        "capacity_ml": 1000,
        "height_mm": 145,
        "diameter_mm": 108,
        "graduation_step_ml": 100,
        "wall_thickness_mm": 2.2
      },
      {
        "capacity_ml": 2000,
        "height_mm": 180,
        "diameter_mm": 135,
        "graduation_step_ml": 200,
        "wall_thickness_mm": 2.5
      },
      {
        "capacity_ml": 3000,
        "height_mm": 210,
        "diameter_mm": 160,
        "graduation_step_ml": 500,
        "wall_thickness_mm": 3
      },
      {
        "capacity_ml": 5000,
        "height_mm": 245,
        "diameter_mm": 190,
        "graduation_step_ml": 500,
        "wall_thickness_mm": 3.5
      }
    ]
  },
  {
    "id": "erlenmeyer",
    "title": "Erlenmeyer Flask",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "ISO 1773 / DIN 12380",
    "lab_usage": "Titration, boiling, reflux, and storage of liquids; mixing without spilling due to conical shape.",
    "description": "Conical flask with a flat base and narrow cylindrical neck. The tapered shape allows swirling without splashing. Commonly used in titrations and microbiology cultures.",
    "measurements": [
      {
        "capacity_ml": 25,
        "height_mm": 72,
        "diameter_mm": 42,
        "graduation_step_ml": 5,
        "wall_thickness_mm": 1.5,
        "neck_diameter_mm": 18
      },
      {
        "capacity_ml": 50,
        "height_mm": 85,
        "diameter_mm": 51,
        "graduation_step_ml": 10,
        "wall_thickness_mm": 1.5,
        "neck_diameter_mm": 20
      },
      {
        "capacity_ml": 100,
        "height_mm": 105,
        "diameter_mm": 64,
        "graduation_step_ml": 20,
        "wall_thickness_mm": 1.5,
        "neck_diameter_mm": 22
      },
      {
        "capacity_ml": 250,
        "height_mm": 148,
        "diameter_mm": 85,
        "graduation_step_ml": 50,
        "wall_thickness_mm": 1.8,
        "neck_diameter_mm": 34
      },
      {
        "capacity_ml": 500,
        "height_mm": 182,
        "diameter_mm": 105,
        "graduation_step_ml": 100,
        "wall_thickness_mm": 2,
        "neck_diameter_mm": 34
      },
      {
        "capacity_ml": 1000,
        "height_mm": 222,
        "diameter_mm": 132,
        "graduation_step_ml": 100,
        "wall_thickness_mm": 2.2,
        "neck_diameter_mm": 42
      },
      {
        "capacity_ml": 2000,
        "height_mm": 280,
        "diameter_mm": 165,
        "graduation_step_ml": 200,
        "wall_thickness_mm": 2.5,
        "neck_diameter_mm": 50
      },
      {
        "capacity_ml": 5000,
        "height_mm": 380,
        "diameter_mm": 220,
        "graduation_step_ml": 500,
        "wall_thickness_mm": 3,
        "neck_diameter_mm": 60
      }
    ]
  },
  {
    "id": "separatory_funnel",
    "title": "Separatory Funnel",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "DIN 12450",
    "lab_usage": "Liquid-liquid extraction to separate immiscible phases of different densities.",
    "description": "Pear-shaped funnel with a ground-glass stopcock (PTFE plug) at the bottom and a glass stopper at the top. Used to separate two liquids based on density difference.",
    "measurements": [
      {
        "capacity_ml": 60,
        "height_mm": 185,
        "diameter_mm": 50,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 14
      },
      {
        "capacity_ml": 125,
        "height_mm": 225,
        "diameter_mm": 63,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 19
      },
      {
        "capacity_ml": 250,
        "height_mm": 275,
        "diameter_mm": 80,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 24
      },
      {
        "capacity_ml": 500,
        "height_mm": 330,
        "diameter_mm": 100,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 24
      },
      {
        "capacity_ml": 1000,
        "height_mm": 400,
        "diameter_mm": 126,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 29
      },
      {
        "capacity_ml": 2000,
        "height_mm": 480,
        "diameter_mm": 155,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 34
      }
    ]
  },
  {
    "id": "condenser",
    "title": "Liebig Condenser",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "DIN 12591",
    "lab_usage": "Cooling and condensing vapors during distillation, reflux, and solvent recovery setups.",
    "description": "Consists of a straight inner tube through which hot vapors travel, surrounded by an outer water jacket. Water flows counter-current through the jacket for efficient cooling. Fitted with hose connections (10mm OD) at each end.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 200,
        "diameter_mm": 28,
        "graduation_step_ml": 0,
        "inner_tube_od_mm": 10,
        "outer_jacket_od_mm": 28,
        "joint_size": "19/26 (NS 19)"
      },
      {
        "capacity_ml": 0,
        "height_mm": 300,
        "diameter_mm": 28,
        "graduation_step_ml": 0,
        "inner_tube_od_mm": 12,
        "outer_jacket_od_mm": 28,
        "joint_size": "24/29 (NS 24)"
      },
      {
        "capacity_ml": 0,
        "height_mm": 400,
        "diameter_mm": 35,
        "graduation_step_ml": 0,
        "inner_tube_od_mm": 14,
        "outer_jacket_od_mm": 35,
        "joint_size": "29/32 (NS 29)"
      },
      {
        "capacity_ml": 0,
        "height_mm": 500,
        "diameter_mm": 35,
        "graduation_step_ml": 0,
        "inner_tube_od_mm": 14,
        "outer_jacket_od_mm": 35,
        "joint_size": "29/32 (NS 29)"
      },
      {
        "capacity_ml": 0,
        "height_mm": 600,
        "diameter_mm": 40,
        "graduation_step_ml": 0,
        "inner_tube_od_mm": 16,
        "outer_jacket_od_mm": 40,
        "joint_size": "34/35 (NS 34)"
      }
    ]
  },
  {
    "id": "filtering_flask",
    "title": "Filtering Flask (Büchner)",
    "category": "Glassware",
    "material": "Heavy-Wall Borosilicate 3.3",
    "standard": "DIN 12383",
    "lab_usage": "Vacuum filtration; connects via side-arm to a vacuum pump or water aspirator.",
    "description": "Thick-walled conical flask with a tubular side-arm near the top of the neck for vacuum connection. The heavy wall withstands the pressure differential during filtration. Also called a suction flask or side-arm flask.",
    "measurements": [
      {
        "capacity_ml": 100,
        "height_mm": 110,
        "diameter_mm": 64,
        "graduation_step_ml": 25,
        "wall_thickness_mm": 3.5,
        "neck_diameter_mm": 25,
        "side_arm_od_mm": 10
      },
      {
        "capacity_ml": 250,
        "height_mm": 155,
        "diameter_mm": 85,
        "graduation_step_ml": 50,
        "wall_thickness_mm": 4,
        "neck_diameter_mm": 35,
        "side_arm_od_mm": 10
      },
      {
        "capacity_ml": 500,
        "height_mm": 185,
        "diameter_mm": 107,
        "graduation_step_ml": 100,
        "wall_thickness_mm": 4.5,
        "neck_diameter_mm": 35,
        "side_arm_od_mm": 10
      },
      {
        "capacity_ml": 1000,
        "height_mm": 230,
        "diameter_mm": 137,
        "graduation_step_ml": 200,
        "wall_thickness_mm": 5,
        "neck_diameter_mm": 45,
        "side_arm_od_mm": 10
      },
      {
        "capacity_ml": 2000,
        "height_mm": 290,
        "diameter_mm": 168,
        "graduation_step_ml": 500,
        "wall_thickness_mm": 5.5,
        "neck_diameter_mm": 55,
        "side_arm_od_mm": 12
      }
    ]
  },
  {
    "id": "measuring_cylinder",
    "title": "Measuring Cylinder",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "ISO 4788 Class A & B",
    "lab_usage": "Accurate volumetric measurement of liquids in lab procedures.",
    "description": "Tall, narrow cylinder with a hexagonal (or round) base for stability. Features fine graduated markings. Class A cylinders meet the highest accuracy tolerance (±0.5–1%). Read volume at the bottom of the meniscus.",
    "measurements": [
      {
        "capacity_ml": 5,
        "height_mm": 118,
        "diameter_mm": 13,
        "graduation_step_ml": 0.1,
        "tolerance_ml": "±0.05"
      },
      {
        "capacity_ml": 10,
        "height_mm": 145,
        "diameter_mm": 16,
        "graduation_step_ml": 0.2,
        "tolerance_ml": "±0.10"
      },
      {
        "capacity_ml": 25,
        "height_mm": 175,
        "diameter_mm": 19,
        "graduation_step_ml": 0.5,
        "tolerance_ml": "±0.25"
      },
      {
        "capacity_ml": 50,
        "height_mm": 200,
        "diameter_mm": 24,
        "graduation_step_ml": 1,
        "tolerance_ml": "±0.50"
      },
      {
        "capacity_ml": 100,
        "height_mm": 255,
        "diameter_mm": 30,
        "graduation_step_ml": 1,
        "tolerance_ml": "±1.0"
      },
      {
        "capacity_ml": 250,
        "height_mm": 335,
        "diameter_mm": 40,
        "graduation_step_ml": 2,
        "tolerance_ml": "±2.5"
      },
      {
        "capacity_ml": 500,
        "height_mm": 385,
        "diameter_mm": 53,
        "graduation_step_ml": 5,
        "tolerance_ml": "±5.0"
      },
      {
        "capacity_ml": 1000,
        "height_mm": 465,
        "diameter_mm": 67,
        "graduation_step_ml": 10,
        "tolerance_ml": "±10.0"
      },
      {
        "capacity_ml": 2000,
        "height_mm": 560,
        "diameter_mm": 88,
        "graduation_step_ml": 20,
        "tolerance_ml": "±20.0"
      }
    ]
  },
  {
    "id": "burette",
    "title": "Burette",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "ISO 385 Class A & B",
    "lab_usage": "Quantitative dispense of reagent volumes in titrimetric analyses.",
    "description": "Long, precision-graduated glass tube with a glass or PTFE stopcock at the bottom. The zero mark is at the top. Used to deliver precise, measurable volumes of titrant. Class A tolerance is ±0.05 mL for 50 mL capacity.",
    "measurements": [
      {
        "capacity_ml": 5,
        "height_mm": 260,
        "diameter_mm": 7,
        "graduation_step_ml": 0.02,
        "tolerance_ml": "±0.01",
        "tip_od_mm": 1.5
      },
      {
        "capacity_ml": 10,
        "height_mm": 350,
        "diameter_mm": 8,
        "graduation_step_ml": 0.05,
        "tolerance_ml": "±0.025",
        "tip_od_mm": 1.5
      },
      {
        "capacity_ml": 25,
        "height_mm": 450,
        "diameter_mm": 11,
        "graduation_step_ml": 0.1,
        "tolerance_ml": "±0.04",
        "tip_od_mm": 2
      },
      {
        "capacity_ml": 50,
        "height_mm": 560,
        "diameter_mm": 13,
        "graduation_step_ml": 0.1,
        "tolerance_ml": "±0.05",
        "tip_od_mm": 2
      },
      {
        "capacity_ml": 100,
        "height_mm": 670,
        "diameter_mm": 16,
        "graduation_step_ml": 0.2,
        "tolerance_ml": "±0.10",
        "tip_od_mm": 2.5
      }
    ]
  },
  {
    "id": "volumetric_flask",
    "title": "Volumetric Flask",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "ISO 1042 Class A & B",
    "lab_usage": "Preparation of standard solutions of precisely known concentration.",
    "description": "Flat-bottomed pear-shaped flask with a long, narrow neck and a single etched calibration ring. Calibrated to contain (TC) a precise volume at 20°C. Fitted with a ground-glass (or PE) stopper.",
    "measurements": [
      {
        "capacity_ml": 5,
        "height_mm": 85,
        "diameter_mm": 27,
        "graduation_step_ml": 5,
        "tolerance_ml": "±0.020",
        "neck_diameter_mm": 8
      },
      {
        "capacity_ml": 10,
        "height_mm": 100,
        "diameter_mm": 31,
        "graduation_step_ml": 10,
        "tolerance_ml": "±0.020",
        "neck_diameter_mm": 9
      },
      {
        "capacity_ml": 25,
        "height_mm": 120,
        "diameter_mm": 40,
        "graduation_step_ml": 25,
        "tolerance_ml": "±0.030",
        "neck_diameter_mm": 11
      },
      {
        "capacity_ml": 50,
        "height_mm": 140,
        "diameter_mm": 48,
        "graduation_step_ml": 50,
        "tolerance_ml": "±0.060",
        "neck_diameter_mm": 12
      },
      {
        "capacity_ml": 100,
        "height_mm": 170,
        "diameter_mm": 60,
        "graduation_step_ml": 100,
        "tolerance_ml": "±0.100",
        "neck_diameter_mm": 13
      },
      {
        "capacity_ml": 200,
        "height_mm": 200,
        "diameter_mm": 74,
        "graduation_step_ml": 200,
        "tolerance_ml": "±0.150",
        "neck_diameter_mm": 14
      },
      {
        "capacity_ml": 250,
        "height_mm": 220,
        "diameter_mm": 81,
        "graduation_step_ml": 250,
        "tolerance_ml": "±0.150",
        "neck_diameter_mm": 16
      },
      {
        "capacity_ml": 500,
        "height_mm": 260,
        "diameter_mm": 101,
        "graduation_step_ml": 500,
        "tolerance_ml": "±0.250",
        "neck_diameter_mm": 19
      },
      {
        "capacity_ml": 1000,
        "height_mm": 305,
        "diameter_mm": 127,
        "graduation_step_ml": 1000,
        "tolerance_ml": "±0.400",
        "neck_diameter_mm": 24
      },
      {
        "capacity_ml": 2000,
        "height_mm": 380,
        "diameter_mm": 160,
        "graduation_step_ml": 2000,
        "tolerance_ml": "±0.600",
        "neck_diameter_mm": 29
      }
    ]
  },
  {
    "id": "crucible",
    "title": "Crucible & Lid",
    "category": "Heating & Support",
    "material": "Porcelain (glazed inside, unglazed outside) / Alumina 99.7%",
    "standard": "DIN 12904",
    "lab_usage": "High-temperature ignition of precipitates, ashing organic matter, and fusion of inorganic materials.",
    "description": "Small cup-shaped vessel used to heat substances to very high temperatures (up to 1200°C for porcelain, 1600°C for alumina). The loose-fitting cover reduces atmospheric contamination. Placed on a clay triangle over a Bunsen burner or in a furnace.",
    "measurements": [
      {
        "capacity_ml": 5,
        "height_mm": 22,
        "diameter_mm": 26,
        "graduation_step_ml": 0,
        "max_temp_c": 1200
      },
      {
        "capacity_ml": 10,
        "height_mm": 28,
        "diameter_mm": 32,
        "graduation_step_ml": 0,
        "max_temp_c": 1200
      },
      {
        "capacity_ml": 15,
        "height_mm": 32,
        "diameter_mm": 36,
        "graduation_step_ml": 0,
        "max_temp_c": 1200
      },
      {
        "capacity_ml": 25,
        "height_mm": 38,
        "diameter_mm": 41,
        "graduation_step_ml": 0,
        "max_temp_c": 1200
      },
      {
        "capacity_ml": 30,
        "height_mm": 42,
        "diameter_mm": 45,
        "graduation_step_ml": 0,
        "max_temp_c": 1200
      },
      {
        "capacity_ml": 50,
        "height_mm": 50,
        "diameter_mm": 53,
        "graduation_step_ml": 0,
        "max_temp_c": 1200
      },
      {
        "capacity_ml": 100,
        "height_mm": 62,
        "diameter_mm": 66,
        "graduation_step_ml": 0,
        "max_temp_c": 1200
      }
    ]
  },
  {
    "id": "test_tube",
    "title": "Test Tube",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "ISO 4142 / DIN 12162",
    "lab_usage": "Small-scale chemical reactions, heating of samples, qualitative analysis.",
    "description": "Cylindrical glass tube closed at one end with a rounded hemispherical bottom. Open at the top. Typically held with test tube clamps or placed in a rack. Available with or without rim.",
    "measurements": [
      {
        "capacity_ml": 5,
        "height_mm": 75,
        "diameter_mm": 10,
        "graduation_step_ml": 0,
        "wall_thickness_mm": 0.8
      },
      {
        "capacity_ml": 10,
        "height_mm": 100,
        "diameter_mm": 12,
        "graduation_step_ml": 0,
        "wall_thickness_mm": 0.9
      },
      {
        "capacity_ml": 15,
        "height_mm": 125,
        "diameter_mm": 14,
        "graduation_step_ml": 0,
        "wall_thickness_mm": 1
      },
      {
        "capacity_ml": 20,
        "height_mm": 150,
        "diameter_mm": 16,
        "graduation_step_ml": 0,
        "wall_thickness_mm": 1
      },
      {
        "capacity_ml": 30,
        "height_mm": 155,
        "diameter_mm": 18,
        "graduation_step_ml": 0,
        "wall_thickness_mm": 1.1
      },
      {
        "capacity_ml": 50,
        "height_mm": 200,
        "diameter_mm": 25,
        "graduation_step_ml": 0,
        "wall_thickness_mm": 1.2
      },
      {
        "capacity_ml": 100,
        "height_mm": 250,
        "diameter_mm": 32,
        "graduation_step_ml": 0,
        "wall_thickness_mm": 1.5
      }
    ]
  },
  {
    "id": "petri_dish",
    "title": "Petri Dish",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3 / Polystyrene (disposable)",
    "standard": "ISO 7704",
    "lab_usage": "Cell culture, microbiological plating, germination studies, and evaporation experiments.",
    "description": "Shallow cylindrical glass dish with a loosely fitting cover. The lid overhangs the base to allow gas exchange while preventing contamination. Glass versions are reusable after autoclaving; polystyrene versions are single-use.",
    "measurements": [
      {
        "capacity_ml": 20,
        "height_mm": 12,
        "diameter_mm": 55,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 50,
        "height_mm": 15,
        "diameter_mm": 60,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 80,
        "height_mm": 15,
        "diameter_mm": 90,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 110,
        "height_mm": 20,
        "diameter_mm": 100,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 200,
        "height_mm": 25,
        "diameter_mm": 140,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 350,
        "height_mm": 30,
        "diameter_mm": 150,
        "graduation_step_ml": 0
      }
    ]
  },
  {
    "id": "wash_bottle",
    "title": "Wash Bottle",
    "category": "Accessories",
    "material": "Low-Density Polyethylene (LDPE) / Polypropylene (PP)",
    "standard": "ISO 7376",
    "lab_usage": "Rinsing laboratory glassware, delivering small precise streams of solvent, and keeping work surfaces moist.",
    "description": "Squeezable plastic bottle with a two-tube dip-tube-and-nozzle assembly. Squeezing the body forces liquid up the dip tube and out the angled nozzle spout. Typically color-coded by contents (e.g., red for ethanol, white for water).",
    "measurements": [
      {
        "capacity_ml": 250,
        "height_mm": 155,
        "diameter_mm": 62,
        "graduation_step_ml": 50,
        "nozzle_od_mm": 5
      },
      {
        "capacity_ml": 500,
        "height_mm": 185,
        "diameter_mm": 78,
        "graduation_step_ml": 100,
        "nozzle_od_mm": 5
      },
      {
        "capacity_ml": 1000,
        "height_mm": 225,
        "diameter_mm": 100,
        "graduation_step_ml": 200,
        "nozzle_od_mm": 6
      }
    ]
  },
  {
    "id": "round_bottom_flask",
    "title": "Round-Bottom Flask",
    "category": "Glassware",
    "material": "Borosilicate Glass 3.3",
    "standard": "ISO 1773 / DIN 12347",
    "lab_usage": "Distillation, reflux, rotary evaporation, and reactions requiring uniform heating.",
    "description": "Spherical flask with a uniform wall thickness and a cylindrical neck. The round base allows even distribution of heat, eliminating hot spots. Must be supported in a heating mantle or sand bath — cannot stand upright without a support.",
    "measurements": [
      {
        "capacity_ml": 50,
        "height_mm": 90,
        "diameter_mm": 55,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 14,
        "joint_size": "14/23 (NS 14)"
      },
      {
        "capacity_ml": 100,
        "height_mm": 106,
        "diameter_mm": 67,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 19,
        "joint_size": "19/26 (NS 19)"
      },
      {
        "capacity_ml": 250,
        "height_mm": 136,
        "diameter_mm": 90,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 24,
        "joint_size": "24/29 (NS 24)"
      },
      {
        "capacity_ml": 500,
        "height_mm": 165,
        "diameter_mm": 112,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 29,
        "joint_size": "29/32 (NS 29)"
      },
      {
        "capacity_ml": 1000,
        "height_mm": 200,
        "diameter_mm": 140,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 29,
        "joint_size": "29/32 (NS 29)"
      },
      {
        "capacity_ml": 2000,
        "height_mm": 245,
        "diameter_mm": 170,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 34,
        "joint_size": "34/35 (NS 34)"
      },
      {
        "capacity_ml": 5000,
        "height_mm": 310,
        "diameter_mm": 225,
        "graduation_step_ml": 0,
        "neck_diameter_mm": 45,
        "joint_size": "45/40 (NS 45)"
      }
    ]
  },
  {
    "id": "reagent_bottle",
    "title": "Reagent Bottle",
    "category": "Glassware",
    "material": "Amber Borosilicate Glass 3.3 / Clear Borosilicate",
    "standard": "DIN 12218",
    "lab_usage": "Long-term storage of reagents, solvents, and prepared solutions; amber glass protects light-sensitive compounds.",
    "description": "Narrow-mouth or wide-mouth bottle with a ground-glass (GL) screw-cap or stopper. Amber glass blocks >99% of UV light below 380 nm. Wide-mouth version allows scooping of solid reagents.",
    "measurements": [
      {
        "capacity_ml": 30,
        "height_mm": 68,
        "diameter_mm": 36,
        "graduation_step_ml": 0,
        "neck_size": "GL 18"
      },
      {
        "capacity_ml": 60,
        "height_mm": 78,
        "diameter_mm": 42,
        "graduation_step_ml": 0,
        "neck_size": "GL 18"
      },
      {
        "capacity_ml": 100,
        "height_mm": 95,
        "diameter_mm": 48,
        "graduation_step_ml": 0,
        "neck_size": "GL 25"
      },
      {
        "capacity_ml": 250,
        "height_mm": 128,
        "diameter_mm": 66,
        "graduation_step_ml": 0,
        "neck_size": "GL 32"
      },
      {
        "capacity_ml": 500,
        "height_mm": 158,
        "diameter_mm": 82,
        "graduation_step_ml": 0,
        "neck_size": "GL 45"
      },
      {
        "capacity_ml": 1000,
        "height_mm": 195,
        "diameter_mm": 102,
        "graduation_step_ml": 0,
        "neck_size": "GL 45"
      },
      {
        "capacity_ml": 2000,
        "height_mm": 245,
        "diameter_mm": 130,
        "graduation_step_ml": 0,
        "neck_size": "GL 45"
      }
    ]
  },
  {
    "id": "pipette",
    "title": "Serological / Graduated Pipette",
    "category": "Measurement",
    "material": "Borosilicate Glass 3.3 / Polystyrene (disposable)",
    "standard": "ISO 835 Class A & B",
    "lab_usage": "Transfer and measurement of precise volumes of liquid in analytical procedures.",
    "description": "Long, slender tube graduated along its full length. Serological pipettes are TD (to deliver) calibrated. Used with a pipette filler (bulb or mechanical). Blow-out ring at the top indicates contents must be expelled fully.",
    "measurements": [
      {
        "capacity_ml": 0.1,
        "height_mm": 190,
        "diameter_mm": 6,
        "graduation_step_ml": 0.01,
        "tolerance_ml": "±0.003"
      },
      {
        "capacity_ml": 0.2,
        "height_mm": 210,
        "diameter_mm": 7,
        "graduation_step_ml": 0.01,
        "tolerance_ml": "±0.004"
      },
      {
        "capacity_ml": 0.5,
        "height_mm": 250,
        "diameter_mm": 7,
        "graduation_step_ml": 0.01,
        "tolerance_ml": "±0.006"
      },
      {
        "capacity_ml": 1,
        "height_mm": 290,
        "diameter_mm": 8,
        "graduation_step_ml": 0.01,
        "tolerance_ml": "±0.006"
      },
      {
        "capacity_ml": 2,
        "height_mm": 330,
        "diameter_mm": 8,
        "graduation_step_ml": 0.02,
        "tolerance_ml": "±0.010"
      },
      {
        "capacity_ml": 5,
        "height_mm": 370,
        "diameter_mm": 10,
        "graduation_step_ml": 0.1,
        "tolerance_ml": "±0.025"
      },
      {
        "capacity_ml": 10,
        "height_mm": 430,
        "diameter_mm": 12,
        "graduation_step_ml": 0.1,
        "tolerance_ml": "±0.040"
      },
      {
        "capacity_ml": 25,
        "height_mm": 510,
        "diameter_mm": 16,
        "graduation_step_ml": 0.2,
        "tolerance_ml": "±0.060"
      },
      {
        "capacity_ml": 50,
        "height_mm": 600,
        "diameter_mm": 19,
        "graduation_step_ml": 0.5,
        "tolerance_ml": "±0.100"
      }
    ]
  },
  {
    "id": "watch_glass",
    "title": "Watch Glass",
    "category": "Accessories",
    "material": "Borosilicate Glass 3.3",
    "standard": "DIN 12231",
    "lab_usage": "Covering beakers to prevent contamination, evaporating small liquid volumes, weighing solid reagents, and holding samples during microscopy.",
    "description": "Circular, concave-convex glass disc. Placed concave-side up to hold liquids or concave-side down as a beaker cover. Can be heated gently on a hot plate.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 12,
        "diameter_mm": 60,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 0,
        "height_mm": 14,
        "diameter_mm": 80,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 0,
        "height_mm": 16,
        "diameter_mm": 100,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 0,
        "height_mm": 18,
        "diameter_mm": 120,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 0,
        "height_mm": 20,
        "diameter_mm": 150,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 0,
        "height_mm": 22,
        "diameter_mm": 200,
        "graduation_step_ml": 0
      }
    ]
  },
  {
    "id": "evaporating_dish",
    "title": "Evaporating Dish",
    "category": "Heating & Support",
    "material": "Porcelain / Borosilicate Glass",
    "standard": "DIN 12903",
    "lab_usage": "Evaporating liquids to concentrate solutions or recover crystallized solids.",
    "description": "Shallow, wide-mouthed dish with a pouring lip. The large surface area promotes rapid evaporation. Porcelain version withstands direct flame; glass version allows visual monitoring.",
    "measurements": [
      {
        "capacity_ml": 40,
        "height_mm": 22,
        "diameter_mm": 70,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 100,
        "height_mm": 28,
        "diameter_mm": 100,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 200,
        "height_mm": 38,
        "diameter_mm": 130,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 400,
        "height_mm": 48,
        "diameter_mm": 160,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 600,
        "height_mm": 58,
        "diameter_mm": 185,
        "graduation_step_ml": 0
      }
    ]
  },
  {
    "id": "desiccator",
    "title": "Desiccator",
    "category": "Accessories",
    "material": "Borosilicate Glass 3.3 (clear) / Polycarbonate",
    "standard": "DIN 12491",
    "lab_usage": "Storing hygroscopic substances, cooling crucibles after ignition, and drying samples over a desiccant.",
    "description": "Airtight container with a ground glass or plastic flange and lid. Lower chamber holds desiccant (e.g., silica gel, anhydrous CaCl₂, Drierite). Upper chamber (above the porcelain plate) holds samples. Vacuum-type has a side-arm stopcock.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 170,
        "diameter_mm": 150,
        "graduation_step_ml": 0,
        "notes": "1.5 kg capacity plate"
      },
      {
        "capacity_ml": 0,
        "height_mm": 210,
        "diameter_mm": 200,
        "graduation_step_ml": 0,
        "notes": "2.5 kg capacity plate"
      },
      {
        "capacity_ml": 0,
        "height_mm": 255,
        "diameter_mm": 250,
        "graduation_step_ml": 0,
        "notes": "4 kg capacity plate"
      },
      {
        "capacity_ml": 0,
        "height_mm": 305,
        "diameter_mm": 300,
        "graduation_step_ml": 0,
        "notes": "6 kg capacity plate"
      }
    ]
  },
  {
    "id": "bunsen_burner",
    "title": "Bunsen Burner",
    "category": "Heating & Support",
    "material": "Cast Iron / Zinc Alloy barrel",
    "standard": "EN 14114",
    "lab_usage": "Heating, sterilization, combustion reactions, and producing a reducing or oxidizing flame.",
    "description": "Gas burner consisting of a base, gas inlet, air hole collar (needle valve) and barrel. The air hole adjusts the air-to-gas ratio: closed gives a luminous (yellow) flame; open gives a roaring blue (non-luminous) cone flame reaching ~1500°C. Requires a natural gas or LPG supply at 5–30 mbar.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 135,
        "diameter_mm": 90,
        "graduation_step_ml": 0,
        "barrel_id_mm": 11,
        "max_temp_c": 1500
      },
      {
        "capacity_ml": 0,
        "height_mm": 165,
        "diameter_mm": 90,
        "graduation_step_ml": 0,
        "barrel_id_mm": 13,
        "max_temp_c": 1500
      }
    ]
  },
  {
    "id": "tripod_stand",
    "title": "Tripod Stand",
    "category": "Heating & Support",
    "material": "Steel (zinc-plated or powder-coated)",
    "standard": "–",
    "lab_usage": "Supporting wire gauze and vessels over a Bunsen burner for heating.",
    "description": "Three-legged iron stand with a circular ring welded at the top. Used in conjunction with wire gauze to support flasks, beakers, and crucibles over a heat source. Height is fixed; combine with an iron ring on a retort stand for adjustable height.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 100,
        "diameter_mm": 130,
        "graduation_step_ml": 0,
        "ring_diameter_mm": 100,
        "max_load_kg": 5
      },
      {
        "capacity_ml": 0,
        "height_mm": 130,
        "diameter_mm": 145,
        "graduation_step_ml": 0,
        "ring_diameter_mm": 120,
        "max_load_kg": 8
      },
      {
        "capacity_ml": 0,
        "height_mm": 170,
        "diameter_mm": 170,
        "graduation_step_ml": 0,
        "ring_diameter_mm": 145,
        "max_load_kg": 10
      }
    ]
  },
  {
    "id": "wire_gauze",
    "title": "Wire Gauze",
    "category": "Heating & Support",
    "material": "Steel mesh with ceramic / asbestos-free center",
    "standard": "–",
    "lab_usage": "Distributing heat evenly from a Bunsen burner to the flat base of a beaker or flask.",
    "description": "Steel wire mesh with a ceramic-center heat-resistant square. Placed on a tripod stand. The ceramic prevents direct flame contact and spreads heat uniformly, preventing cracking of glassware.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 1,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "size_mm": "100×100",
        "mesh_size": "10×10"
      },
      {
        "capacity_ml": 0,
        "height_mm": 1,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "size_mm": "125×125",
        "mesh_size": "10×10"
      },
      {
        "capacity_ml": 0,
        "height_mm": 1,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "size_mm": "150×150",
        "mesh_size": "10×10"
      },
      {
        "capacity_ml": 0,
        "height_mm": 1,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "size_mm": "200×200",
        "mesh_size": "10×10"
      }
    ]
  },
  {
    "id": "retort_stand",
    "title": "Retort Stand & Clamps",
    "category": "Accessories",
    "material": "Cast iron base / Steel rod, Boss head: Steel or Zinc alloy",
    "standard": "–",
    "lab_usage": "Supporting burettes, condensers, separatory funnels, and other apparatus at a fixed height during experiments.",
    "description": "Heavy cast-iron rectangular base with a vertical steel rod (10 mm dia). Combined with boss heads, iron rings, and clamps to hold various apparatus securely at any height.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 500,
        "diameter_mm": 10,
        "graduation_step_ml": 0,
        "base_mm": "200×130",
        "rod_diameter_mm": 10
      },
      {
        "capacity_ml": 0,
        "height_mm": 750,
        "diameter_mm": 10,
        "graduation_step_ml": 0,
        "base_mm": "250×160",
        "rod_diameter_mm": 12
      },
      {
        "capacity_ml": 0,
        "height_mm": 1000,
        "diameter_mm": 10,
        "graduation_step_ml": 0,
        "base_mm": "300×200",
        "rod_diameter_mm": 12
      }
    ]
  },
  {
    "id": "funnel",
    "title": "Laboratory Funnel",
    "category": "Accessories",
    "material": "Borosilicate Glass 3.3 / Polypropylene",
    "standard": "DIN 12451",
    "lab_usage": "Transferring liquids or fine-grained solids into a narrow-necked vessel, and supporting filter paper during gravity filtration.",
    "description": "Conical bowl with a 60° half-angle (standard) tapering to a long stem. The stem length determines how far the funnel tip sits inside the receiving vessel. Short-stem funnels are used for rapid filtration; long-stem for slower, analytical filtration.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 85,
        "diameter_mm": 50,
        "graduation_step_ml": 0,
        "stem_length_mm": 55,
        "stem_od_mm": 7
      },
      {
        "capacity_ml": 0,
        "height_mm": 105,
        "diameter_mm": 65,
        "graduation_step_ml": 0,
        "stem_length_mm": 70,
        "stem_od_mm": 8
      },
      {
        "capacity_ml": 0,
        "height_mm": 130,
        "diameter_mm": 80,
        "graduation_step_ml": 0,
        "stem_length_mm": 85,
        "stem_od_mm": 9
      },
      {
        "capacity_ml": 0,
        "height_mm": 160,
        "diameter_mm": 100,
        "graduation_step_ml": 0,
        "stem_length_mm": 105,
        "stem_od_mm": 10
      },
      {
        "capacity_ml": 0,
        "height_mm": 200,
        "diameter_mm": 150,
        "graduation_step_ml": 0,
        "stem_length_mm": 130,
        "stem_od_mm": 13
      }
    ]
  },
  {
    "id": "mortar_pestle",
    "title": "Mortar & Pestle",
    "category": "Accessories",
    "material": "Unglazed Porcelain / Agate / Borosilicate Glass",
    "standard": "–",
    "lab_usage": "Grinding and mixing solid chemical or biological samples to a fine powder.",
    "description": "Bowl-shaped vessel (mortar) with a club-shaped grinding tool (pestle). Unglazed porcelain provides an abrasive surface for effective grinding. Agate version is chemically inert and used for trace-metal-sensitive samples.",
    "measurements": [
      {
        "capacity_ml": 15,
        "height_mm": 40,
        "diameter_mm": 55,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 30,
        "height_mm": 48,
        "diameter_mm": 70,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 60,
        "height_mm": 58,
        "diameter_mm": 85,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 130,
        "height_mm": 72,
        "diameter_mm": 105,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 250,
        "height_mm": 88,
        "diameter_mm": 130,
        "graduation_step_ml": 0
      },
      {
        "capacity_ml": 500,
        "height_mm": 108,
        "diameter_mm": 160,
        "graduation_step_ml": 0
      }
    ]
  },
  {
    "id": "thermometer",
    "title": "Laboratory Thermometer",
    "category": "Measurement",
    "material": "Borosilicate Glass, Mercury-free (Galinstan or organic dye)",
    "standard": "ISO 386 / ASTM E1",
    "lab_usage": "Measuring temperature in baths, reactions, and distillation setups.",
    "description": "Glass-encased liquid-in-glass thermometer with a bulb and capillary column. Modern versions use Galinstan (gallium alloy) or red/blue organic dye instead of mercury. Partial-immersion models are marked with an immersion line.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 300,
        "diameter_mm": 7,
        "graduation_step_ml": 0,
        "range_c": "-10 to +110",
        "graduation_step_c": 1,
        "accuracy_c": "±1"
      },
      {
        "capacity_ml": 0,
        "height_mm": 305,
        "diameter_mm": 7,
        "graduation_step_ml": 0,
        "range_c": "-10 to +150",
        "graduation_step_c": 1,
        "accuracy_c": "±1"
      },
      {
        "capacity_ml": 0,
        "height_mm": 310,
        "diameter_mm": 7,
        "graduation_step_ml": 0,
        "range_c": "-10 to +200",
        "graduation_step_c": 1,
        "accuracy_c": "±1"
      },
      {
        "capacity_ml": 0,
        "height_mm": 315,
        "diameter_mm": 8,
        "graduation_step_ml": 0,
        "range_c": "-20 to +360",
        "graduation_step_c": 2,
        "accuracy_c": "±2"
      }
    ]
  },
  {
    "id": "safety_goggles",
    "title": "Safety Goggles",
    "category": "Safety",
    "material": "Polycarbonate lens, PVC/EVA body",
    "standard": "EN 166 / ANSI Z87.1",
    "lab_usage": "Eye protection from chemical splashes, flying particles, and UV radiation.",
    "description": "Indirect-vent chemical splash goggles with fog-resistant polycarbonate lenses (2mm thick). Indirect vents prevent liquid spray from entering. Adjustable elastic headband. Anti-fog coating (AF) and UV400 protection.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 90,
        "diameter_mm": 175,
        "graduation_step_ml": 0,
        "lens_thickness_mm": 2,
        "field_of_view_deg": 180
      }
    ]
  },
  {
    "id": "lab_coat",
    "title": "Laboratory Coat",
    "category": "Safety",
    "material": "100% Cotton or Cotton/Polyester blend (65/35)",
    "standard": "EN ISO 13688 / ASTM F1506",
    "lab_usage": "Protection of clothing and skin from chemical spills, biological contamination, and minor flame exposure.",
    "description": "Knee-length white coat with a buttoned front, two lower patch pockets and one chest pocket, long sleeves with elastic or knit cuffs, and a back vent for mobility. Cotton versions offer flame resistance; poly-cotton blends are more durable.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 0,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "sizes": "XS / S / M / L / XL / XXL / XXXL"
      }
    ]
  },
  {
    "id": "gloves",
    "title": "Laboratory Gloves",
    "category": "Safety",
    "material": "Nitrile / Latex / Neoprene / Vinyl",
    "standard": "EN 374 / ASTM D6978",
    "lab_usage": "Hand protection from corrosive chemicals, biological hazards, and minor heat.",
    "description": "Nitrile gloves are the current standard: latex-free, puncture-resistant, and resistant to a broad range of organic solvents and acids. Powder-free. Beaded cuff for donning. Neoprene and thick rubber gloves are used for cryogenics and stronger solvent handling.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 240,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "thickness_mm": 0.1,
        "sizes": "XS / S / M / L / XL"
      },
      {
        "capacity_ml": 0,
        "height_mm": 285,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "thickness_mm": 0.13,
        "sizes": "XS / S / M / L / XL"
      }
    ]
  },
  {
    "id": "spatula",
    "title": "Laboratory Spatula",
    "category": "Accessories",
    "material": "Stainless Steel 18/10 or Polypropylene",
    "standard": "DIN 12891",
    "lab_usage": "Transferring, scooping, and mixing solid or viscous chemical reagents.",
    "description": "Flat or spoon-ended tool with a rounded or straight blade. Micro-spatulas are used for milligram quantities. Double-ended versions have a spoon on one end and a flat blade on the other. Autoclavable.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 130,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "blade_width_mm": 6,
        "blade_length_mm": 30
      },
      {
        "capacity_ml": 0,
        "height_mm": 150,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "blade_width_mm": 8,
        "blade_length_mm": 40
      },
      {
        "capacity_ml": 0,
        "height_mm": 180,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "blade_width_mm": 10,
        "blade_length_mm": 50
      },
      {
        "capacity_ml": 0,
        "height_mm": 210,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "blade_width_mm": 14,
        "blade_length_mm": 60
      },
      {
        "capacity_ml": 0,
        "height_mm": 250,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "blade_width_mm": 18,
        "blade_length_mm": 80
      }
    ]
  },
  {
    "id": "test_tube_rack",
    "title": "Test Tube Rack",
    "category": "Accessories",
    "material": "Polypropylene / Stainless Steel",
    "standard": "–",
    "lab_usage": "Holding multiple test tubes upright during experiments to prevent spills and free up hands.",
    "description": "Rectangular rack with holes to hold test tubes vertically. Polypropylene racks are autoclavable and chemical-resistant. Metal racks are more stable. Available in configurations for 12 mm, 16 mm, 18 mm, 25 mm tubes.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 60,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "holes": 12,
        "hole_diameter_mm": 13,
        "footprint_mm": "240×85"
      },
      {
        "capacity_ml": 0,
        "height_mm": 65,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "holes": 20,
        "hole_diameter_mm": 16,
        "footprint_mm": "300×110"
      },
      {
        "capacity_ml": 0,
        "height_mm": 70,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "holes": 24,
        "hole_diameter_mm": 19,
        "footprint_mm": "340×130"
      }
    ]
  },
  {
    "id": "magnetic_stirrer",
    "title": "Magnetic Stirrer & Hot Plate",
    "category": "Accessories",
    "material": "Ceramic top plate (Al₂O₃) / Painted metal housing",
    "standard": "EN 61010-1",
    "lab_usage": "Continuous stirring of solutions with a PTFE-coated stir bar, with optional heating for reactions requiring elevated temperature.",
    "description": "Bench-top instrument with a rotating magnet beneath the plate that spins a PTFE-coated magnetic stir bar placed in the vessel. Combined units include a heating element in the ceramic plate (up to 320°C). Speed: 0–1500 RPM. Temperature probe port available.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 90,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "plate_size_mm": "135×135",
        "max_temp_c": 320,
        "max_rpm": 1500,
        "max_volume_l": 2
      },
      {
        "capacity_ml": 0,
        "height_mm": 90,
        "diameter_mm": 0,
        "graduation_step_ml": 0,
        "plate_size_mm": "180×180",
        "max_temp_c": 320,
        "max_rpm": 1200,
        "max_volume_l": 5
      }
    ]
  },
  {
    "id": "stir_bar",
    "title": "Magnetic Stir Bar (Flea)",
    "category": "Accessories",
    "material": "PTFE-coated Alnico or NdFeB magnet",
    "standard": "–",
    "lab_usage": "Placed inside a vessel on a magnetic stirrer for contactless mechanical stirring.",
    "description": "Cylindrical or oval pill-shaped magnet coated in chemically inert PTFE (polytetrafluoroethylene). Rotated by the external magnet of the hot plate stirrer. The pivot ring (octagonal bars) keeps the bar centered.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 7,
        "diameter_mm": 7,
        "graduation_step_ml": 0,
        "length_mm": 10
      },
      {
        "capacity_ml": 0,
        "height_mm": 8,
        "diameter_mm": 8,
        "graduation_step_ml": 0,
        "length_mm": 15
      },
      {
        "capacity_ml": 0,
        "height_mm": 8,
        "diameter_mm": 8,
        "graduation_step_ml": 0,
        "length_mm": 20
      },
      {
        "capacity_ml": 0,
        "height_mm": 10,
        "diameter_mm": 10,
        "graduation_step_ml": 0,
        "length_mm": 25
      },
      {
        "capacity_ml": 0,
        "height_mm": 10,
        "diameter_mm": 10,
        "graduation_step_ml": 0,
        "length_mm": 30
      },
      {
        "capacity_ml": 0,
        "height_mm": 12,
        "diameter_mm": 12,
        "graduation_step_ml": 0,
        "length_mm": 40
      },
      {
        "capacity_ml": 0,
        "height_mm": 14,
        "diameter_mm": 14,
        "graduation_step_ml": 0,
        "length_mm": 50
      }
    ]
  },
  {
    "id": "dropper",
    "title": "Pasteur Pipette / Dropping Pipette",
    "category": "Accessories",
    "material": "Soda-lime Glass / Borosilicate Glass",
    "standard": "DIN 12680",
    "lab_usage": "Transferring small volumes of liquid drop-by-drop in qualitative analysis.",
    "description": "Slender glass tube with a long capillary tip, used with a rubber bulb. Disposable, non-graduated. Each drop ≈ 0.05 mL. Pasteur pipettes are fire-polished at the tip for smooth flow.",
    "measurements": [
      {
        "capacity_ml": 1,
        "height_mm": 150,
        "diameter_mm": 5,
        "graduation_step_ml": 0,
        "tip_od_mm": 1
      },
      {
        "capacity_ml": 2,
        "height_mm": 230,
        "diameter_mm": 6,
        "graduation_step_ml": 0,
        "tip_od_mm": 1
      },
      {
        "capacity_ml": 3,
        "height_mm": 275,
        "diameter_mm": 7,
        "graduation_step_ml": 0,
        "tip_od_mm": 1.2
      }
    ]
  },
  {
    "id": "rubber_stopper",
    "title": "Rubber / Silicone Stopper",
    "category": "Accessories",
    "material": "Natural Rubber / Silicone / Neoprene",
    "standard": "DIN 12251",
    "lab_usage": "Sealing flasks, test tubes, and bottles; can be drilled to accept glass tubing, thermometers, or electrodes.",
    "description": "Cone-shaped stopper sized to fit standard ground-glass or plain glass openings. Numbered by size (0–13). Silicone versions tolerate higher temperatures (up to 230°C) and a wider range of chemicals than natural rubber.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 18,
        "diameter_mm": 13,
        "graduation_step_ml": 0,
        "size_number": 0,
        "top_od_mm": 13,
        "bottom_od_mm": 10
      },
      {
        "capacity_ml": 0,
        "height_mm": 22,
        "diameter_mm": 17,
        "graduation_step_ml": 0,
        "size_number": 1,
        "top_od_mm": 17,
        "bottom_od_mm": 13
      },
      {
        "capacity_ml": 0,
        "height_mm": 25,
        "diameter_mm": 21,
        "graduation_step_ml": 0,
        "size_number": 2,
        "top_od_mm": 21,
        "bottom_od_mm": 16
      },
      {
        "capacity_ml": 0,
        "height_mm": 28,
        "diameter_mm": 25,
        "graduation_step_ml": 0,
        "size_number": 3,
        "top_od_mm": 25,
        "bottom_od_mm": 20
      },
      {
        "capacity_ml": 0,
        "height_mm": 32,
        "diameter_mm": 29,
        "graduation_step_ml": 0,
        "size_number": 4,
        "top_od_mm": 29,
        "bottom_od_mm": 23
      },
      {
        "capacity_ml": 0,
        "height_mm": 36,
        "diameter_mm": 34,
        "graduation_step_ml": 0,
        "size_number": 5,
        "top_od_mm": 34,
        "bottom_od_mm": 27
      },
      {
        "capacity_ml": 0,
        "height_mm": 40,
        "diameter_mm": 40,
        "graduation_step_ml": 0,
        "size_number": 6,
        "top_od_mm": 40,
        "bottom_od_mm": 32
      }
    ]
  },
  {
    "id": "glass_tubing",
    "title": "Glass Tubing",
    "category": "Accessories",
    "material": "Borosilicate Glass 3.3 / Soda-lime Glass",
    "standard": "ISO 4802",
    "lab_usage": "Constructing gas-delivery systems, connecting apparatus, and forming custom bends and T-pieces.",
    "description": "Straight cylindrical glass tubes available in standard OD sizes. Cut to length with a glass cutter and fire-polished. Borosilicate tubing resists chemical attack and thermal shock. Connections to rubber/silicone hose or stopper holes.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 0,
        "diameter_mm": 4,
        "graduation_step_ml": 0,
        "od_mm": 4,
        "id_mm": 2,
        "wall_thickness_mm": 1,
        "length_mm": 1000
      },
      {
        "capacity_ml": 0,
        "height_mm": 0,
        "diameter_mm": 6,
        "graduation_step_ml": 0,
        "od_mm": 6,
        "id_mm": 4,
        "wall_thickness_mm": 1,
        "length_mm": 1000
      },
      {
        "capacity_ml": 0,
        "height_mm": 0,
        "diameter_mm": 8,
        "graduation_step_ml": 0,
        "od_mm": 8,
        "id_mm": 6,
        "wall_thickness_mm": 1,
        "length_mm": 1000
      },
      {
        "capacity_ml": 0,
        "height_mm": 0,
        "diameter_mm": 10,
        "graduation_step_ml": 0,
        "od_mm": 10,
        "id_mm": 7,
        "wall_thickness_mm": 1.5,
        "length_mm": 1000
      },
      {
        "capacity_ml": 0,
        "height_mm": 0,
        "diameter_mm": 12,
        "graduation_step_ml": 0,
        "od_mm": 12,
        "id_mm": 9,
        "wall_thickness_mm": 1.5,
        "length_mm": 1000
      }
    ]
  },
  {
    "id": "inoculation_loop",
    "title": "Inoculation Loop & Needle",
    "category": "Accessories",
    "material": "Nichrome / Platinum-Iridium / Disposable Plastic",
    "standard": "–",
    "lab_usage": "Transferring and streaking micro-organisms onto culture media in microbiology.",
    "description": "A wire loop (10 µL standard) or straight needle attached to a handle. Nichrome wire loops are sterilized by flaming to red heat. Disposable plastic versions are pre-sterilized by gamma irradiation.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 180,
        "diameter_mm": 4,
        "graduation_step_ml": 0,
        "loop_volume_ul": 1,
        "loop_diameter_mm": 2
      },
      {
        "capacity_ml": 0,
        "height_mm": 180,
        "diameter_mm": 4,
        "graduation_step_ml": 0,
        "loop_volume_ul": 10,
        "loop_diameter_mm": 3
      },
      {
        "capacity_ml": 0,
        "height_mm": 230,
        "diameter_mm": 5,
        "graduation_step_ml": 0,
        "loop_volume_ul": 1,
        "loop_diameter_mm": 2
      }
    ]
  },
  {
    "id": "buchner_funnel",
    "title": "Büchner Funnel",
    "category": "Accessories",
    "material": "Porcelain / Polypropylene",
    "standard": "DIN 12905",
    "lab_usage": "Vacuum filtration when combined with a filtering flask; faster than gravity filtration for large volumes.",
    "description": "Flat-bottomed cylindrical funnel with a perforated plate that holds a filter paper disc. Fits into the neck of a filtering (Büchner) flask via a rubber adapter. Porcelain funnels are chemically inert to most acids; PP versions are single-use in some setups.",
    "measurements": [
      {
        "capacity_ml": 30,
        "height_mm": 40,
        "diameter_mm": 55,
        "graduation_step_ml": 0,
        "plate_diameter_mm": 40,
        "no_holes": 12
      },
      {
        "capacity_ml": 60,
        "height_mm": 48,
        "diameter_mm": 70,
        "graduation_step_ml": 0,
        "plate_diameter_mm": 55,
        "no_holes": 19
      },
      {
        "capacity_ml": 150,
        "height_mm": 60,
        "diameter_mm": 90,
        "graduation_step_ml": 0,
        "plate_diameter_mm": 75,
        "no_holes": 28
      },
      {
        "capacity_ml": 350,
        "height_mm": 75,
        "diameter_mm": 110,
        "graduation_step_ml": 0,
        "plate_diameter_mm": 95,
        "no_holes": 43
      },
      {
        "capacity_ml": 700,
        "height_mm": 90,
        "diameter_mm": 140,
        "graduation_step_ml": 0,
        "plate_diameter_mm": 125,
        "no_holes": 70
      }
    ]
  },
  {
    "id": "fire_extinguisher",
    "title": "Fire Extinguisher (CO₂)",
    "category": "Safety",
    "material": "Steel cylinder, aluminum valve",
    "standard": "EN 3 / BS 6165",
    "lab_usage": "Suppressing Class B (flammable liquids/solvents) and Class C (electrical) fires in the laboratory.",
    "description": "Stored-pressure CO₂ extinguisher (5 kg capacity typical). Suitable for electrical fires and flammable liquid fires without leaving residue — critical for protecting laboratory instruments. Not suitable for Class A (ordinary combustibles) fires.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 480,
        "diameter_mm": 130,
        "graduation_step_ml": 0,
        "co2_kg": 2,
        "range_m": 2
      },
      {
        "capacity_ml": 0,
        "height_mm": 620,
        "diameter_mm": 152,
        "graduation_step_ml": 0,
        "co2_kg": 5,
        "range_m": 3
      }
    ]
  },
  {
    "id": "eye_wash_station",
    "title": "Eye Wash Station",
    "category": "Safety",
    "material": "ABS Plastic / Stainless Steel",
    "standard": "ANSI Z358.1",
    "lab_usage": "Emergency eye decontamination after exposure to chemical splashes.",
    "description": "Plumbed or self-contained gravity-fed eyewash unit providing a controlled, gentle flow of tepid water (15.6–37.8°C) for a minimum 15-minute continuous flush. Must be reachable within 10 seconds from any hazard area. Weekly activation recommended.",
    "measurements": [
      {
        "capacity_ml": 0,
        "height_mm": 1000,
        "diameter_mm": 300,
        "graduation_step_ml": 0,
        "flow_lpm": 1.5,
        "flush_min": 15
      },
      {
        "capacity_ml": 0,
        "height_mm": 1100,
        "diameter_mm": 350,
        "graduation_step_ml": 0,
        "flow_lpm": 1.5,
        "flush_min": 15
      }
    ]
  }
];
