
import { GoogleGenAI, Type } from "@google/genai";
import { ScaffoldingResult, MisconceptionType, StudentLevel } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SCAFFOLDING_SYSTEM_PROMPT = `
You are an AI Scaffolding Agent inside a Talk-Back Book for Fluid Mechanics.
Your goal is to reduce cognitive load step-by-step until the student self-corrects.

STRICT PROGRESSION RULES:
1. ATTEMPT 1: Ask ONLY ONE simpler question that targets the specific misconception. Do NOT mention "viscosity".
2. ATTEMPT 2: Provide a guided analogy (e.g., sliding objects). Ask a follow-up question.
3. ATTEMPT 3: REVEAL MODE. Provide a clear intuition using the "Card Stack" analogy. Explain that internal resistance between layers is the cause.

CONSTRAINTS:
- No formulas. No exam language. No direct answers until Attempt 3.
- Always encourage the student.
- Output MUST be JSON.
`;

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
  studentLevel: StudentLevel = 'average'
): Promise<ScaffoldingResult> => {
  const misconception = classifyMisconception(userAnswer);
  
  const prompt = `
    Concept: ${concept}
    Question: "${question}"
    Student Answer: "${userAnswer}"
    Detected Misconception: ${misconception}
    Attempt Number: ${attemptCount}
    Student Level: ${studentLevel}

    Task:
    - If correct: Praise the student and explain why they are right.
    - If incorrect (Attempt 1-2): Generate a scaffolding question based on strategy.
    - If incorrect (Attempt 3): Provide the "Reveal" with the card stack analogy.

    Response JSON Format:
    {
      "isCorrect": boolean,
      "message": "Feedback for the student",
      "scaffoldingQuestion": "The guiding question (null if correct or attempt 3)",
      "internalReasoning": "Why this specific prompt was chosen"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SCAFFOLDING_SYSTEM_PROMPT,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isCorrect: { type: Type.BOOLEAN },
            message: { type: Type.STRING },
            scaffoldingQuestion: { type: Type.STRING },
            internalReasoning: { type: Type.STRING }
          },
          required: ["isCorrect", "message"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return { ...result, misconceptionFound: misconception };
  } catch (error) {
    return {
      isCorrect: false,
      message: "Interesting thought. Let's look closer at the fluid itself.",
      scaffoldingQuestion: "Does the resistance come from the container walls or from inside the fluid?",
      misconceptionFound: 'unknown'
    };
  }
};

export const generateSceneImage = async (description: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: `Professional engineering textbook illustration: ${description}. White background, clear lines.` }] },
      config: { imageConfig: { aspectRatio: "16:9" } }
    });
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
    }
    return null;
  } catch (error) { return null; }
};
