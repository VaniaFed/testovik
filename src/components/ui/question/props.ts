import { UserAnswer } from '@/components/pages/pass-test/use-pass-test';
import { Question, QuestionType } from '@/reduxjs/modules/tests';
import { TestMode } from '@/types/common';

export interface Props {
	question: Question;
	userAnswers?: UserAnswer[];
	handleAnswerChange?: (questionType: QuestionType) => (questionId: number, value: number) => void;
	getAnswer?: (questionId: number) => UserAnswer | undefined;
	mode?: TestMode;
	bottomContent?: React.ReactNode;
	lastQuestion?: boolean;
	className?: string;
}
