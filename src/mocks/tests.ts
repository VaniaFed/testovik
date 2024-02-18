import { Test, TestsState } from '@/reduxjs/modules/tests';
import { Pagination } from '@/types/common';

export const testList: Test[] = [
	{ id: 1, created_at: '2024-01-15T20:53:52.660Z', title: 'Empty test', questions: [] },
	{
		id: 958,
		created_at: '2024-01-15T20:53:52.660Z',
		title: '1234fff',
		questions: [
			{
				id: 640,
				title: 'прикол',
				question_type: 'single',
				answer: null,
				answers: [
					{
						id: 1311,
						text: '1',
						is_right: false,
					},
					{
						id: 1312,
						text: '2',
						is_right: true,
					},
					{
						id: 1313,
						text: '3',
						is_right: true,
					},
				],
			},
		],
	},
	{
		id: 896,
		created_at: '2024-01-08T00:12:32.601Z',
		title: '4321',
		questions: [
			{
				id: 634,
				title: 'Best cat in de world',
				question_type: 'single',
				answer: 0,
				answers: [],
			},
			{
				id: 637,
				title: '5-10',
				question_type: 'number',
				answer: -5,
				answers: [],
			},
			{
				id: 638,
				title: '1+1',
				question_type: 'number',
				answer: 2,
				answers: [],
			},
			{
				id: 639,
				title: 'Multiple answer 1',
				question_type: 'multiple',
				answer: null,
				answers: [
					{
						id: 1305,
						text: '232r4332',
						is_right: true,
					},
					{
						id: 1306,
						text: '324',
						is_right: true,
					},
					{
						id: 1307,
						text: '25325352',
						is_right: false,
					},
				],
			},
			{
				id: 641,
				title: 'Multiple answer 2',
				question_type: 'multiple',
				answer: null,
				answers: [
					{
						id: 1319,
						text: '1',
						is_right: false,
					},
					{
						id: 1320,
						text: '2',
						is_right: false,
					},
					{
						id: 1321,
						text: '3',
						is_right: true,
					},
					{
						id: 1322,
						text: '4',
						is_right: true,
					},
				],
			},
		],
	},
];

export const meta: Pagination = {
	total_pages: 7,
	total_count: 33,
};

export const currentTest = testList[1];

export const mockedTestState: TestsState = {
	list: testList,
	currentTest: undefined,
	pagination: {
		total_pages: 9,
		total_count: 34,
	},
	status: 'SUCCEEDED',
	error: null,
};

export const mockedTestStateWithCurrent: TestsState = { ...mockedTestState, currentTest: testList[2] };
