import { Loader } from './loader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
	component: Loader,
};

type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
	render: () => <Loader />,
};
export default meta;
