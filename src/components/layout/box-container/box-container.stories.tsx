import type { Meta, StoryObj } from '@storybook/react';
import { BoxContainer } from './box-container';

const meta: Meta<typeof BoxContainer> = {
	component: BoxContainer,
};

type Story = StoryObj<typeof BoxContainer>;

export const Primary: Story = {
	render: () => <BoxContainer>Your content here</BoxContainer>,
};
export default meta;
