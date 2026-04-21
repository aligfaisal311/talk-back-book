import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "2_2_2",
    title: "Bourdon Gauge",
    difficulty: "medium",
    estimatedTime: 6
  },
  hook: {
    text: "Ever seen those circular dials on a gas tank? Inside is a curved tube that wants to straighten out when you blow into it.",
    image: "https://picsum.photos/seed/bourdon/800/600"
  },
  socraticInquiry: [
    {
      question: "When pressure increases inside the curved Bourdon tube, does it tend to become more curved or less curved?",
      correctAnswer: "Less curved",
      explanation: "Correct. It tries to straighten out, and this tiny movement is amplified by gears to move the needle.",
      difficulty: "medium"
    },
    {
      question: "Is a Bourdon gauge better suited for very low pressures or very high pressures compared to a simple water manometer?",
      correctAnswer: "High pressures",
      explanation: "Yes. They are robust and can handle thousands of PSI, where a manometer would need to be miles high.",
      difficulty: "easy"
    }
  ],
  simulation: {
    type: "bourdon_mechanism",
    params: {
      pressure: 100
    }
  },
  completion: {
    summary: "The Bourdon gauge is a mechanical pressure sensor that converts elastic deformation into a readable dial position.",
    nextSteps: "Now that we can measure pressure, let's see how it exerts forces on surfaces."
  }
};
