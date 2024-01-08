import type { Meta, StoryObj } from '@storybook/react';

import { Arrow } from './arrow';

const meta: Meta<typeof Arrow> = {
	component: Arrow,
};

type Story = StoryObj<typeof Arrow>;

export const ArrowDefault: Story = {
	render: () => <Arrow />,
};

export const ArrowUp: Story = {
	render: () => <Arrow direction="up" />,
};

export const ArrowRight: Story = {
	render: () => <Arrow direction="right" />,
};

export const ArrowDown: Story = {
	render: () => <Arrow direction="down" />,
};

export const ArrowLeft: Story = {
	render: () => <Arrow direction="left" />,
};

export const Arrow18: Story = {
	render: () => <Arrow size="18" />,
};

export const Arrow24: Story = {
	render: () => <Arrow size="24" />,
};

export const Arrow32: Story = {
	render: () => <Arrow size="32" />,
};

export const Arrow64: Story = {
	render: () => <Arrow size="64" />,
};

export default meta;
