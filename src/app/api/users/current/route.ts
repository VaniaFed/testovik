import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { axios } from '@/lib/axios';

export async function GET() {
	//   const cookie = cookies().get("_session_id");

	//   const response = await axios.get(`${process.env.SNP_URL}/users/current`, {
	//     headers: {
	//       "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
	//       Cookie: cookie ? `${cookie.name}=${cookie.value}` : "",
	//     },
	//   });

	//   const { data, status } = response;
	//   console.log(data);

	//   return NextResponse.json({ data }, { status });

	return NextResponse.json({
		username: 'vaniafed',
		is_admin: true,
	});
	// return NextResponse.json(null);
}
