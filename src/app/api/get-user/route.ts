import { NextResponse } from "next/server";

export async function GET() {
  // SNP request here

  return NextResponse.json({
    id: 1,
    is_admin: true,
    username: "vaniafed",
  });
}
