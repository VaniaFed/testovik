import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { axios } from "@/lib/axios";
import { parseSessionId } from "@/lib/utils";

interface User {
  username: string;
  password: string;
  password_confirmation: string;
  is_admin: boolean;
}

export async function POST(req: NextRequest) {
  const user: User = await req.json();

  const signUpResponse = await axios.post(
    `${process.env.SNP_URL}/signup`,
    user,
    {
      headers: {
        "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
      },
    }
  );

  const sessionId = parseSessionId(signUpResponse);

  if (sessionId) {
    cookies().set("_session_id", sessionId);
  }

  return NextResponse.json(signUpResponse.data, {
    status: signUpResponse.status,
  });
}
