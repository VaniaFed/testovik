import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { SESSION_ID_COOKIE } from '@/constants';
import { axiosSnp } from '@/utils/axios';

import type { AxiosResponse } from 'axios';

export async function DELETE() {
	const apiResponse: AxiosResponse<{ success: boolean }> = await axiosSnp.delete('/logout');
	cookies().delete(SESSION_ID_COOKIE);
	const { data, status } = apiResponse;
	return NextResponse.json(data, { status });
}
