import { DropdownItem } from '@/types/common';

import { DropdownList } from './dropdown-list';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropdownList> = {
	component: DropdownList,
};

type Story = StoryObj<typeof DropdownList>;

const items: DropdownItem[] = [
	{
		label: 'Item 1',
		value: '1',
	},
	{
		label: 'Item 2',
		value: '2',
	},
	{
		label: 'Item 3',
		value: '3',
	},
];

export const Default: Story = {
	render: () => <DropdownList items={items} active={items[0]} />,
};
export default meta;
