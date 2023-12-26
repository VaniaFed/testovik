import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './stack';
import { Heading } from '@/components/ui/typography/heading';

const meta: Meta<typeof Stack> = {
	component: Stack,
};

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
	render: () => (
		<Stack>
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};

export const Column12: Story = {
	render: () => (
		<Stack gap="12">
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};

export const Column18: Story = {
	render: () => (
		<Stack gap="18">
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};

export const Column24: Story = {
	render: () => (
		<Stack gap="24">
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};

export const Column30: Story = {
	render: () => (
		<Stack gap="30">
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};

export const Row12: Story = {
	render: () => (
		<Stack direction="row" gap="12">
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};

export const Row18: Story = {
	render: () => (
		<Stack direction="row" gap="18">
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};

export const Row24: Story = {
	render: () => (
		<Stack direction="row" gap="24">
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};

export const Row30: Story = {
	render: () => (
		<Stack direction="row" gap="30">
			<Heading size="3">1</Heading>
			<Heading size="3">2</Heading>
			<Heading size="3">3</Heading>
		</Stack>
	),
};
export default meta;
