import { Checkbox } from './checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
};

type Story = StoryObj<typeof Checkbox>;

export const Empty: Story = {
	render: () => <Checkbox />,
};

export const WithTextContent: Story = {
	render: () => <Checkbox>Check me</Checkbox>,
};

export const Small: Story = {
	render: () => <Checkbox _size="18">Small one</Checkbox>,
};

export default meta;
