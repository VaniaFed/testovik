import { TestMode } from '@/types/common';

import type { Question } from '@/reduxjs/modules/tests';

export interface AnswerProps {
	question: Question;
	errMessage?: string;
	disabled?: boolean;
	mode: TestMode;
	className?: string;
	handleChange?: (questionId: number, value: number) => void;
}
