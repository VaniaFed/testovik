import { Dropdown } from './dropdown';

import type { DropdownItem } from '@/types/common';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
	component: Dropdown,
};

type Story = StoryObj<typeof Dropdown>;

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

export const Primary: Story = {
	render: () => <Dropdown items={items} active={items[0]} name="dropdown-example" onChange={console.log} />,
};
export default meta;
