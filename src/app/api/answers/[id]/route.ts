import { SESSION_ID_COOKIE } from '@/constants';
import { Answer } from '@/reduxjs/modules/tests';
import { axiosSnp } from '@/utils/axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: number } }) {
	const { id } = params;
	const answer: Answer = await req.json();
	const cookie = cookies().get(SESSION_ID_COOKIE);

	const response = await axiosSnp.patch(`${process.env.SNP_URL}/answers/${id}`, answer, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json({ answer: data }, { status });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
	const cookie = cookies().get(SESSION_ID_COOKIE);
	const { id } = params;

	const response = await axiosSnp.delete(`${process.env.SNP_URL}/answers/${id}`, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json(data, { status });
}
