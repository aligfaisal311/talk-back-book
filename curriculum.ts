
import { Curriculum } from './types';

export const CURRICULUM: Curriculum = {
  chapters: [
    {
      id: "01_properties_of_fluids",
      title: "1. Properties of Fluids",
      subchapters: [
        {
          id: "01_viscosity",
          title: "1.1 Viscosity",
          topics: [
            {
              id: "01_fundamentals",
              title: "1.1.1 Fundamentals",
              microLessons: [
                { id: "micro_01", title: "1.1.1.1 Physical Meaning: Honey vs Water", path: "01_properties_of_fluids/01_viscosity/01_fundamentals/micro_01_physical_meaning_honey_vs_water", isLocked: false },
                { id: "micro_02", title: "1.1.1.2 Newton's Law of Viscosity", path: "01_properties_of_fluids/01_viscosity/01_fundamentals/micro_02_newtons_law_of_viscosity", isLocked: false },
                { id: "micro_03", title: "1.1.1.3 Dynamic vs Kinematic Viscosity", path: "01_properties_of_fluids/01_viscosity/01_fundamentals/micro_03_dynamic_vs_kinematic_viscosity", isLocked: false },
                { id: "micro_04", title: "1.1.1.4 Temperature Effects", path: "01_properties_of_fluids/01_viscosity/01_fundamentals/micro_04_temperature_effects_liquids_vs_gases", isLocked: false },
                { id: "micro_05", title: "1.1.1.5 Non-Newtonian Fluids", path: "01_properties_of_fluids/01_viscosity/01_fundamentals/micro_05_non_newtonian_fluids", isLocked: false }
              ]
            }
          ]
        }
      ]
    }
  ]
};
