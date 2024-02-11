import { SESSION_ID_COOKIE } from '@/constants';
import { axiosSnp } from '@/utils/axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: number; position: number } }) {
	const { id, position } = params;
	const cookie = cookies().get(SESSION_ID_COOKIE);

	const response = await axiosSnp.patch(`${process.env.SNP_URL}/answers/${id}/insert_at/${position}`, null, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = response;
	return NextResponse.json(data, { status });
}
