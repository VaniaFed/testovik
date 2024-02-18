import { LoaderBox } from './loader-box';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoaderBox> = {
	component: LoaderBox,
};

type Story = StoryObj<typeof LoaderBox>;

export const Primary: Story = {
	render: () => <LoaderBox />,
};
export default meta;
