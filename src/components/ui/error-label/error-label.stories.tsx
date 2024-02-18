import { ErrorLabel } from './error-label';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorLabel> = {
	component: ErrorLabel,
};

type Story = StoryObj<typeof ErrorLabel>;

export const Primary: Story = {
	render: () => <ErrorLabel>Error text</ErrorLabel>,
};

export default meta;
