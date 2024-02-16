import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { Form } from './form';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Form> = {
	component: Form,
};

type Story = StoryObj<typeof Form>;

export const Primary: Story = {
	render: () => (
		<Form>
			<Field id="id">
				<Input placeholder="Form field"></Input>
			</Field>
			<div className="button-wrapper">
				<Button variant="accent">Submit</Button>
			</div>
		</Form>
	),
};

export const WithFormError: Story = {
	render: () => (
		<Form errMessage="With Error">
			<Field id="id">
				<Input placeholder="Form field"></Input>
			</Field>
			<div className="button-wrapper">
				<Button variant="accent">Submit</Button>
			</div>
		</Form>
	),
};

export default meta;
