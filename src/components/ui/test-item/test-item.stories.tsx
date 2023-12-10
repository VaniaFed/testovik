import type { Meta, StoryObj } from '@storybook/react';

import { TestItem } from './test-item';
import { Test } from '@/lib/definitions';

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

export const Primary: Story = {
	render: () => <TestItem title={mockedTest.title} testId={mockedTest.id} questionNumber="5" />,
};
export default meta;
