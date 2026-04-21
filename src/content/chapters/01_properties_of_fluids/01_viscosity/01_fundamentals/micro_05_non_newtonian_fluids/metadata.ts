
import { LessonContent } from '../../../../../../utils/types';

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
  theory: {
    title: "Beyond Newton",
    content: "Newtonian fluids (water, air) have a constant viscosity. Non-Newtonian fluids have an 'Apparent Viscosity' that changes depending on the shear rate (how fast they are deformed).",
    definitions: [
      { term: "Shear-Thinning", desc: "Viscosity ↓ as Stirring ↑ (e.g., Blood, Paint, Ketchup)" },
      { term: "Shear-Thickening", desc: "Viscosity ↑ as Stirring ↑ (e.g., Oobleck, Wet Sand)" }
    ]
  },
  levels: {
    easy: {
      hook_prompt: "Have you ever noticed that ketchup is hard to get out of the bottle until you give it a good shake?",
      hook_commitment: "Does shaking the ketchup bottle change how 'thick' the ketchup is?",
      socratic: [
        { question: "When you shake the bottle, does the ketchup become more like water for a moment?", expected_concept: "thinning_behavior" },
        { question: "If you stir a bowl of water, does it get thicker or stay the same?", expected_concept: "newtonian_behavior" }
      ],
      theory_analogy: "Newtonian is like walking through a clear room. Shear-thinning is like a crowded room where people move out of your way as you run. Shear-thickening is like a room full of people who grab onto each other the harder you try to push through.",
      transfer_prompt: "If you are playing with Oobleck (cornstarch and water), should you move your hands fast or slow if you want them to sink in?",
      transfer_real_world: "Paint is designed to be easy to spread with a brush (thinning) but stay on the wall without dripping (thickening when still).",
      challenges: [
        { question: "Is water a Newtonian or Non-Newtonian fluid?", hints: ["Does its thickness change when you stir it?"], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "If you run across a pool of cornstarch and water, you stay on top. If you stand still, you sink. Is it a solid or a liquid?",
      hook_commitment: "Does the viscosity of a fluid always stay the same regardless of how hard you stir it?",
      socratic: [
        { question: "For water, if you stir twice as fast, the resistance doubles linearly. What did you notice for the 'Shear-Thinning' fluid?", expected_concept: "resistance_increases_less_than_linearly" },
        { question: "In shear-thinning fluids like paint, long molecules align with the flow. Does this alignment make it easier or harder for layers to slide?", expected_concept: "easier_to_slide" }
      ],
      theory_analogy: "Newtonian is like walking through a clear room. Shear-thinning is like a crowded room where people move out of your way as you run. Shear-thickening is like a room full of people who grab onto each other the harder you try to push through.",
      transfer_prompt: "Modern body armor sometimes uses 'Liquid Armor'—a fluid that is flexible normally but turns rock-hard instantly upon bullet impact. Which type of Non-Newtonian behavior is this?",
      transfer_real_world: "Quicksand is a non-Newtonian fluid. The more you struggle, the more it can trap you depending on its specific type.",
      challenges: [
        { question: "If you are painting a wall, why is it beneficial for the paint to be shear-thinning?", hints: ["Think about the brush stroke vs. the paint sitting on the wall after."], level: 'conceptual' }
      ]
    },
    hard: {
      hook_prompt: "Examine the Power-Law model $\tau = K (\gamma)^n$. How do the values of the flow behavior index $n$ characterize different types of fluids?",
      hook_commitment: "Discuss the physical origin of thixotropy and rheopexy. How do these time-dependent behaviors differ from shear-thinning and shear-thickening?",
      socratic: [
        { question: "If $n < 1$ in the Power-Law model, what happens to the apparent viscosity $\eta = \tau / \gamma$ as the shear rate $\gamma$ increases?", expected_concept: "pseudoplastic_behavior" },
        { question: "Bingham plastics require a yield stress $\tau_0$ before they begin to flow. How does this modify Newton's Law of Viscosity?", expected_concept: "yield_stress_model" }
      ],
      theory_analogy: "Non-Newtonian behavior often arises from the complex microstructure of the fluid, such as polymer chains disentangling or particles forming clusters under stress.",
      transfer_prompt: "A fluid follows the Power-Law model with $K = 2$ $Pa \cdot s^n$ and $n = 0.5$. Calculate the apparent viscosity at a shear rate of 10 $s^{-1}$ and 100 $s^{-1}$.",
      transfer_real_world: "Drilling muds used in the oil industry are carefully engineered Non-Newtonian fluids that can carry rock cuttings to the surface when flowing but turn into a gel when the pumps stop.",
      challenges: [
        { question: "Sketch the $\tau$ vs $\gamma$ curves for Newtonian, Pseudoplastic, and Dilatant fluids on the same graph. Label the axes.", hints: ["Newtonian is linear.", "Pseudoplastic is concave down.", "Dilatant is concave up."], level: 'advanced' }
      ]
    }
  }
};
