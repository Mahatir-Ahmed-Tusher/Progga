import { NextRequest, NextResponse } from "next/server";
import { getChatResponse } from "@/server/seventh/science_book/rag";

export async function POST(req: NextRequest) {
  try {
    const { chapter, message } = await req.json();
    if (!chapter || !message) return NextResponse.json({ error: "Chapter and message are required" }, { status: 400 });
    const response = await getChatResponse(chapter, message);
    return NextResponse.json({ response });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


