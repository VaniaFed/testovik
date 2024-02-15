import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
	component: Heading,
};

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
	render: () => <Heading size="1">Size 1</Heading>,
};

export const H2: Story = {
	render: () => <Heading size="2">Size 2</Heading>,
};

export const H3: Story = {
	render: () => <Heading size="3">Size 3</Heading>,
};

export default meta;
