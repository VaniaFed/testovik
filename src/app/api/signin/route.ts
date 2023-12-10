import { NextResponse } from 'next/server';

export async function POST() {
	return NextResponse.json({
		username: 'vaniafed',
		id: 3,
		is_admin: false,
	});
}
