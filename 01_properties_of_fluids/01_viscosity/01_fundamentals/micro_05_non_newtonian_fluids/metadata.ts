
import { LessonContent } from '../../../../types';

export const MICRO_05_DATA: LessonContent = {
  metadata: {
    id: "micro_05",
    title: "Non-Newtonian Fluids",
    chapter: "01_properties_of_fluids",
    subchapter: "01_viscosity",
    topic: "01_fundamentals",
    outcomes: [
      "Define Newtonian vs. Non-Newtonian fluids.",
      "Distinguish between shear-thinning (pseudoplastic) and shear-thickening (dilatant) behavior.",
      "Understand that viscosity can be a function of force, not just a constant."
    ]
  },
  hook: {
    type: "mystery_hook",
    visual: "oobleck_impact",
    prompt: "If you run across a pool of cornstarch and water, you stay on top. If you stand still, you sink. Is it a solid or a liquid?",
    commitment_question: "Does the viscosity of a fluid always stay the same regardless of how hard you stir it?",
    imageDescription: "A person running across a white liquid surface without sinking, while another person nearby is slowly sinking into the same liquid. The liquid is Oobleck (cornstarch and water)."
  },
  interaction: {
    type: "rheology_sim",
    visual: "stress_vs_strain_graph",
    instruction: "Stir the fluid at different speeds. Watch how the 'Apparent Viscosity' changes for Ketchup (thinning) vs. Oobleck (thickening).",
    probing_question: "Why does ketchup need a 'thump' on the bottle to start flowing?",
    controls: {
      shear_rate_slider: { label: "Stirring Speed", min: 0, max: 100, unit: "rpm" },
      fluid_selector: { label: "Fluid Type", options: ["Newtonian", "Shear-Thinning", "Shear-Thickening"] }
    }
  },
  socratic: [
    {
      question: "For water, if you stir twice as fast, the resistance doubles linearly. What did you notice for the 'Shear-Thinning' fluid?",
      expected_concept: "resistance_increases_less_than_linearly"
    },
    {
      question: "In shear-thinning fluids like paint, long molecules align with the flow. Does this alignment make it easier or harder for layers to slide?",
      expected_concept: "easier_to_slide"
    },
    {
      question: "If a fluid gets 'harder' to move the faster you push it (like Oobleck), what is happening to its viscosity?",
      expected_concept: "viscosity_increases_with_stress"
    }
  ],
  theory: {
    title: "Beyond Newton",
    content: "Newtonian fluids (water, air) have a constant viscosity. Non-Newtonian fluids have an 'Apparent Viscosity' that changes depending on the shear rate (how fast they are deformed).",
    analogy: "Newtonian is like walking through a clear room. Shear-thinning is like a crowded room where people move out of your way as you run. Shear-thickening is like a room full of people who grab onto each other the harder you try to push through.",
    definitions: [
      { term: "Shear-Thinning", desc: "Viscosity ↓ as Stirring ↑ (e.g., Blood, Paint, Ketchup)" },
      { term: "Shear-Thickening", desc: "Viscosity ↑ as Stirring ↑ (e.g., Oobleck, Wet Sand)" }
    ]
  },
  transfer: {
    prompt: "Modern body armor sometimes uses 'Liquid Armor'—a fluid that is flexible normally but turns rock-hard instantly upon bullet impact. Which type of Non-Newtonian behavior is this?",
    real_world: "Quicksand is a non-Newtonian fluid. The more you struggle (higher shear), the more it can trap you depending on its specific type (usually shear-thinning, but complex!)."
  },
  challenges: [
    {
      level: "conceptual",
      question: "If you are painting a wall, why is it beneficial for the paint to be shear-thinning?",
      hints: ["Think about the brush stroke vs. the paint sitting on the wall after.", "Does it flow easily under the brush? Does it drip off the wall later?"]
    }
  ]
};
