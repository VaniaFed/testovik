import type { QuestionType } from '@/reduxjs/modules/tests';
import { DropdownItem } from '@/types/common';

export interface Props {
	allQuestionTypes: DropdownItem<QuestionType>[];
	activeQuestionType: DropdownItem<QuestionType>;
	setQuestionType: (item: DropdownItem<QuestionType>) => void;
	className?: string;
	onAdd: () => void;
}
