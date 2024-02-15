import type { Meta, StoryObj } from '@storybook/react';
import { MultipleAnswer } from './multiple-answer';
import { Question } from '@/reduxjs/modules/tests';

const meta: Meta<typeof MultipleAnswer> = {
	component: MultipleAnswer,
};

type Story = StoryObj<typeof MultipleAnswer>;

const question: Question = {
	id: 747,
	title: 'Multiple question',
	question_type: 'multiple',
	answer: null,
	answers: [
		{ id: 1829, text: '1', is_right: true },
		{ id: 1830, text: '2', is_right: false },
		{ id: 1832, text: '3', is_right: false },
		{ id: 1831, text: '4', is_right: true },
	],
};

export const Primary: Story = {
	render: () => <MultipleAnswer question={question} mode="edit" />,
};

export const WithError: Story = {
	render: () => <MultipleAnswer question={question} mode="edit" errMessage="Error" />,
};

export default meta;
