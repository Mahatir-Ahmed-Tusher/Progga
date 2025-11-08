import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY as string;
const client = new GoogleGenerativeAI(apiKey);

export async function generateGeminiText(system: string, user: string, temperature = 0.7, maxOutputTokens = 1500): Promise<string> {
  const model = client.getGenerativeModel({ model: "gemini-2.5-flash" });
  const prompt = `${system}\n\n${user}`;
  const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig: { temperature, maxOutputTokens } });
  const text = result.response.text();
  return text || "দুঃখিত, এই মুহূর্তে উত্তর দিতে পারছি না।";
}


