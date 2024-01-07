import { axiosSnp } from '@/utils/axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
	const id = params.id;
	const cookie = cookies().get('_session_id');

	const apiResponse = await axiosSnp.get(`/tests/${id}`, {
		headers: {
			Cookie: cookie ? `${cookie.name}=${cookie.value}` : '',
		},
	});

	const { data, status } = apiResponse;
	return NextResponse.json({ test: data }, { status });
}
