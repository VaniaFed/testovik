import type { Meta, StoryObj } from '@storybook/react';
import { LoaderBox } from './loader-box';

const meta: Meta<typeof LoaderBox> = {
	component: LoaderBox,
};

type Story = StoryObj<typeof LoaderBox>;

export const Primary: Story = {
	render: () => <LoaderBox />,
};
export default meta;
