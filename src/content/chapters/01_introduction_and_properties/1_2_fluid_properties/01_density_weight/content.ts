import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_2_1",
    title: "Density & Specific Weight",
    chapter: "01_introduction_and_properties",
    subchapter: "1_2_fluid_properties",
    topic: "microlearning",
    outcomes: [
      "Define density and specific weight.",
      "Understand the relationship between mass, weight, and volume."
    ]
  },
  hook: {
    imageDescription: "A scale with a small cube of lead on one side and a large block of wood on the other, perfectly balanced. High-quality 3D render."
  },
  interaction: {
    type: "density_lab",
    instruction: "Change the material of the block and observe its mass and volume. Calculate the density.",
    probing_question: "If you cut the block in half, does its density change? What about its mass?"
  },
  theory: {
    title: "Density and Specific Weight",
    content: "**Density** (ρ) is mass per unit volume (kg/m³). **Specific Weight** (γ) is weight per unit volume (N/m³). They are related by gravity: γ = ρg.",
  },
  levels: {
    easy: {
      hook_prompt: "Why does a small piece of lead feel heavier than a large piece of wood?",
      hook_commitment: "Is density the same as weight?",
      socratic: [
        { question: "If you have two identical boxes, one full of feathers and one full of rocks, which is more dense?", expected_concept: "mass_per_volume" },
        { question: "Does a gallon of water weigh more than a gallon of air?", expected_concept: "fluid_density" }
      ],
      theory_analogy: "Density is like how many people are in a room. Specific weight is how much they all weigh together.",
      transfer_prompt: "Does the density of water change if you pour it into a different shaped glass?",
      transfer_real_world: "Ships float because their average density is less than water, even though they are made of heavy steel.",
      challenges: [
        { question: "Density is defined as ________ divided by volume.", hints: ["What is the 'm' in m/V?"], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Consider a gas in a piston. If you compress it to half its volume, what happens to its density? What about its specific weight?",
      hook_commitment: "Does mass change during compression?",
      socratic: [
        { question: "If ρ = m/V and m is constant, what is the relationship between ρ and V?", expected_concept: "inverse_proportionality" },
        { question: "If you take the piston to the Moon, does ρ change? Does γ change?", expected_concept: "gravity_dependence" }
      ],
      theory_analogy: "Density is an intrinsic property; specific weight depends on where you are in the universe.",
      transfer_prompt: "Why do we use specific weight in civil engineering (like dam design) more often than density?",
      transfer_real_world: "Hydraulic systems use the weight of fluid to transmit power, so specific weight is a key design parameter.",
      challenges: [
        { question: "If ρ = 1000 kg/m³ and g = 9.81 m/s², what is γ?", hints: ["γ = ρg"], level: 'standard' }
      ]
    },
    hard: {
      hook_prompt: "Analyze the compressibility of liquids versus gases. Why can we often treat liquid density as constant (incompressible) while gas density varies significantly with pressure and temperature?",
      hook_commitment: "Is any fluid truly incompressible?",
      socratic: [
        { question: "Relate density to the Ideal Gas Law (P = ρRT). How does temperature affect gas density at constant pressure?", expected_concept: "thermal_expansion" },
        { question: "What is the Bulk Modulus of a fluid, and how does it relate to density changes?", expected_concept: "compressibility" }
      ],
      theory_analogy: "Density is the macroscopic result of the molecular packing and atomic mass of the substance.",
      transfer_prompt: "In deep-sea exploration, does the density of water increase significantly at the bottom of the Mariana Trench?",
      transfer_real_world: "Acoustics in the ocean (sonar) depends on density gradients, which are affected by both temperature and salinity.",
      challenges: [
        { question: "Calculate the specific weight of air at 20°C and 1 atm.", hints: ["Use P = ρRT to find ρ first."], level: 'advanced' }
      ]
    }
  }
};
