import { NextRequest, NextResponse } from "next/server";
import { generateGeminiText } from "@/app/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { expression, explanation } = await req.json();
    if (!expression) return NextResponse.json({ error: "Expression is required" }, { status: 400 });
    const system = explanation
      ? `Solve the math/science expression step by step in Bengali. Use Markdown.`
      : `Calculate and return the result in Bengali. Use minimal Markdown.`;
    const text = await generateGeminiText(system, String(expression), 0.2, 400);
    return NextResponse.json({ result: text });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


