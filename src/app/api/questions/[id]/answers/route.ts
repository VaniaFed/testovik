import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { axiosSnp } from '@/utils/axios';
import { SESSION_ID_COOKIE } from '@/constants';
import type { Answer } from '@/reduxjs/modules/tests';

export async function POST(req: NextRequest, { params }: { params: { id: number } }) {
	const answer: Answer = await req.json();
	const cookie = cookies().get(SESSION_ID_COOKIE);
	const { id: questionId } = params;

	const response = await axiosSnp.post(`${process.env.SNP_URL}/questions/${questionId}/answers`, answer, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json({ answer: data }, { status });
}
