import { NextRequest, NextResponse } from "next/server";
import { storage, InsertChatSession } from "@/app/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as InsertChatSession;
    if (!body?.sessionId) return NextResponse.json({ error: "sessionId required" }, { status: 400 });
    const session = await storage.createChatSession(body);
    return NextResponse.json(session);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


