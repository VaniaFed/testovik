import { Cross } from '@/components/ui/icons/cross';
import { Question as IQuestion } from '@/reduxjs/modules/tests';

import { Question } from './question';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Question> = {
	component: Question,
};

type Story = StoryObj<typeof Question>;

const questions: IQuestion[] = [
	{
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
	},
	{
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
	},
	{ id: 748, title: 'Number question', question_type: 'number', answer: 242442, answers: [] },
];

export const Primary: Story = {
	render: () => <Question question={questions[0]} lastQuestion />,
};

export const WithDivider: Story = {
	render: () => <Question question={questions[0]} />,
};

export const WithBottomContent: Story = {
	render: () => (
		<Question
			question={questions[0]}
			bottomContent={
				<>
					<Cross />
				</>
			}
		/>
	),
};

export const EditMode: Story = {
	render: () => <Question question={questions[0]} mode="edit" />,
};

export const MultipleQuestion: Story = {
	render: () => <Question question={questions[1]} mode="edit" />,
};

export const NumberQuestion: Story = {
	render: () => <Question question={questions[2]} mode="edit" />,
};
export default meta;
