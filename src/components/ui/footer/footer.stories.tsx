import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer';

const meta: Meta<typeof Footer> = {
	component: Footer,
};

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
	render: () => <Footer />,
};
export default meta;
