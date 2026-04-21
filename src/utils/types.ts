
export enum Step {
  HOOK = 0,
  PREP_COMMITMENT = 1,
  INTERACTION = 2,
  SOCRATIC = 3,
  THEORY = 4,
  TRANSFER = 5,
  REAL_WORLD = 6,
  REFLECTION = 7,
  CHALLENGE = 8,
  COMPLETION = 9
}

export type MisconceptionType = 'density' | 'external_friction' | 'vague' | 'unknown';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type StudentLevel = DifficultyLevel;

export interface MicroLesson {
  id: string;
  title: string;
  path: string;
  isLocked: boolean;
}

export interface Topic {
  id: string;
  title: string;
  microLessons: MicroLesson[];
}

export interface Subchapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Chapter {
  id: string;
  title: string;
  subchapters: Subchapter[];
}

export interface Curriculum {
  chapters: Chapter[];
}

export interface ScaffoldingResult {
  isCorrect: boolean;
  message: string;
  scaffoldingQuestion?: string;
  internalReasoning?: string;
  misconceptionFound?: MisconceptionType;
}

export interface AttemptState {
  count: number;
  lastFeedback: string;
  lastScaffold?: string;
  isUnlocked: boolean;
  masteryStatus?: 'independent' | 'assisted';
}

export interface SocraticStep {
  question: string;
  expected_concept: string;
}

export interface ChallengeNumerical {
  question: string;
  hints: string[];
  level: 'conceptual' | 'standard' | 'advanced';
}

// Added LessonMetadata and LessonContent to resolve typing issues in App.tsx
export interface LessonMetadata {
  id: string;
  title: string;
  chapter: string;
  subchapter: string;
  topic: string;
  outcomes?: string[];
}

export interface LessonContent {
  metadata: LessonMetadata;
  hook: {
    imageDescription: string;
    type?: string;
    visual?: string;
  };
  interaction: {
    type: string;
    instruction: string;
    probing_question?: string;
    probingQuestion?: string;
    visual?: string;
    controls?: any;
  };
  theory: {
    title: string;
    content: string;
    formula?: string;
    definitions?: { term: string; desc: string }[];
  };
  levels: Record<DifficultyLevel, {
    hook_prompt: string;
    hook_commitment: string;
    socratic: SocraticStep[];
    theory_analogy: string;
    transfer_prompt: string;
    transfer_real_world: string;
    challenges: ChallengeNumerical[];
  }>;
}
