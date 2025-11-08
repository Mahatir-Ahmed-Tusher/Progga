import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/app/lib/storage";

export async function GET(_req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = Number(params.userId);
    if (Number.isNaN(userId)) return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    const rows = await storage.getAllUserProgress(userId);
    return NextResponse.json(rows);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed" }, { status: 500 });
  }
}


