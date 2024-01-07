import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { axiosSnp } from '@/utils/axios';
import { SESSION_ID_COOKIE } from '@/constants';
import type { Test } from '@/reduxjs/modules/tests';

export async function POST(req: NextRequest) {
	const test: Pick<Test, 'title'> = await req.json();
	const cookie = cookies().get(SESSION_ID_COOKIE);

	const response = await axiosSnp.post(`${process.env.SNP_URL}/tests`, test, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json({ test: data }, { status });
}

export async function GET() {
	const cookie = cookies().get(SESSION_ID_COOKIE);

	const apiResponse = await axiosSnp.get('/tests', {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = apiResponse;
	return NextResponse.json(data, { status });
}
