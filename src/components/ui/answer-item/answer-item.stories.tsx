import type { Meta, StoryObj } from '@storybook/react';

import { AnswerItem } from './answer-item';

const meta: Meta<typeof AnswerItem> = {
	component: AnswerItem,
};

type Story = StoryObj<typeof AnswerItem>;

export const Rest: Story = {
	render: () => <AnswerItem defaultValue="Текст ответа" readOnly />,
};

export const IsRight: Story = {
	render: () => <AnswerItem isRight defaultValue="Правильный ответ" readOnly />,
};

export const IsWrong: Story = {
	render: () => <AnswerItem isWrong defaultValue="Ошибочный ответ" readOnly />,
};

export const Unanswered: Story = {
	render: () => <AnswerItem unanswered defaultValue="Неотвеченный ответ" readOnly />,
};

export default meta;
