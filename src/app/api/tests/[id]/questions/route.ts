import { AddQuestionRequest } from '@/reduxjs/modules/tests/types';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { axiosSnp } from '@/utils/axios';
import { SESSION_ID_COOKIE } from '@/constants';

export async function POST(req: NextRequest, { params }: { params: { id: number } }) {
	const question: AddQuestionRequest = await req.json();
	const cookie = cookies().get(SESSION_ID_COOKIE);
	const { id: testId } = params;

	const response = await axiosSnp.post(`${process.env.SNP_URL}/tests/${testId}/questions`, question, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json(data, { status });
}
