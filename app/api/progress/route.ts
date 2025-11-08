import { NextRequest, NextResponse } from "next/server";
import { storage, InsertUserProgress } from "@/app/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as InsertUserProgress;
    const row = await storage.updateUserProgress(body);
    return NextResponse.json(row);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 400 });
  }
}


