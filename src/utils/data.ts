import type { DropdownItem } from '@/types/common';

export const questionTypeDropdownItems: DropdownItem[] = [
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
