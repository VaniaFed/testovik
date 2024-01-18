import { mockedAuthState } from '@/mocks/auth';
import { mockedTestState } from '@/mocks/tests';
import {
	selectAllTests,
	selectCurrentTest,
	selectPagination,
	selectTestsStatus,
} from '@/reduxjs/modules/tests/selectors';

describe('Selectors', () => {
	let state = {
		auth: mockedAuthState,
		tests: mockedTestState,
	};
	beforeEach(() => {
		state = {
			auth: mockedAuthState,
			tests: mockedTestState,
		};
	});

	it('should select all test list', () => {
		expect(selectAllTests(state)).toStrictEqual(state.tests.list);
	});

	it('should select test pagination', () => {
		expect(selectPagination(state)).toStrictEqual(state.tests.pagination);
	});

	it('should select current test', () => {
		expect(selectCurrentTest(state)).toStrictEqual(state.tests.currentTest);
	});

	it('should select current test status', () => {
		expect(selectTestsStatus(state)).toStrictEqual(state.tests.status);
	});
});
