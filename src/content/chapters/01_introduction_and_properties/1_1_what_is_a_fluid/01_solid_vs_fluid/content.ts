import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_1_1",
    title: "Solid vs Fluid Behavior",
    chapter: "01_introduction_and_properties",
    subchapter: "1_1_what_is_a_fluid",
    topic: "microlearning",
    outcomes: [
      "Distinguish between solid and fluid responses to shear stress.",
      "Define a fluid based on its continuous deformation behavior."
    ]
  },
  hook: {
    imageDescription: "A split screen showing a heavy metal block being pushed and a stream of water being diverted by a finger. High contrast, scientific illustration style."
  },
  interaction: {
    type: "shear_test",
    instruction: "Apply a small force to the solid block and the fluid pool. Watch how they react over time.",
    probing_question: "The solid block stops moving after a tiny bit of stretch. But the fluid? It just keeps going. Why doesn't the fluid find a 'new shape' and stop?"
  },
  theory: {
    title: "The Definition of a Fluid",
    content: "A **fluid** is a substance that deforms continuously under the application of a shear (tangential) stress, no matter how small that shear stress may be. Unlike solids, which resist shear with a static deformation, fluids respond with a **rate of deformation** (flow).",
  },
  levels: {
    easy: {
      hook_prompt: "If you push a rock, it moves a bit and stops. If you push water, it flows. Why?",
      hook_commitment: "Does water ever stop moving if you keep pushing it?",
      socratic: [
        { question: "Think of a spring. You pull it, it stretches, and then it stays there. Is water like a spring?", expected_concept: "elastic_vs_flow" },
        { question: "If you keep stirring a cup of tea, does the tea ever say 'enough' and stop moving while you're still stirring?", expected_concept: "continuous_deformation" }
      ],
      theory_analogy: "A solid is like a brick wall; a fluid is like a crowd of people constantly shifting to get around you.",
      transfer_prompt: "Is peanut butter a solid or a fluid? Think about what happens if you leave a knife in it vs. if you stir it.",
      transfer_real_world: "Glaciers look like solid ice, but over hundreds of years, they flow like very slow rivers. They are technically fluids!",
      challenges: [
        { question: "True or False: A fluid can resist a tiny shear force without moving at all.", hints: ["Think about the definition of 'continuous deformation'."], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Imagine a block of rubber and a layer of oil. You apply the same tangential force to both. The rubber reaches a fixed angle of tilt. The oil, however, never reaches a fixed angle— it just keeps sliding. What is the fundamental difference in how they store or dissipate energy?",
      hook_commitment: "Is the difference between a solid and a fluid just about how 'soft' they are, or is it a difference in their physics?",
      socratic: [
        { question: "In a solid, the stress is proportional to the *strain* (deformation). In a fluid, what do you think the stress is proportional to?", expected_concept: "strain_rate" },
        { question: "If you remove the force from the rubber, it snaps back. If you stop stirring the oil, does it 'snap back' to its original position?", expected_concept: "energy_dissipation" }
      ],
      theory_analogy: "A solid is like a memory foam mattress that holds a shape; a fluid is like a conversation that keeps moving as long as people are talking.",
      transfer_prompt: "Consider 'Ooze' (cornstarch and water). It acts like a solid when hit hard but flows like a liquid when poured. How does this challenge our simple definition?",
      transfer_real_world: "Engineers must account for 'creep' in solids, where they slowly start to act like fluids under high heat and pressure over many years.",
      challenges: [
        { question: "If a substance deforms 1mm and then stops under a constant shear stress, is it a fluid?", hints: ["Does it deform 'continuously'?"], level: 'conceptual' }
      ]
    },
    hard: {
      hook_prompt: "Analyze the molecular lattice of a crystalline solid versus the random molecular arrangement of a liquid. How does the lack of a fixed lattice structure lead to the macroscopic observation of continuous deformation under shear?",
      hook_commitment: "Can we define a fluid purely by its inability to support a shear stress in static equilibrium?",
      socratic: [
        { question: "Consider the Deborah Number (ratio of relaxation time to observation time). If everything flows given enough time, is the distinction between solid and fluid merely a matter of timescale?", expected_concept: "rheology_timescale" },
        { question: "How does the inter-molecular potential energy curve differ for a particle in a solid lattice vs. a particle in a liquid bulk?", expected_concept: "potential_wells" }
      ],
      theory_analogy: "A solid is a system in a deep potential well; a fluid is a system where thermal energy allows particles to constantly hop between shallow wells.",
      transfer_prompt: "Explain the behavior of a Bingham Plastic (like toothpaste) which requires a 'yield stress' before it starts to flow. Is it a fluid or a solid below that stress?",
      transfer_real_world: "In mantle convection, the Earth's 'solid' rock behaves as a fluid over geological timescales, driving plate tectonics.",
      challenges: [
        { question: "Derive why a fluid at rest cannot have any shear stress components. Use the definition of a fluid.", hints: ["What would happen if there *was* a shear stress?"], level: 'advanced' }
      ]
    }
  }
};
