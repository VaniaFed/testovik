import { DropdownItem } from '@/types/common';

import type { QuestionType } from '@/reduxjs/modules/tests';

export interface Props {
	allQuestionTypes: DropdownItem<QuestionType>[];
	activeQuestionType: DropdownItem<QuestionType>;
	setQuestionType: (item: DropdownItem<QuestionType>) => void;
	className?: string;
	onAdd: () => void;
}
