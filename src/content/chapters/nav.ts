
import { Curriculum } from '../../utils/types';

export const CURRICULUM: Curriculum = {
  chapters: [
    {
      id: "01_introduction_and_properties",
      title: "1. Introduction & Fluid Properties",
      subchapters: [
        {
          id: "1_1_what_is_a_fluid",
          title: "1.1 What is a Fluid?",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "1_1_1", title: "Solid vs Fluid Behavior", path: "01_introduction_and_properties/1_1_what_is_a_fluid/01_solid_vs_fluid", isLocked: false },
                { id: "1_1_2", title: "Shear Stress Response", path: "01_introduction_and_properties/1_1_what_is_a_fluid/02_shear_stress", isLocked: false },
                { id: "1_1_3", title: "Continuum Hypothesis", path: "01_introduction_and_properties/1_1_what_is_a_fluid/03_continuum", isLocked: false }
              ]
            }
          ]
        },
        {
          id: "1_2_fluid_properties",
          title: "1.2 Fluid Properties",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "1_2_1", title: "Density & Specific Weight", path: "01_introduction_and_properties/1_2_fluid_properties/01_density_weight", isLocked: false },
                { id: "1_2_2", title: "Specific Gravity", path: "01_introduction_and_properties/1_2_fluid_properties/02_specific_gravity", isLocked: false },
                { id: "1_2_3", title: "Viscosity (Dynamic & Kinematic)", path: "01_introduction_and_properties/1_2_fluid_properties/03_viscosity", isLocked: false },
                { id: "1_2_4", title: "Temperature Effects", path: "01_introduction_and_properties/1_2_fluid_properties/04_temp_effects", isLocked: false }
              ]
            }
          ]
        },
        {
          id: "1_3_surface_phenomena",
          title: "1.3 Surface Phenomena",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "1_3_1", title: "Surface Tension", path: "01_introduction_and_properties/1_3_surface_phenomena/01_surface_tension", isLocked: false },
                { id: "1_3_2", title: "Capillarity", path: "01_introduction_and_properties/1_3_surface_phenomena/02_capillarity", isLocked: false },
                { id: "1_3_3", title: "Contact Angle", path: "01_introduction_and_properties/1_3_surface_phenomena/03_contact_angle", isLocked: false }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "02_fluid_statics",
      title: "2. Fluid Statics",
      subchapters: [
        {
          id: "2_1_pressure_variation",
          title: "2.1 Pressure Variation",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "2_1_1", title: "Hydrostatic Law", path: "02_fluid_statics/2_1_pressure_variation/01_hydrostatic_law", isLocked: true },
                { id: "2_1_2", title: "Pressure Distribution", path: "02_fluid_statics/2_1_pressure_variation/02_pressure_dist", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "2_2_measurement",
          title: "2.2 Measurement of Pressure",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "2_2_1", title: "Manometers", path: "02_fluid_statics/2_2_measurement/01_manometers", isLocked: true },
                { id: "2_2_2", title: "Bourdon Gauge", path: "02_fluid_statics/2_2_measurement/02_bourdon", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "2_3_forces",
          title: "2.3 Forces on Surfaces",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "2_3_1", title: "Plane Surfaces", path: "02_fluid_statics/2_3_forces/01_plane", isLocked: true },
                { id: "2_3_2", title: "Curved Surfaces", path: "02_fluid_statics/2_3_forces/02_curved", isLocked: true },
                { id: "2_3_3", title: "Center of Pressure", path: "02_fluid_statics/2_3_forces/03_center_pressure", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "2_4_buoyancy",
          title: "2.4 Buoyancy & Stability",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "2_4_1", title: "Archimedes Principle", path: "02_fluid_statics/2_4_buoyancy/01_archimedes", isLocked: true },
                { id: "2_4_2", title: "Metacenter", path: "02_fluid_statics/2_4_buoyancy/02_metacenter", isLocked: true },
                { id: "2_4_3", title: "Stability of Floating Bodies", path: "02_fluid_statics/2_4_buoyancy/03_stability", isLocked: true }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "03_fluid_kinematics",
      title: "3. Fluid Kinematics",
      subchapters: [
        {
          id: "3_1_description",
          title: "3.1 Description of Flow",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "3_1_1", title: "Eulerian vs Lagrangian", path: "03_fluid_kinematics/3_1_description/01_euler_vs_lagrange", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "3_2_types",
          title: "3.2 Types of Flow",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "3_2_1", title: "Steady / Unsteady", path: "03_fluid_kinematics/3_2_types/01_steady_unsteady", isLocked: true },
                { id: "3_2_2", title: "Uniform / Non-uniform", path: "03_fluid_kinematics/3_2_types/02_uniform_nonuniform", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "3_3_visualization",
          title: "3.3 Flow Visualization",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "3_3_1", title: "Streamline", path: "03_fluid_kinematics/3_3_visualization/01_streamline", isLocked: true },
                { id: "3_3_2", title: "Pathline", path: "03_fluid_kinematics/3_3_visualization/02_pathline", isLocked: true },
                { id: "3_3_3", title: "Streakline", path: "03_fluid_kinematics/3_3_visualization/03_streakline", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "3_4_motion",
          title: "3.4 Fluid Motion",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "3_4_1", title: "Velocity Field", path: "03_fluid_kinematics/3_4_motion/01_velocity_field", isLocked: true },
                { id: "3_4_2", title: "Acceleration", path: "03_fluid_kinematics/3_4_motion/02_acceleration", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "3_5_deformation",
          title: "3.5 Deformation & Rotation",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "3_5_1", title: "Vorticity", path: "03_fluid_kinematics/3_5_deformation/01_vorticity", isLocked: true },
                { id: "3_5_2", title: "Strain Rate", path: "03_fluid_kinematics/3_5_deformation/02_strain_rate", isLocked: true }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "04_fluid_dynamics",
      title: "4. Fluid Dynamics",
      subchapters: [
        {
          id: "4_1_basic_laws",
          title: "4.1 Basic Laws",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "4_1_1", title: "Continuity Equation", path: "04_fluid_dynamics/4_1_basic_laws/01_continuity", isLocked: true },
                { id: "4_1_2", title: "Momentum Equation", path: "04_fluid_dynamics/4_1_basic_laws/02_momentum", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "4_2_energy",
          title: "4.2 Energy Equation",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "4_2_1", title: "Bernoulli Equation", path: "04_fluid_dynamics/4_2_energy/01_bernoulli", isLocked: true },
                { id: "4_2_2", title: "Assumptions & Limitations", path: "04_fluid_dynamics/4_2_energy/02_assumptions", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "4_3_applications",
          title: "4.3 Applications",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "4_3_1", title: "Venturimeter", path: "04_fluid_dynamics/4_3_applications/01_venturimeter", isLocked: true },
                { id: "4_3_2", title: "Orifice Meter", path: "04_fluid_dynamics/4_3_applications/02_orifice", isLocked: true },
                { id: "4_3_3", title: "Pitot Tube", path: "04_fluid_dynamics/4_3_applications/03_pitot", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "4_4_energy_concepts",
          title: "4.4 Energy Concepts",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "4_4_1", title: "EGL & HGL", path: "04_fluid_dynamics/4_4_energy_concepts/01_egl_hgl", isLocked: true },
                { id: "4_4_2", title: "Head Losses", path: "04_fluid_dynamics/4_4_energy_concepts/02_head_losses", isLocked: true }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "05_internal_flow",
      title: "5. Internal Flow (Pipe Flow)",
      subchapters: [
        {
          id: "5_1_laminar",
          title: "5.1 Laminar Flow",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "5_1_1", title: "Hagen–Poiseuille Law", path: "05_internal_flow/5_1_laminar/01_hagen_poiseuille", isLocked: true },
                { id: "5_1_2", title: "Velocity Profile", path: "05_internal_flow/5_1_laminar/02_velocity_profile", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "5_2_turbulent",
          title: "5.2 Turbulent Flow",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "5_2_1", title: "Reynolds Number", path: "05_internal_flow/5_2_turbulent/01_reynolds_number", isLocked: true },
                { id: "5_2_2", title: "Flow Regimes", path: "05_internal_flow/5_2_turbulent/02_flow_regimes", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "5_3_friction",
          title: "5.3 Friction Losses",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "5_3_1", title: "Darcy-Weisbach Equation", path: "05_internal_flow/5_3_friction/01_darcy_weisbach", isLocked: true },
                { id: "5_3_2", title: "Moody Chart", path: "05_internal_flow/5_3_friction/02_moody_chart", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "5_4_minor_losses",
          title: "5.4 Minor Losses",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "5_4_1", title: "Bends, Valves, Fittings", path: "05_internal_flow/5_4_minor_losses/01_bends_valves", isLocked: true }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "06_external_flow",
      title: "6. External Flow",
      subchapters: [
        {
          id: "6_1_boundary_layer",
          title: "6.1 Boundary Layer Theory",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "6_1_1", title: "Development", path: "06_external_flow/6_1_boundary_layer/01_development", isLocked: true },
                { id: "6_1_2", title: "Thickness", path: "06_external_flow/6_1_boundary_layer/02_thickness", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "6_2_drag_lift",
          title: "6.2 Drag & Lift",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "6_2_1", title: "Pressure Drag", path: "06_external_flow/6_2_drag_lift/01_pressure_drag", isLocked: true },
                { id: "6_2_2", title: "Skin Friction", path: "06_external_flow/6_2_drag_lift/02_skin_friction", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "6_3_separation",
          title: "6.3 Flow Separation",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "6_3_1", title: "Causes", path: "06_external_flow/6_3_separation/01_causes", isLocked: true },
                { id: "6_3_2", title: "Control", path: "06_external_flow/6_3_separation/02_control", isLocked: true }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "07_dimensional_analysis",
      title: "7. Dimensional Analysis & Similitude",
      subchapters: [
        {
          id: "7_1_analysis",
          title: "7.1 Dimensional Analysis",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "7_1_1", title: "Buckingham π Theorem", path: "07_dimensional_analysis/7_1_analysis/01_buckingham_pi", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "7_2_numbers",
          title: "7.2 Dimensionless Numbers",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "7_2_1", title: "Reynolds, Froude, Mach", path: "07_dimensional_analysis/7_2_numbers/01_dimensionless_numbers", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "7_3_model",
          title: "7.3 Model Analysis",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "7_3_1", title: "Similarity Laws", path: "07_dimensional_analysis/7_3_model/01_similarity_laws", isLocked: true },
                { id: "7_3_2", title: "Scale Effects", path: "07_dimensional_analysis/7_3_model/02_scale_effects", isLocked: true }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "08_open_channel",
      title: "8. Open Channel Flow",
      subchapters: [
        {
          id: "8_1_types",
          title: "8.1 Flow Types",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "8_1_1", title: "Uniform / Non-uniform", path: "08_open_channel/8_1_types/01_uniform_nonuniform", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "8_2_energy",
          title: "8.2 Energy Concepts",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "8_2_1", title: "Specific Energy", path: "08_open_channel/8_2_energy/01_specific_energy", isLocked: true },
                { id: "8_2_2", title: "Critical Depth", path: "08_open_channel/8_2_energy/02_critical_depth", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "8_3_jump",
          title: "8.3 Hydraulic Jump",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "8_3_1", title: "Energy Dissipation", path: "08_open_channel/8_3_jump/01_energy_dissipation", isLocked: true }
              ]
            }
          ]
        },
        {
          id: "8_4_resistance",
          title: "8.4 Flow Resistance",
          topics: [
            {
              id: "microlearning",
              title: "Microlearning",
              microLessons: [
                { id: "8_4_1", title: "Manning’s Equation", path: "08_open_channel/8_4_resistance/01_mannings_equation", isLocked: true }
              ]
            }
          ]
        }
      ]
    }
  ]
};
