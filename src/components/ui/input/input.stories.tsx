import { Input } from './input';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
	component: Input,
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	render: () => <Input placeholder="Default input" />,
};

export const DefaultWithValue: Story = {
	render: () => <Input solid placeholder="Default input" value="Input value" />,
};

export const DefaultInvalid: Story = {
	render: () => <Input placeholder="Default input" isInvalid />,
};

export const Solid: Story = {
	render: () => <Input solid placeholder="Solid input" />,
};

export const SolidWithValue: Story = {
	render: () => <Input solid placeholder="Solid input" value="Input value" />,
};

export const SolidInvalid: Story = {
	render: () => <Input solid placeholder="Solid input" isInvalid />,
};

export default meta;
