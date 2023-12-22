import { QuestionType } from '@/reduxjs/modules/tests/types';
import { DropdownItem } from '@/types/common';

export interface Props {
	label: string;
	value: QuestionType;
	isActive: boolean;
	className?: string;
	onClick?: (item: DropdownItem) => void;
}
