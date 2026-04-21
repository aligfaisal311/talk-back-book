import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_3_2",
    title: "Capillarity",
    difficulty: "hard",
    estimatedTime: 8
  },
  hook: {
    text: "Dip a thin straw into water, and the water rises above the surface level. Why does it defy gravity?",
    image: "https://picsum.photos/seed/capillarity/800/600"
  },
  socraticInquiry: [
    {
      question: "Capillarity is caused by the balance of Adhesion (fluid to wall) and Cohesion (fluid to fluid). If Adhesion > Cohesion, does the fluid rise or fall in the tube?",
      correctAnswer: "Rise",
      explanation: "Water 'wets' the glass because it likes the glass more than itself, pulling it upwards.",
      difficulty: "medium"
    },
    {
      question: "If you use a thinner tube, will the fluid rise higher or lower?",
      correctAnswer: "Higher",
      explanation: "Correct! The weight of the fluid column is proportional to the radius squared, but the lifting force is proportional only to the radius. Thinner tubes win.",
      difficulty: "hard"
    }
  ],
  simulation: {
    type: "capillary_tubes",
    params: {
      radii: [1, 2, 5]
    }
  },
  completion: {
    summary: "Capillarity is the rise or fall of a liquid in a small-diameter tube due to surface tension.",
    nextSteps: "Finally, let's look at the Contact Angle—the signature of how a fluid meets a solid."
  }
};
