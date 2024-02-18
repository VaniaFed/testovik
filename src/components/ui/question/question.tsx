import classNames from 'classnames/bind';
import React from 'react';

import { Stack } from '@/components/layout/stack';
import { Divider } from '@/components/ui/divider';
import { MultipleAnswer } from '@/components/ui/question/multiple-answer';
import { NumberAnswer } from '@/components/ui/question/number-answer/number-answer';
import { SingleAnswer } from '@/components/ui/question/single-answer';
import { Heading } from '@/components/ui/typography/heading';

import styles from './question.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Question: FC<Props> = ({
	question,
	mode = 'pass',
	lastQuestion = false,
	bottomContent,
	className,
	handleAnswerChange,
	checkIfAnswerChecked = () => () => false,
	getUserAnswer = () => {},
}) => {
	const errorMsg = getUserAnswer(question.id)?.error;
	return (
		<Stack className={cx('question', className)} gap="18">
			<Heading size="3" className={cx('question-list__heading')}>
				{question.title}
			</Heading>
			{question.question_type === 'number' ? (
				<NumberAnswer
					question={question}
					errMessage={errorMsg}
					mode={mode}
					handleChange={handleAnswerChange && handleAnswerChange('number')}
				/>
			) : question.question_type === 'multiple' ? (
				<MultipleAnswer
					question={question}
					errMessage={errorMsg}
					mode={mode}
					checkIfAnswerChecked={checkIfAnswerChecked(question.question_type, question.id)}
					handleChange={handleAnswerChange && handleAnswerChange('multiple')}
				/>
			) : (
				<SingleAnswer
					question={question}
					errMessage={errorMsg}
					mode={mode}
					checkIfAnswerChecked={checkIfAnswerChecked(question.question_type, question.id)}
					handleChange={handleAnswerChange && handleAnswerChange('single')}
				/>
			)}
			{bottomContent}
			{!lastQuestion && <Divider />}
		</Stack>
	);
};
