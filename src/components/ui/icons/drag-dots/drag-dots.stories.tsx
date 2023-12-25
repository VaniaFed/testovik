import { DragDots } from './drag-dots';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DragDots> = {
	component: DragDots,
};

type Story = StoryObj<typeof DragDots>;

export const DragDots18: Story = {
	render: () => <DragDots />,
};
export const DragDots24: Story = {
	render: () => <DragDots size="24" />,
};
export const DragDots32: Story = {
	render: () => <DragDots size="32" />,
};
export const DragDots64: Story = {
	render: () => <DragDots size="64" />,
};
export default meta;
