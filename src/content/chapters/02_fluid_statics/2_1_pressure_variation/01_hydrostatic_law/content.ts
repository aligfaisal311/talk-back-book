import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "2_1_1",
    title: "Hydrostatic Law",
    difficulty: "medium",
    estimatedTime: 8
  },
  hook: {
    text: "As you dive deeper into a pool, your ears start to hurt. Why does the pressure increase with depth?",
    image: "https://picsum.photos/seed/hydrostatic/800/600"
  },
  socraticInquiry: [
    {
      question: "The Hydrostatic Law states that the rate of increase of pressure in a vertically downward direction is equal to the specific weight of the fluid. Is this true for a fluid at rest?",
      correctAnswer: "Yes",
      explanation: "Exactly. In a static fluid, the weight of the fluid above a point is what creates the pressure.",
      difficulty: "easy"
    },
    {
      question: "If you double the depth in a tank of water, what happens to the gauge pressure?",
      correctAnswer: "Doubles",
      explanation: "Correct. P = ρgh. Since ρ and g are constant, pressure is directly proportional to depth h.",
      difficulty: "medium"
    }
  ],
  simulation: {
    type: "pressure_depth_gauge",
    params: {
      fluid: "Water"
    }
  },
  completion: {
    summary: "The Hydrostatic Law (dP/dz = -γ) describes how pressure varies with vertical position in a static fluid.",
    nextSteps: "Next, we'll see how this pressure is distributed across different shapes."
  }
};
