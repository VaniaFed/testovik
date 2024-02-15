import type { Meta, StoryObj } from '@storybook/react';
import { SingleAnswer } from './single-answer';
import { Question } from '@/reduxjs/modules/tests';

const meta: Meta<typeof SingleAnswer> = {
	component: SingleAnswer,
};

type Story = StoryObj<typeof SingleAnswer>;

const question: Question = {
	id: 746,
	title: 'Single question',
	question_type: 'single',
	answer: null,
	answers: [
		{ id: 1, text: '1?', is_right: false },
		{ id: 2, text: '2?', is_right: false },
		{ id: 3, text: '3?', is_right: false },
		{ id: 4, text: '4?', is_right: false },
		{ id: 5, text: '5?', is_right: true },
	],
};

export const Primary: Story = {
	render: () => <SingleAnswer question={question} mode="edit" />,
};

export const WithError: Story = {
	render: () => <SingleAnswer question={question} mode="edit" errMessage="Error" />,
};

export default meta;
