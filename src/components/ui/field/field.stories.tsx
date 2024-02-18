import { IconButton } from '@/components/ui/icon-button';
import { Cross } from '@/components/ui/icons/cross';
import { DragDots } from '@/components/ui/icons/drag-dots';
import { Plus } from '@/components/ui/icons/plus';

import { Field } from './field';
import { Input } from '../input';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Field> = {
	title: 'Components/ui/Field',
	component: Field,
};

type Story = StoryObj<typeof Field>;

export const Default: Story = {
	render: () => (
		<Field id="0">
			<Input placeholder="Placeholder" />
		</Field>
	),
};

export const WithLabel: Story = {
	render: () => (
		<Field id="1" label="With Label">
			<Input placeholder="Placeholder" />
		</Field>
	),
};

export const Required: Story = {
	render: () => (
		<Field id="2" label="With Label" required>
			<Input placeholder="Placeholder" />
		</Field>
	),
};

export const WithErrMessage: Story = {
	render: () => (
		<Field id="2" label="With Label" required errMessage="Typical form error">
			<Input placeholder="Placeholder" />
		</Field>
	),
};

export const WithRightContent: Story = {
	render: () => (
		<Field
			id="0"
			rightContent={
				<IconButton>
					<Cross />
				</IconButton>
			}
		>
			<Input placeholder="Placeholder" />
		</Field>
	),
};

export const WithLeftContent: Story = {
	render: () => (
		<Field
			id="0"
			leftContent={
				<IconButton>
					<DragDots size="24" />
				</IconButton>
			}
		>
			<Input placeholder="Placeholder" />
		</Field>
	),
};

export const WithBothSidesContent: Story = {
	render: () => (
		<Field
			id="0"
			leftContent={
				<>
					<IconButton zeroSpacing>
						<DragDots size="24" />
					</IconButton>
					<IconButton zeroSpacing>
						<Plus size="24" />
					</IconButton>
				</>
			}
			rightContent={
				<IconButton zeroSpacing>
					<Cross />
				</IconButton>
			}
		>
			<Input placeholder="Placeholder" />
		</Field>
	),
};

export default meta;
