import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_3_1",
    title: "Surface Tension",
    chapter: "01_introduction_and_properties",
    subchapter: "1_3_surface_phenomena",
    topic: "microlearning",
    outcomes: [
      "Define surface tension as energy per unit area or force per unit length.",
      "Understand the molecular cause of surface tension."
    ]
  },
  hook: {
    imageDescription: "A water strider insect standing on the surface of a pond. You can see the tiny 'dimples' in the water surface where its legs touch, but it doesn't sink."
  },
  interaction: {
    type: "surface_tension_sim",
    instruction: "Place a needle on the water surface. Add a drop of soap and see what happens.",
    probing_question: "The needle is made of steel, which is much denser than water. Why doesn't it sink immediately? And why does the soap make it fall?"
  },
  theory: {
    title: "The Skin of a Liquid",
    content: "**Surface Tension** (σ) is the result of unbalanced cohesive forces at the interface of a liquid. Molecules inside the liquid are pulled in all directions, but those at the surface are only pulled inward and sideways, creating a 'stretched membrane' effect.",
  },
  levels: {
    easy: {
      hook_prompt: "How can a heavy insect walk on water without sinking?",
      hook_commitment: "Is the surface of water like a thin sheet of rubber?",
      socratic: [
        { question: "If you pull on a rubber band, it gets tight. Are the water molecules at the surface 'pulling' on each other?", expected_concept: "surface_cohesion" },
        { question: "Why do raindrops form round spheres instead of squares?", expected_concept: "minimum_surface_area" }
      ],
      theory_analogy: "Surface tension is like a crowd of people at the edge of a cliff holding onto each other's belts so nobody falls off.",
      transfer_prompt: "Why does hot water clean dishes better than cold water? (Hint: Think about surface tension).",
      transfer_real_world: "Soap reduces surface tension, allowing water to 'wet' surfaces and get into tiny cracks to lift away dirt.",
      challenges: [
        { question: "Surface tension acts to ________ the surface area of a liquid.", hints: ["Minimize or Maximize?"], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Consider a spherical droplet of radius R. The surface tension σ pulls the surface inward, creating an internal pressure ΔP. What is the relationship between ΔP, σ, and R?",
      hook_commitment: "Is the pressure inside a small bubble higher or lower than in a large bubble?",
      socratic: [
        { question: "If you have a soap bubble, it has *two* surfaces (inside and outside). Does that double the surface tension force?", expected_concept: "double_interface" },
        { question: "How does temperature affect surface tension? Think about molecular motion.", expected_concept: "thermal_agitation" }
      ],
      theory_analogy: "Surface tension is the 'cost' of creating new surface area. Nature is cheap and wants to spend as little energy as possible.",
      transfer_prompt: "Why do some liquids 'bead up' on a surface while others spread out completely?",
      transfer_real_world: "Lungs use 'surfactants' to lower the surface tension of the fluid lining the alveoli, making it easier for us to breathe.",
      challenges: [
        { question: "For a droplet, ΔP = 2σ/R. If the radius is halved, what happens to the internal pressure?", hints: ["It's an inverse relationship."], level: 'standard' }
      ]
    },
    hard: {
      hook_prompt: "Derive the Young-Laplace equation for a general curved surface. How does the surface tension relate to the principal radii of curvature?",
      hook_commitment: "Can we define surface tension as a Gibbs free energy per unit area?",
      socratic: [
        { question: "Analyze the thermodynamics of a surface. Why is the surface tension of a pure liquid always positive?", expected_concept: "surface_excess_energy" },
        { question: "How does the presence of a solute (like salt) change the surface tension of water at the molecular level?", expected_concept: "solute_partitioning" }
      ],
      theory_analogy: "Surface tension is the macroscopic manifestation of the missing neighbors for molecules at the interface.",
      transfer_prompt: "Explain the 'Marangoni Effect'—how gradients in surface tension can drive fluid flow.",
      transfer_real_world: "The 'tears of wine' seen in a glass are caused by the Marangoni effect due to the evaporation of alcohol changing the surface tension.",
      challenges: [
        { question: "Calculate the pressure inside a 0.1mm diameter water droplet if σ = 0.072 N/m.", hints: ["ΔP = 2σ/R. Remember R is radius, not diameter."], level: 'advanced' }
      ]
    }
  }
};
