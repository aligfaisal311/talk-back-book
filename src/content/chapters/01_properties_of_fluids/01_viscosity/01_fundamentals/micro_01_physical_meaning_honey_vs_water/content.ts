
import { LessonContent } from '../../../../../../utils/types';

export const MICRO_CONTENT: LessonContent = {
  metadata: {
    id: "micro_01",
    title: "Introduction to Viscosity",
    chapter: "01_properties_of_fluids",
    subchapter: "01_viscosity",
    topic: "01_fundamentals",
    outcomes: [
      "Distinguish between a fluid's 'thickness' and its internal resistance to motion.",
      "Identify viscosity as the 'internal friction' that develops between fluid layers."
    ]
  },
  hook: {
    imageDescription: "Close up of two human hands each holding a glass jar. One jar has splashing water, the other has slow-moving, viscous honey. Cinematic lighting, laboratory setting."
  },
  interaction: {
    type: "jar_shake",
    instruction: "Click 'Shake' to vibrate the containers. Observe how the honey resists changing shape compared to the water.",
    probing_question: "Notice the honey doesn't just move slower—it seems to stretch and pull on itself. Is 'thickness' a scientific measurement, or is there a specific force at play here?"
  },
  theory: {
    title: "The Birth of Viscosity",
    content: "We call this 'internal stickiness' **Viscosity**. It is the property of a fluid to resist deformation or the relative motion of its layers. It is literally 'Internal Friction'.",
  },
  levels: {
    easy: {
      hook_prompt: "Why is it harder to stir honey than water?",
      hook_commitment: "Is honey harder to stir just because it's heavier?",
      socratic: [
        { question: "If you have a heavy bag of sand and a light bag of air, which is harder to move? Is that the same as stirring honey?", expected_concept: "weight_vs_friction" },
        { question: "Imagine honey is made of sticky sheets. If they stick together, do they slide easily?", expected_concept: "sticky_layers" }
      ],
      theory_analogy: "It's like walking through a ball pit. The balls bump into you and slow you down.",
      transfer_prompt: "If you melt butter, does it get easier or harder to pour? Why?",
      transfer_real_world: "Syrup flows better when it's warm on your pancakes!",
      challenges: [
        { question: "Which has more viscosity: Cold syrup or hot syrup?", hints: ["Think about which one is 'stickier'."], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "You hold two identical jars: one filled with clear water, the other with golden honey. When you shake them, the water sloshes instantly, but the honey feels like it's 'fighting' your hand. Why?",
      hook_commitment: "Before we dive in: Is this resistance simply because honey is 'heavier' or 'thicker' than water? What is actually pushing back against your hand?",
      socratic: [
        { question: "If we made the water jar much heavier (denser) than the honey jar, would the water suddenly become as hard to stir as honey?", expected_concept: "viscosity_is_not_density" },
        { question: "Imagine the honey as a million tiny layers sliding over each other. If those layers were 'sticky' and resisted sliding, how would that explain the drag you feel?", expected_concept: "internal_friction" }
      ],
      theory_analogy: "Think of a crowd in a hallway. If everyone is holding hands (high viscosity), it's very hard for one person to run through.",
      transfer_prompt: "If you heat up the honey, it becomes easier to shake. Based on our 'sticking layers' idea, what do you think the heat is doing to those layers?",
      transfer_real_world: "Engineers choose specific oils for car engines so they are 'runny' enough to flow when cold, but 'sticky' enough to protect parts when hot.",
      challenges: [
        { question: "Could a gas have viscosity? Think about air blowing through a pipe—does it experience 'internal friction'?", hints: ["Do molecules collide and 'drag' on each other?"], level: 'conceptual' }
      ]
    },
    hard: {
      hook_prompt: "Consider the dynamic response of a Newtonian fluid under oscillatory shear. Why does honey exhibit a significant phase lag in its response compared to water?",
      hook_commitment: "Is the resistance to deformation in honey purely a function of its density, or is it a result of intermolecular momentum transfer?",
      socratic: [
        { question: "Analyze the energy dissipation in a viscous fluid. Where does the work done by your hand go when you shake the honey?", expected_concept: "viscous_dissipation" },
        { question: "If viscosity is defined as the ratio of shear stress to shear rate, how does the molecular structure of honey maintain a higher ratio than water?", expected_concept: "intermolecular_forces" }
      ],
      theory_analogy: "Viscosity is the macroscopic manifestation of microscopic momentum exchange between adjacent layers of fluid moving at different velocities.",
      transfer_prompt: "Derive the relationship between temperature and viscosity for a liquid using the Arrhenius equation. Why does the activation energy vary between fluids?",
      transfer_real_world: "In aerospace engineering, the viscosity of air at hypersonic speeds is critical for calculating heat flux and drag on re-entry vehicles.",
      challenges: [
        { question: "In a zero-gravity environment, would the apparent viscosity of honey change? Justify using the Navier-Stokes equations.", hints: ["Does gravity appear in the viscous term of the N-S equations?"], level: 'advanced' }
      ]
    }
  }
};
