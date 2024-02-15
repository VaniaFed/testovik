import type { Meta, StoryObj } from '@storybook/react';
import { NumberAnswer } from './number-answer';
import { Question } from '@/reduxjs/modules/tests';

const meta: Meta<typeof NumberAnswer> = {
	component: NumberAnswer,
};

type Story = StoryObj<typeof NumberAnswer>;

const question: Question = { id: 748, title: 'Number question', question_type: 'number', answer: 242442, answers: [] };

export const Primary: Story = {
	render: () => <NumberAnswer mode="edit" question={question} />,
};

export const WithError: Story = {
	render: () => <NumberAnswer mode="edit" question={question} errMessage="Error" />,
};

export default meta;
