import { Question } from '@/reduxjs/modules/tests';

export interface TestResults {
	correctNumber: number;
	totalAnswers: number;
	wrongQuestions: Question[];
}

export interface Props {
	results: TestResults;
	close: () => void;
	className?: string;
}
