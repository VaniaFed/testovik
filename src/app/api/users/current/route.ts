import { cookies } from 'next/headers';
import { axiosSnp } from '@/utils/axios';
import { NextResponse } from 'next/server';
import { SESSION_ID_COOKIE } from '@/constants';

export async function GET() {
	const cookie = cookies().get(SESSION_ID_COOKIE);

	const apiResponse = await axiosSnp.get('/users/current', {
		headers: {
			Cookie: cookie && `${cookie.name}=${cookie.value}`,
		},
	});

	const { data, status } = apiResponse;
	return NextResponse.json(data, { status });
}
