import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { axiosSnp } from '@/utils/axios';
import { SESSION_ID_COOKIE } from '@/constants';
import { AxiosResponse } from 'axios';

export async function DELETE() {
	const apiResponse: AxiosResponse<{ success: boolean }> = await axiosSnp.delete('/logout');
	cookies().delete(SESSION_ID_COOKIE);
	const { data, status } = apiResponse;
	return NextResponse.json(data, { status });
}
