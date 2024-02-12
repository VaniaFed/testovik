import React from 'react';
import classNames from 'classnames/bind';
import styles from './question-list.module.scss';
import type { FC } from 'react';
import type { Props } from './props';
import { Stack } from '@/components/layout/stack';
import { Question } from '@/components/ui/question';
import { Button } from '@/components/ui/button';

const cx = classNames.bind(styles);

export const QuestionList: FC<Props> = ({ questions, onEditQuestion, onShowDeleteQuestionModal, className }) => {
	return (
		<Stack className={cx('question-list', className)}>
			{questions.map((question, index) => (
				<li key={index}>
					<Question
						question={question}
						mode="edit"
						bottomContent={
							<Stack direction="row">
								<Button variant="text_accent" onClick={() => onEditQuestion(question)}>
									Редактировать
								</Button>
								<Button variant="text_negative" onClick={() => onShowDeleteQuestionModal(question)}>
									Удалить
								</Button>
							</Stack>
						}
					/>
				</li>
			))}
		</Stack>
	);
};
