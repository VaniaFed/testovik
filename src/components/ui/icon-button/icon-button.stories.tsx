import { PlusBold } from '@/components/ui/icons/plus-bold';

import { IconButton } from './icon-button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
	component: IconButton,
};

type Story = StoryObj<typeof IconButton>;

export const Accent: Story = {
	render: () => (
		<IconButton variant="accent">
			<PlusBold color="white" />
		</IconButton>
	),
};

export const Positive: Story = {
	render: () => (
		<IconButton variant="positive">
			<PlusBold color="white" />
		</IconButton>
	),
};

export const Circle: Story = {
	render: () => (
		<IconButton variant="accent" circle>
			<PlusBold color="white" size="24" />
		</IconButton>
	),
};

export default meta;
