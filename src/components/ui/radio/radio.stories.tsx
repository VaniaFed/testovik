import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';

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
		<Radio value={true} name="ddd" onChange={() => {}}>
			Checked
		</Radio>
	),
};

export const WithNoLabel: Story = {
	render: () => <Radio value={true} name="fff" onChange={() => {}} />,
};

export default meta;
