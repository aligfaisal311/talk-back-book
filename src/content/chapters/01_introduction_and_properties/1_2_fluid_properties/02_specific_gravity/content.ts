import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_2_2",
    title: "Specific Gravity",
    chapter: "01_introduction_and_properties",
    subchapter: "1_2_fluid_properties",
    topic: "microlearning",
    outcomes: [
      "Define specific gravity.",
      "Use specific gravity to compare fluid densities."
    ]
  },
  hook: {
    imageDescription: "A glass with layers of honey, water, and oil. Each layer is distinct and colorful. A grape is floating on the honey but sunk in the oil."
  },
  interaction: {
    type: "sg_mixer",
    instruction: "Drop different objects into the fluid column. Observe which ones float and which ones sink based on their SG.",
    probing_question: "If an object has an SG of 1.0, where will it sit in a tank of water?"
  },
  theory: {
    title: "Specific Gravity (Relative Density)",
    content: "**Specific Gravity** (SG) is the ratio of the density of a fluid to the density of a standard fluid (usually water at 4°C for liquids). It is a dimensionless quantity.",
  },
  levels: {
    easy: {
      hook_prompt: "If oil has an SG of 0.8, will it float on water?",
      hook_commitment: "Is SG just a way to compare things to water?",
      socratic: [
        { question: "Water has an SG of 1.0. If something is 'heavier' than water for the same volume, is its SG > 1 or < 1?", expected_concept: "relative_density" },
        { question: "If a fluid has an SG of 2, is it twice as dense as water?", expected_concept: "ratio_meaning" }
      ],
      theory_analogy: "SG is like a 'score' where water is 1. Anything less than 1 is a 'floater', anything more is a 'sinker'.",
      transfer_prompt: "Why do we use SG instead of density in many engineering tables?",
      transfer_real_world: "Hydrometers measure the SG of battery acid or beer to check their concentration or alcohol content.",
      challenges: [
        { question: "The SG of Mercury is 13.6. What is its density in kg/m³?", hints: ["Density of water = 1000 kg/m³."], level: 'standard' }
      ]
    },
    medium: {
      hook_prompt: "Why is the 'standard' for SG usually water at 4°C? What happens to the density of water at other temperatures?",
      hook_commitment: "Does SG change with temperature?",
      socratic: [
        { question: "If the density of your fluid decreases with heat, but the 'standard' water density is fixed, what happens to the SG?", expected_concept: "temperature_dependence" },
        { question: "For gases, the standard is often air. Why don't we use water as the standard for gas SG?", expected_concept: "phase_consistency" }
      ],
      theory_analogy: "SG is a universal language for density that doesn't care about your unit system (Metric or Imperial).",
      transfer_prompt: "If you mix two fluids with different SGs, what determines the SG of the mixture?",
      transfer_real_world: "In the oil industry, API gravity is used instead of SG, but they are directly related. It helps classify crude oil types.",
      challenges: [
        { question: "Calculate the SG of a fluid that weighs 8 kN/m³.", hints: ["SG = γ_fluid / γ_water. γ_water ≈ 9.81 kN/m³."], level: 'standard' }
      ]
    },
    hard: {
      hook_prompt: "Analyze the precision of SG measurements. How do factors like dissolved air or salinity affect the SG of seawater, and why is this critical for oceanography?",
      hook_commitment: "Is SG truly dimensionless in all contexts?",
      socratic: [
        { question: "How does the SG of a fluid relate to its buoyancy force on a submerged object?", expected_concept: "archimedes_link" },
        { question: "In a centrifuge, does the 'effective' SG of particles change?", expected_concept: "centrifugal_acceleration" }
      ],
      theory_analogy: "SG is the normalized density of a substance, providing a scale-invariant measure of its mass distribution.",
      transfer_prompt: "Discuss the use of SG in mineral processing (e.g., froth flotation). How is SG used to separate valuable ore from waste rock?",
      transfer_real_world: "The 'Dead Sea' has such a high SG (due to salt) that humans float effortlessly on its surface.",
      challenges: [
        { question: "If a fluid has an SG of 1.26 at 20°C, what is its specific volume?", hints: ["Specific volume = 1/ρ."], level: 'advanced' }
      ]
    }
  }
};
