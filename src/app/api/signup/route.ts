import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { axiosSnp } from '@/utils/axios';
import { parseSessionId } from '@/utils/parse-session-id';
import type { User } from '@/reduxjs/modules/auth/types';

export async function POST(req: NextRequest) {
	const user: User = await req.json();

	const signUpResponse = await axiosSnp.post('/signup', user, {
		headers: {
			'scope-key': 'Rm36-GQ.Z(%rFfwAu:LvY7',
		},
	});

	const sessionId = parseSessionId(signUpResponse);

	if (sessionId) {
		cookies().set('_session_id', sessionId);
	}

	return NextResponse.json(signUpResponse.data, {
		status: signUpResponse.status,
	});
}
