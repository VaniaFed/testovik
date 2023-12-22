import type { Meta, StoryObj } from '@storybook/react';

import { Plus } from './plus';

const meta: Meta<typeof Plus> = {
	component: Plus,
};

type Story = StoryObj<typeof Plus>;

export const Plus18: Story = {
	render: () => <Plus />,
};
export const Plus24: Story = {
	render: () => <Plus size="24" />,
};
export const Plus32: Story = {
	render: () => <Plus size="32" />,
};
export const Plus64: Story = {
	render: () => <Plus size="64" />,
};

export default meta;
