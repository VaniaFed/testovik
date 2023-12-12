// import { Test } from '@/lib/definitions';
// import { cookies } from 'next/headers';
// import { NextRequest, NextResponse } from 'next/server';
// import { axiosSnp } from '@/lib/axios';
import { NextResponse } from 'next/server';

export async function GET() {
	// const cookie = cookies().get("_session_id");

	// const response = await axiosSnp.get('/tests', {
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
			tests: [
				{
					id: 1,
					created_at: '2442',
					title: 'География 1',
					questions: [
						{
							id: 1,
							answer: 2,
							answers: [
								{ id: 1, is_right: false, text: 'Москва' },
								{ id: 2, is_right: true, text: 'Тверь' },
								{ id: 3, is_right: false, text: 'Москва' },
							],
							question_type: 'single',
							title: 'Тупо Лучший город в стране',
						},
						{
							id: 2,
							answer: 2,
							answers: [
								{ id: 1, is_right: false, text: 'Самокат' },
								{ id: 2, is_right: true, text: 'Велосипед' },
								{ id: 3, is_right: false, text: 'Квадроцикл' },
							],
							question_type: 'single',
							title: 'На чем в Твери топ кататься?',
						},
					],
				},
				{
					id: 2,
					created_at: '3142',
					title: 'Жизнь и ее приколы',
					questions: [
						{
							id: 1,
							answer: 2,
							answers: [
								{ id: 3, is_right: false, text: 'Понедельник' },
								{ id: 4, is_right: false, text: 'Вторник' },
								{ id: 5, is_right: false, text: 'Пятница' },
								{ id: 2, is_right: true, text: 'Суббота' },
								{ id: 1, is_right: true, text: 'Васкисенье' },
							],
							question_type: 'multiple',
							title: 'Лучший день безделья',
						},
						{
							id: 2,
							answer: 2,
							answers: [
								{ id: 1, is_right: false, text: 'О чем нельзя' },
								{ id: 2, is_right: true, text: 'Разговаривать' },
								{ id: 3, is_right: false, text: 'С людьми?' },
							],
							question_type: 'single',
							title: 'О чем нельзя разговаривать с людьми?',
						},
						{
							id: 2,
							answer: 2,
							answers: [{ id: 1, is_right: true, text: '7' }],
							question_type: 'single',
							title: 'Решите задачку тысячелетия (5+2)',
						},
					],
				},
			],
			meta: {
				total_pages: 0,
				total_count: 2,
			},
		},
		{ status: 200 },
	);
}

// export async function POST(req: NextRequest) {
//   const test: Pick<Test, "title"> = await req.json();

//   const cookie = cookies().get("_session_id");

//   const response = await axiosSnp.post(`${process.env.SNP_URL}/tests`, test, {
//     headers: {
//       "scope-key": "Rm36-GQ.Z(%rFfwAu:LvY7",
//       Cookie: cookie ? `${cookie.name}=${cookie.value}` : "",
//     },
//   });

//   const { data, status } = response;

//   return NextResponse.json({ data }, { status });
// }
