// import { cookies } from 'next/headers';
// import { axiosSnp } from '@/lib/axios';
import { NextResponse } from 'next/server';

export async function GET() {
	//   const cookie = cookies().get("_session_id");

	//   const response = await axiosSnp.get('/users/current', {
	//     headers: {
	//       "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
	//       Cookie: cookie ? `${cookie.name}=${cookie.value}` : "",
	//     },
	//   });

	//   const { data, status } = response;
	//   console.log(data);

	//   return NextResponse.json({ data }, { status });

	// return NextResponse.json({
	// 	username: 'vaniafed',
	// 	is_admin: true,
	// });
	return NextResponse.json(null);
}
