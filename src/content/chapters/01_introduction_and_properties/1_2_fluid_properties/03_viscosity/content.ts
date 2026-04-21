import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_2_3",
    title: "Viscosity (Dynamic & Kinematic)",
    chapter: "01_introduction_and_properties",
    subchapter: "1_2_fluid_properties",
    topic: "microlearning",
    outcomes: [
      "Distinguish between dynamic and kinematic viscosity.",
      "Understand the units and physical meaning of both."
    ]
  },
  hook: {
    imageDescription: "A race between three fluids: water, oil, and honey, being poured down an inclined plane. The water is winning by a lot."
  },
  interaction: {
    type: "viscosity_race",
    instruction: "Select different fluids and start the race. Observe how they flow down the slope.",
    probing_question: "The honey is 'thicker', but is it also 'heavier'? Does its weight help it move faster, or does its 'stickiness' hold it back more?"
  },
  theory: {
    title: "Dynamic vs Kinematic Viscosity",
    content: "**Dynamic Viscosity** (μ) is the internal resistance to shear. **Kinematic Viscosity** (ν) is the ratio of dynamic viscosity to density (ν = μ/ρ). It represents the 'diffusivity' of momentum.",
  },
  levels: {
    easy: {
      hook_prompt: "Why does water splash but honey just oozes?",
      hook_commitment: "Is viscosity just 'thickness'?",
      socratic: [
        { question: "If you stir a cup of water and a cup of honey, which one keeps spinning longer after you stop?", expected_concept: "momentum_retention" },
        { question: "Does 'runny' mean low viscosity or high viscosity?", expected_concept: "inverse_relationship" }
      ],
      theory_analogy: "Dynamic viscosity is like how much a crowd resists you pushing through. Kinematic viscosity is how fast that 'push' spreads to the rest of the crowd.",
      transfer_prompt: "Which is more viscous: Air or Water?",
      transfer_real_world: "Motor oil is rated by its viscosity (e.g., 10W-30). This tells you how well it will flow in your engine.",
      challenges: [
        { question: "Kinematic viscosity is dynamic viscosity divided by ________.", hints: ["Think about the formula ν = μ/ρ."], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Consider two fluids with the same dynamic viscosity, but one is ten times denser than the other. Which one will be harder to accelerate? Which one has the higher kinematic viscosity?",
      hook_commitment: "Does density 'dilute' the effect of viscosity?",
      socratic: [
        { question: "If ν = μ/ρ, and μ is constant, how does increasing ρ affect ν?", expected_concept: "mathematical_ratio" },
        { question: "In a pipe flow, does the 'thickness' of the boundary layer depend on μ or ν?", expected_concept: "momentum_diffusion" }
      ],
      theory_analogy: "Dynamic viscosity is the 'friction' force. Kinematic viscosity is the 'friction' relative to the 'inertia' of the fluid.",
      transfer_prompt: "Why do we use Stokes (cm²/s) for kinematic viscosity but Poise (g/cm·s) for dynamic?",
      transfer_real_world: "In aerodynamics, kinematic viscosity is used to calculate the Reynolds number, which determines if flow is laminar or turbulent.",
      challenges: [
        { question: "If μ = 0.001 Pa·s and ρ = 1000 kg/m³, what is ν?", hints: ["ν = μ/ρ"], level: 'standard' }
      ]
    },
    hard: {
      hook_prompt: "Analyze the units of kinematic viscosity [L²/T]. Why is this the same unit as thermal diffusivity and mass diffusivity? What does this tell us about the 'transport' nature of viscosity?",
      hook_commitment: "Is viscosity a property of the fluid's state or its molecular structure?",
      socratic: [
        { question: "How does the molecular mean free path relate to the kinematic viscosity in a gas?", expected_concept: "kinetic_theory" },
        { question: "In the Navier-Stokes equations, why is the viscous term multiplied by ν when written in kinematic form?", expected_concept: "equation_normalization" }
      ],
      theory_analogy: "Kinematic viscosity is the diffusion coefficient for momentum, analogous to how heat diffuses through a solid.",
      transfer_prompt: "Discuss the 'Stokes' unit. Why is it named after Sir George Gabriel Stokes, and what was his contribution to fluid dynamics?",
      transfer_real_world: "In chemical engineering, the Schmidt Number (ν/D) compares the diffusion of momentum to the diffusion of mass.",
      challenges: [
        { question: "Convert 1 centiStokes to m²/s.", hints: ["1 cSt = 10^-6 m²/s."], level: 'advanced' }
      ]
    }
  }
};
