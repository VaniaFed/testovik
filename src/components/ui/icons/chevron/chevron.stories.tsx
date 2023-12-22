import type { Meta, StoryObj } from '@storybook/react';

import { Chevron } from './chevron';

const meta: Meta<typeof Chevron> = {
	component: Chevron,
};

type Story = StoryObj<typeof Chevron>;

export const Chevron18: Story = {
	render: () => <Chevron />,
};
export const Chevron24: Story = {
	render: () => <Chevron size="24" />,
};
export const Chevron32: Story = {
	render: () => <Chevron size="32" />,
};
export const Chevron64: Story = {
	render: () => <Chevron size="64" />,
};
export default meta;
