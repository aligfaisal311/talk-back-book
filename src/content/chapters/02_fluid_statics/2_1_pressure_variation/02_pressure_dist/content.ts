import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "2_1_2",
    title: "Pressure Distribution",
    difficulty: "medium",
    estimatedTime: 7
  },
  hook: {
    text: "If you have a container with a complex shape, is the pressure at the bottom different in the wider sections compared to the narrower ones?",
    image: "https://picsum.photos/seed/pressure_dist/800/600"
  },
  socraticInquiry: [
    {
      question: "Does the shape of the container affect the hydrostatic pressure at a certain depth?",
      correctAnswer: "No",
      explanation: "Correct! This is the 'Hydrostatic Paradox'. Pressure only depends on depth and fluid density, not the total volume or shape of the container.",
      difficulty: "medium"
    },
    {
      question: "In a connected system of different shapes, will the fluid level be the same in all of them?",
      correctAnswer: "Yes",
      explanation: "Yes, because the pressure at the base must be the same for the system to be in equilibrium.",
      difficulty: "easy"
    }
  ],
  simulation: {
    type: "hydrostatic_paradox",
    params: {
      shapes: ["Cylinder", "Cone", "Vase"]
    }
  },
  completion: {
    summary: "Pressure distribution in a static fluid is uniform horizontally and varies linearly vertically.",
    nextSteps: "Now let's see how we actually measure this pressure using Manometers."
  }
};
