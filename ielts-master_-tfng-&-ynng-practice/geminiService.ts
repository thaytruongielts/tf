
import { GoogleGenAI } from "@google/genai";

export async function getDetailedExplanation(
  passage: string, 
  question: string, 
  userAnswer: string, 
  correctAnswer: string,
  type: 'TFNG' | 'YNNG'
) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    You are an expert IELTS Reading instructor. 
    Passage context: "${passage}"
    Question: "${question}"
    User chose: "${userAnswer}"
    Correct answer: "${correctAnswer}"
    Type of question: ${type === 'TFNG' ? 'True/False/Not Given' : 'Yes/No/Not Given'}

    Please provide a concise but deep explanation (max 100 words) of why the correct answer is "${correctAnswer}". 
    Focus on the difference between "False/No" and "Not Given", as this is where students struggle most.
    Use encouraging language.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not generate AI explanation. Please check the built-in explanation below.";
  }
}
