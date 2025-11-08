import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/app/lib/storage";

export async function GET(_req: NextRequest, { params }: { params: { sessionId: string } }) {
  try {
    const session = await storage.getChatSessionBySessionId(params.sessionId);
    if (!session) return NextResponse.json([], { status: 200 });
    const messages = await storage.getChatMessages(session.id);
    return NextResponse.json(messages);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


