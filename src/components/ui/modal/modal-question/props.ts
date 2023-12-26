import type { ModalMode } from '@/types/common';
import type { Question, QuestionType } from '@/reduxjs/modules/tests/types';

export interface Props {
	mode: ModalMode;
	questionType: QuestionType;
	question?: Question | null;
	testId: number;
	close: () => void;
	className?: string;
}
