import { NextRequest, NextResponse } from "next/server";
import { storage, InsertChatMessage } from "@/app/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as InsertChatMessage;
    if (!body?.sessionId || !body?.role || !body?.content) {
      return NextResponse.json({ error: "sessionId, role, content required" }, { status: 400 });
    }
    const msg = await storage.createChatMessage(body);
    return NextResponse.json(msg);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


