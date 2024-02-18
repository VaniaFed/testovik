import { Label } from './label';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
	component: Label,
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {
	render: () => <Label>Label text</Label>,
};

export const Required: Story = {
	render: () => <Label required>Label text</Label>,
};

export const Small: Story = {
	render: () => <Label small>Label text</Label>,
};

export default meta;
