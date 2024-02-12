import { Question } from '@/reduxjs/modules/tests';

export interface Props {
	className?: string;
	questions: Question[];
	onEditQuestion: (question: Question) => void;
	onShowDeleteQuestionModal: (question: Question) => void;
}
