import { Button } from './button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
	component: Button,
};

type Story = StoryObj<typeof Button>;

const logging = (): void => {
	console.log('Hello, warlord');
};

export const Default: Story = {
	render: () => <Button onClick={logging}>Default button</Button>,
};

export const Accent: Story = {
	render: () => (
		<Button onClick={logging} variant="accent">
			Positive
		</Button>
	),
};

export const Positive: Story = {
	render: () => (
		<Button onClick={logging} variant="positive">
			Positive
		</Button>
	),
};

export const Attention: Story = {
	render: () => (
		<Button onClick={logging} variant="attention">
			Attention
		</Button>
	),
};

export const Negative: Story = {
	render: () => (
		<Button onClick={logging} variant="negative">
			Negative
		</Button>
	),
};

export const Secondary: Story = {
	render: () => (
		<Button onClick={logging} variant="secondary">
			Secondary
		</Button>
	),
};

export const AccentAsText: Story = {
	render: () => (
		<Button onClick={logging} variant="text_accent">
			Accent text
		</Button>
	),
};
export const NegativeAsText: Story = {
	render: () => (
		<Button onClick={logging} variant="text_negative">
			Negative text
		</Button>
	),
};

export default meta;
