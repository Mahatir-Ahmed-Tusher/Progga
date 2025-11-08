import { NextRequest, NextResponse } from "next/server";
import { generateGeminiText } from "@/app/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { word, language } = await req.json();
    if (!word) return NextResponse.json({ error: "Word is required" }, { status: 400 });
    const system = language === 'bn'
      ? `Define the Bengali word with meaning, grammar info, and usage examples. Answer in Bengali with Markdown.`
      : `Provide meaning, grammatical info, and usage examples (English). Use Markdown.`;
    const text = await generateGeminiText(system, word, 0.4, 800);
    return NextResponse.json({ definition: text });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


