import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_3_3",
    title: "Contact Angle",
    difficulty: "medium",
    estimatedTime: 5
  },
  hook: {
    text: "A drop of water on a clean glass plate spreads out, but on a lotus leaf, it stays as a perfect bead. The difference is the Contact Angle.",
    image: "https://picsum.photos/seed/contact_angle/800/600"
  },
  socraticInquiry: [
    {
      question: "If the contact angle is less than 90 degrees, is the fluid 'wetting' or 'non-wetting'?",
      correctAnswer: "Wetting",
      explanation: "Angles < 90° mean the fluid spreads out and 'likes' the surface.",
      difficulty: "easy"
    },
    {
      question: "Mercury on glass has a contact angle of about 140 degrees. Does it create a concave or convex meniscus?",
      correctAnswer: "Convex",
      explanation: "Correct. Because it is non-wetting (>90°), it curves away from the surface, creating a convex shape.",
      difficulty: "medium"
    }
  ],
  simulation: {
    type: "contact_angle_slider",
    params: {
      angle: 45
    }
  },
  completion: {
    summary: "The contact angle quantifies the wettability of a solid surface by a liquid.",
    nextSteps: "Congratulations! You've completed Chapter 1. Chapter 2 will take us into Fluid Statics."
  }
};
