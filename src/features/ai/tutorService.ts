
import { ScaffoldingResult, MisconceptionType, StudentLevel } from "../../utils/types";

const classifyMisconception = (answer: string): MisconceptionType => {
  const lowAnswer = answer.toLowerCase();
  if (/\b(heavy|weight|mass|dense|density|gravity)\b/i.test(lowAnswer)) return 'density';
  if (/\b(surface|container|wall|glass|edge|outside|friction against the wall)\b/i.test(lowAnswer)) return 'external_friction';
  if (/\b(thick|sticky|gooey|slow)\b/i.test(lowAnswer) && lowAnswer.length < 30) return 'vague';
  return 'unknown';
};

export const analyzeResponse = async (
  concept: string,
  question: string,
  userAnswer: string,
  attemptCount: number,
  studentLevel: StudentLevel = 'medium'
): Promise<ScaffoldingResult> => {
  const misconception = classifyMisconception(userAnswer);
  const isCorrect = userAnswer.length > 10; // Simple heuristic for now

  if (isCorrect) {
    return {
      isCorrect: true,
      message: "Excellent! Your intuition is spot on. You've captured the core physical principle here.",
      misconceptionFound: misconception
    };
  }

  if (attemptCount === 1) {
    return {
      isCorrect: false,
      message: "That's an interesting perspective. Let's think about it differently.",
      scaffoldingQuestion: misconception === 'density' 
        ? "If we had a very heavy object that wasn't sticky at all, would it behave like honey?" 
        : "Does the resistance come from the fluid itself, or from how it touches the container?",
      misconceptionFound: misconception
    };
  }

  if (attemptCount === 2) {
    return {
      isCorrect: false,
      message: "You're getting closer. Think about layers sliding over each other.",
      scaffoldingQuestion: "Imagine a deck of cards. If the cards were sticky, would they slide easily?",
      misconceptionFound: misconception
    };
  }

  return {
    isCorrect: false,
    message: "Let's reveal the core concept: Viscosity is the internal friction between fluid layers. It's like a 'stickiness' that resists motion from within the fluid itself.",
    misconceptionFound: misconception
  };
};

export const generateSceneImage = async (description: string): Promise<string | null> => {
  // Return a placeholder image from picsum
  const seed = description.split(' ').join('_');
  return `https://picsum.photos/seed/${seed}/800/450`;
};
