import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { SESSION_ID_COOKIE } from '@/constants';
import { Test } from '@/reduxjs/modules/tests';
import { axiosSnp } from '@/utils/axios';

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
	const { id } = params;
	const cookie = cookies().get('_session_id');

	const apiResponse = await axiosSnp.get(`/tests/${id}`, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = apiResponse;
	return NextResponse.json({ test: data }, { status });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: number } }) {
	const { id } = params;
	const test: Pick<Test, 'title'> = await req.json();
	const cookie = cookies().get(SESSION_ID_COOKIE);

	const response = await axiosSnp.patch(`${process.env.SNP_URL}/tests/${id}`, test, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json(data, { status });
}
export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
	const id = params.id;
	const cookie = cookies().get('_session_id');

	const apiResponse = await axiosSnp.delete(`/tests/${id}`, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { status } = apiResponse;
	return NextResponse.json({ id }, { status });
}
