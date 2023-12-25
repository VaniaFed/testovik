import { Field } from './field';
import { Input } from '../input';
import { Textarea } from '../textarea';
import type { Meta, StoryObj } from '@storybook/react';
import type { Props } from './props';

const meta: Meta<typeof Field> = {
	title: 'Field',
	component: Field,
};

type Story = StoryObj<typeof Field>;

export const Default: Story = {
	render: () => (
		<Field id="0">
			<Input />
		</Field>
	),
};

export const WithLabel: Story = {
	render: () => (
		<Field id="1" label="With Label">
			<Input />
		</Field>
	),
};

export const Required: Story = {
	render: () => (
		<Field id="2" label="With Label" required>
			<Input />
		</Field>
	),
};

export const WithErrMessage: Story = {
	render: () => (
		<Field id="2" label="With Label" required errMessage="Typical form error">
			<Input />
		</Field>
	),
};

export const WithFieldTextArea: Story = {
	render: () => (
		<Field id="2" label="With Label">
			<Textarea />
		</Field>
	),
};

export default meta;
