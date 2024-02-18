import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { SESSION_ID_COOKIE } from '@/constants';
import { axiosSnp } from '@/utils/axios';

import type { Question } from '@/reduxjs/modules/tests';

export async function PATCH(req: NextRequest, { params }: { params: { id: number } }) {
	const { id } = params;
	const question: Question = await req.json();
	const cookie = cookies().get(SESSION_ID_COOKIE);

	const response = await axiosSnp.patch<Question>(`${process.env.SNP_URL}/questions/${id}`, question, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json(
		{
			question: {
				id: data.id,
				title: data.title,
				answer: data.answer,
				question_type: data.question_type,
			} satisfies Omit<Question, 'answers'>,
		},
		{ status },
	);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
	const cookie = cookies().get(SESSION_ID_COOKIE);
	const { id } = params;

	const response = await axiosSnp.delete(`${process.env.SNP_URL}/questions/${id}`, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json(data, { status });
}
