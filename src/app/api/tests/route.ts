import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { SESSION_ID_COOKIE } from '@/constants';
import { axiosSnp } from '@/utils/axios';

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

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);

	let params = {};

	for (const [key, value] of searchParams.entries()) {
		params = { ...params, ...{ [key]: value } };
	}

	const cookie = cookies().get(SESSION_ID_COOKIE);

	const apiResponse = await axiosSnp.get('/tests', {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
		params,
	});

	const { data, status } = apiResponse;
	return NextResponse.json(data, { status });
}
