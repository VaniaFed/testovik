import { Sort } from './sort';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sort> = {
	component: Sort,
};

type Story = StoryObj<typeof Sort>;

export const Sort18: Story = {
	render: () => <Sort />,
};
export const Sort24: Story = {
	render: () => <Sort size="24" />,
};
export const Sort32: Story = {
	render: () => <Sort size="32" />,
};
export const Sort64: Story = {
	render: () => <Sort size="64" />,
};
export default meta;
