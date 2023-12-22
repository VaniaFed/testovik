import type { Meta, StoryObj } from '@storybook/react';

import { PlusBold } from './plus-bold';

const meta: Meta<typeof PlusBold> = {
	component: PlusBold,
};

type Story = StoryObj<typeof PlusBold>;

export const PlusBold18: Story = {
	render: () => <PlusBold />,
};
export const PlusBold24: Story = {
	render: () => <PlusBold size="24" />,
};
export const PlusBold32: Story = {
	render: () => <PlusBold size="32" />,
};
export const PlusBold64: Story = {
	render: () => <PlusBold size="64" />,
};

export default meta;
