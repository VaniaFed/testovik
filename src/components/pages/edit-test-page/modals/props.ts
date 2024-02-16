import { Question, Test } from '@/reduxjs/modules/tests';
import { DropdownItem, ModalMode } from '@/types/common';

import { QuestionType } from './../../../../reduxjs/modules/tests/types';

export interface Props {
	mode: ModalMode;
	testId: string;
	test: Test;
	question?: Question;
	questionType: DropdownItem<QuestionType>;
	title: string;
	className?: string;
	onDeleteQuestion: () => void;
	onDeleteTest: () => void;
	onSaveTest: () => void;
}
