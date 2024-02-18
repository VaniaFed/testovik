import { Subtitle } from './subtitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Subtitle> = {
	component: Subtitle,
};

type Story = StoryObj<typeof Subtitle>;

export const Regular: Story = {
	render: () => <Subtitle>Subtitle text</Subtitle>,
};

export const Medium: Story = {
	render: () => <Subtitle style="medium">Subtitle text</Subtitle>,
};
export const Light: Story = {
	render: () => <Subtitle style="light">Subtitle text</Subtitle>,
};
export default meta;
