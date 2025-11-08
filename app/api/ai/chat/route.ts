import { NextRequest, NextResponse } from "next/server";
import { generateGeminiText } from "@/app/lib/gemini";
import { storage } from "@/app/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId, context } = await req.json();
    if (!message) return NextResponse.json({ error: "Message is required" }, { status: 400 });

    let sessionContext = "";
    if (sessionId) {
      const session = await storage.getChatSessionBySessionId(sessionId);
      if (session) {
        const messages = await storage.getChatMessages(session.id);
        sessionContext = messages.map(m => `${m.role}: ${m.content}`).join('\n');
      }
    }

    const systemPrompt = `You are Progga AI (প্রজ্ঞা AI), an educational assistant for Bangladeshi students (Class 6-10). Respond in Bengali by default, align with NCTB guidelines, be supportive, and use Markdown (must include at least one heading, bold, italic). Context: ${context || sessionContext || 'General educational assistance'}`;
    const text = await generateGeminiText(systemPrompt, message, 0.7, 1500);
    return NextResponse.json({ response: text });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


