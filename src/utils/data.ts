import { QuestionType } from '@/reduxjs/modules/tests';

import type { DropdownItem } from '@/types/common';

export const questionTypeDropdownItems: DropdownItem<QuestionType>[] = [
	{
		label: 'Один из многих',
		value: 'single',
	},
	{
		label: 'Несколько из многих',
		value: 'multiple',
	},
	{
		label: 'Числовой',
		value: 'number',
	},
];
