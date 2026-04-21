import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "2_2_1",
    title: "Manometers",
    difficulty: "hard",
    estimatedTime: 12
  },
  hook: {
    text: "How can a simple U-shaped tube with some liquid tell us the pressure inside a massive industrial pipe?",
    image: "https://picsum.photos/seed/manometer/800/600"
  },
  socraticInquiry: [
    {
      question: "In a U-tube manometer, if one side is open to the atmosphere and the other to a pipe, what does the difference in liquid height represent?",
      correctAnswer: "Gauge Pressure",
      explanation: "Exactly. It measures the difference between the pipe pressure and the atmospheric pressure.",
      difficulty: "medium"
    },
    {
      question: "Why do we often use Mercury in manometers instead of water for high-pressure measurements?",
      correctAnswer: "Higher Density",
      explanation: "Correct. Mercury's high density (SG=13.6) means the height difference is 13.6 times smaller than water, keeping the device compact.",
      difficulty: "hard"
    }
  ],
  simulation: {
    type: "u_tube_manometer",
    params: {
      fluid: "Mercury",
      pressure: 5000
    }
  },
  completion: {
    summary: "Manometers use the principle of hydrostatic equilibrium to measure pressure differences.",
    nextSteps: "For even higher pressures, we use mechanical devices like the Bourdon Gauge."
  }
};
