import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { axiosSnp } from '@/utils/axios';
import { parseSessionId } from '@/utils/parse-session-id';
import { SESSION_ID_COOKIE } from '@/constants';
import type { AxiosResponse } from 'axios';
import type { User } from '@/reduxjs/modules/auth';

export async function POST(req: NextRequest) {
	const user: User = await req.json();
	const apiResponse: AxiosResponse<User> = await axiosSnp.post('/signup', user);
	const sessionId = parseSessionId(apiResponse);

	if (sessionId) {
		cookies().set(SESSION_ID_COOKIE, sessionId);
	}

	const { data, status } = apiResponse;
	return NextResponse.json(data, { status });
}
