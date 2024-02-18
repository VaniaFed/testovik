import { UserAnswer } from '@/components/pages/pass-test/use-pass-test';
import { Question, QuestionType } from '@/reduxjs/modules/tests';
import { TestMode } from '@/types/common';

export interface Props {
	question: Question;
	mode?: TestMode;
	lastQuestion?: boolean;
	bottomContent?: React.ReactNode;
	className?: string;
	handleAnswerChange?: (questionType: QuestionType) => (questionId: number, value: number) => void;
	checkIfAnswerChecked?: (questionType: QuestionType, questionId: number) => (answerId: number) => boolean;
	getUserAnswer?: (questionId: number) => UserAnswer | undefined;
}
