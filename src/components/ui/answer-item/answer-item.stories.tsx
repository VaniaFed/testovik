import type { Meta, StoryObj } from '@storybook/react';

import { AnswerItem } from './answer-item';

const meta: Meta<typeof AnswerItem> = {
	component: AnswerItem,
};

type Story = StoryObj<typeof AnswerItem>;

export const Rest: Story = {
	render: () => <AnswerItem value="Текст ответа" readOnly />,
};

export const IsRight: Story = {
	render: () => <AnswerItem isRight value="Правильный ответ" readOnly />,
};

export const IsWrong: Story = {
	render: () => <AnswerItem isWrong value="Ошибочный ответ" readOnly />,
};

export const Unanswered: Story = {
	render: () => <AnswerItem unanswered value="Неотвеченный ответ" readOnly />,
};

export default meta;
