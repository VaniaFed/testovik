import { IconButton } from './icon-button';
import { PlusBold } from '@/components/ui/icons/plus-bold';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
	component: IconButton,
};

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
	render: () => (
		<IconButton>
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

export default meta;
