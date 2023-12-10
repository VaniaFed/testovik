import { axios } from '@/lib/axios';
import { Test } from '@/lib/definitions';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
	// const cookie = cookies().get("_session_id");

	// const response = await axios.get(`${process.env.SNP_URL}/tests`, {
	//   headers: {
	//     "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
	//     Cookie: cookie ? `${cookie.name}=${cookie.value}` : "",
	//   },
	// });

	// const { data, status } = response;
	// console.log(data);

	// return NextResponse.json({ data }, { status });
	return NextResponse.json(
		{
			tests: [],
			meta: {
				total_pages: 0,
				total_count: 0,
			},
		},
		{ status: 200 },
	);
}

// export async function POST(req: NextRequest) {
//   const test: Pick<Test, "title"> = await req.json();

//   const cookie = cookies().get("_session_id");

//   const response = await axios.post(`${process.env.SNP_URL}/tests`, test, {
//     headers: {
//       "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
//       Cookie: cookie ? `${cookie.name}=${cookie.value}` : "",
//     },
//   });

//   const { data, status } = response;

//   return NextResponse.json({ data }, { status });
// }
