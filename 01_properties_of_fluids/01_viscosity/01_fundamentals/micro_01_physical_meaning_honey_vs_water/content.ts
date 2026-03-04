
import { LessonContent } from '../../../../../types';

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
    prompt: "You hold two identical jars: one filled with clear water, the other with golden honey. When you shake them, the water sloshes instantly, but the honey feels like it's 'fighting' your hand. Why?",
    commitment_question: "Before we dive in: Is this resistance simply because honey is 'heavier' or 'thicker' than water? What is actually pushing back against your hand?",
    imageDescription: "Close up of two human hands each holding a glass jar. One jar has splashing water, the other has slow-moving, viscous honey. Cinematic lighting, laboratory setting."
  },
  interaction: {
    type: "jar_shake",
    instruction: "Click 'Shake' to vibrate the containers. Observe how the honey resists changing shape compared to the water.",
    probing_question: "Notice the honey doesn't just move slower—it seems to stretch and pull on itself. Is 'thickness' a scientific measurement, or is there a specific force at play here?"
  },
  socratic: [
    {
      question: "If we made the water jar much heavier (denser) than the honey jar, would the water suddenly become as hard to stir as honey?",
      expected_concept: "viscosity_is_not_density"
    },
    {
      question: "Imagine the honey as a million tiny layers sliding over each other. If those layers were 'sticky' and resisted sliding, how would that explain the drag you feel?",
      expected_concept: "internal_friction"
    },
    {
      question: "In a 'perfect' fluid with zero internal friction, would there be any resistance to shaking at all?",
      expected_concept: "ideal_fluid"
    }
  ],
  theory: {
    title: "The Birth of Viscosity",
    content: "We call this 'internal stickiness' **Viscosity**. It is the property of a fluid to resist deformation or the relative motion of its layers. It is literally 'Internal Friction'.",
    analogy: "Think of a crowd in a hallway. If everyone is holding hands (high viscosity), it's very hard for one person to run through. If everyone is standing apart (low viscosity), motion is easy."
  },
  transfer: {
    prompt: "If you heat up the honey, it becomes easier to shake. Based on our 'sticking layers' idea, what do you think the heat is doing to those layers?",
    real_world: "Engineers choose specific oils for car engines so they are 'runny' enough to flow when cold, but 'sticky' enough to protect parts when the engine gets hot."
  },
  challenges: [
    {
      level: "conceptual",
      question: "Could a gas have viscosity? Think about air blowing through a pipe—does it experience 'internal friction'?",
      hints: ["Even though air is thin, do its molecules collide and 'drag' on each other?", "Look at the wind—does it slow down near the ground?"]
    }
  ]
};
