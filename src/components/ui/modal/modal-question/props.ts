import type { Question, QuestionType } from '@/reduxjs/modules/tests';
import type { ModalMode } from '@/types/common';

export interface ModalQuestionProps {
	mode: ModalMode;
	questionType: QuestionType;
	question?: Question | null;
	testId: number;
	close: () => void;
	className?: string;
}
