import { axios } from "@/lib/axios";
import { parseSessionId } from "@/lib/utils";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

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
      withCredentials: true,
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
