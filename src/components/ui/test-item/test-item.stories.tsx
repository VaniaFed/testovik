import type { Meta, StoryObj } from '@storybook/react';
import { TestItem } from './test-item';
import type { Test } from '@/reduxjs/modules/tests';

const meta: Meta<typeof TestItem> = {
	component: TestItem,
};

type Story = StoryObj<typeof TestItem>;

const mockedTest: Test = {
	id: 1,
	questions: [],
	title: 'География',
	created_at: '',
};

export const AsAdmin: Story = {
	render: () => <TestItem title={mockedTest.title} testId={mockedTest.id} questionNumber={5} canEdit />,
};

export const AsUser: Story = {
	render: () => <TestItem title={mockedTest.title} testId={mockedTest.id} questionNumber={5} />,
};
export default meta;
