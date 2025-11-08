import { NextRequest, NextResponse } from "next/server";
import { generateGeminiText } from "@/app/lib/gemini";
import { storage } from "@/app/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let content = "";
    let sessionId: string | undefined = undefined;

    if (contentType.includes("application/json")) {
      const body = await req.json();
      content = body.content || "";
      sessionId = body.sessionId;
    } else if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      sessionId = (form.get("sessionId") as string) || undefined;
      const text = (form.get("content") as string) || "";
      // Note: image handling omitted; previous impl was stubbed
      content = text;
    }

    if (!content) return NextResponse.json({ error: "Content is required" }, { status: 400 });

    const system = `Create 3-5 MCQ in Bengali from the given content for Bangladeshi students (NCTB aligned). Respond ONLY in strict JSON with keys: topic (string), questions (array of {question, options[4], correctAnswer (0-3), explanation}).`;
    const user = `Content:\n\n${content}`;
    const raw = await generateGeminiText(system, user, 0.3, 1200);

    let parsed: any;
    try { parsed = JSON.parse(raw); } catch {
      parsed = { topic: "সাধারণ প্রশ্ন", questions: [] };
    }

    if (sessionId && parsed?.questions?.length) {
      const session = await storage.getChatSessionBySessionId(sessionId);
      if (session) {
        for (const [idx, q] of parsed.questions.entries()) {
          await storage.createMcqQuestion({ sessionId: session.id, question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation });
        }
      }
    }

    if (parsed?.questions) {
      parsed.questions = parsed.questions.map((q: any, index: number) => ({ ...q, id: `mcq_${Date.now()}_${index}` }));
    }

    return NextResponse.json(parsed);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


