import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

import { SESSION_ID_COOKIE } from '@/constants';
import { axiosSnp } from '@/utils/axios';
import { parseSessionId } from '@/utils/parse-session-id';

import type { User } from '@/reduxjs/modules/auth';
import type { AxiosResponse } from 'axios';

export async function POST(req: NextRequest) {
	const user: User = await req.json();
	const apiResponse: AxiosResponse<User> = await axiosSnp.post('/signup', user);
	const sessionId = parseSessionId(apiResponse);

	if (sessionId) {
		cookies().set(SESSION_ID_COOKIE, sessionId);
	}

	const { data, status } = apiResponse;
	return NextResponse.json({ user: data }, { status });
}
