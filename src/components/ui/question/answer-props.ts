import type { Question } from '@/reduxjs/modules/tests';
import { TestMode } from '@/types/common';

export interface AnswerProps {
	question: Question;
	errMessage?: string;
	disabled?: boolean;
	mode: TestMode;
	className?: string;
	handleChange?: (questionId: number, value: number) => void;
}
