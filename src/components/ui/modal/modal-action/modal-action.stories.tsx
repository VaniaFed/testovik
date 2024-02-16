import { ModalAction } from './modal-action';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ModalAction> = {
	component: ModalAction,
};

type Story = StoryObj<typeof ModalAction>;

export const Accent: Story = {
	render: () => (
		<ModalAction
			actionText="Action text"
			title="Title"
			subtitle="Subtitle"
			primaryButtonVariant="accent"
			onAction={console.log}
			close={console.log}
		/>
	),
};

export const Negative: Story = {
	render: () => (
		<ModalAction
			actionText="Action text"
			title="Title"
			subtitle="Subtitle"
			primaryButtonVariant="negative"
			onAction={console.log}
			close={console.log}
		/>
	),
};
export default meta;
