import { Footer } from './footer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
	component: Footer,
};

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
	render: () => <Footer />,
};
export default meta;
