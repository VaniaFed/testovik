import { cookies } from 'next/headers';
import { axiosSnp } from '@/utils/axios';
import { SESSION_ID_COOKIE } from '@/constants';
import { NextRequest, NextResponse } from 'next/server';

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
