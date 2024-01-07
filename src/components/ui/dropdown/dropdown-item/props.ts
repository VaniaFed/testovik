import type { QuestionType } from '@/reduxjs/modules/tests';
import type { DropdownItem } from '@/types/common';

export interface Props {
	label: string;
	value: QuestionType;
	isActive: boolean;
	className?: string;
	onClick?: (item: DropdownItem) => void;
}
