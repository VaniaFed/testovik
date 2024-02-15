import type { Meta, StoryObj } from '@storybook/react';
import { DropdownItem } from './dropdown-item';

const meta: Meta<typeof DropdownItem> = {
	component: DropdownItem,
};

type Story = StoryObj<typeof DropdownItem>;

export const Inactive: Story = {
	render: () => <DropdownItem value={'item_value'} label="Inactive item" isActive={false} />,
};

export const Active: Story = {
	render: () => <DropdownItem value={'item_value'} label="Active item" isActive />,
};
export default meta;
