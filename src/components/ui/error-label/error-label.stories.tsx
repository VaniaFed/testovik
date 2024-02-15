import type { Meta, StoryObj } from '@storybook/react';
import { ErrorLabel } from './error-label';

const meta: Meta<typeof ErrorLabel> = {
	component: ErrorLabel,
};

type Story = StoryObj<typeof ErrorLabel>;

export const Primary: Story = {
	render: () => <ErrorLabel>Error text</ErrorLabel>,
};

export default meta;
