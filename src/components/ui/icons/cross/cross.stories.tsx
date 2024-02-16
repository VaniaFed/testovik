import { Cross } from './cross';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Cross> = {
	component: Cross,
};

type Story = StoryObj<typeof Cross>;

export const Cross18: Story = {
	render: () => <Cross />,
};
export const Cross24: Story = {
	render: () => <Cross size="24" />,
};
export const Cross32: Story = {
	render: () => <Cross size="32" />,
};
export const Cross64: Story = {
	render: () => <Cross size="64" />,
};
export default meta;
