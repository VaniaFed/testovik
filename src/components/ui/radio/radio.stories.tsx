import { Radio } from './radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
	component: Radio,
};

type Story = StoryObj<typeof Radio>;

export const Unchecked: Story = {
	render: () => (
		<Radio name="sss" onChange={() => {}}>
			Unchecked
		</Radio>
	),
};

export const Checked: Story = {
	render: () => (
		<Radio checked name="ddd" onChange={() => {}}>
			Checked
		</Radio>
	),
};

export const WithNoLabel: Story = {
	render: () => <Radio checked name="fff" onChange={() => {}} />,
};

export default meta;
