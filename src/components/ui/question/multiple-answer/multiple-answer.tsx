import React from 'react';
import classNames from 'classnames/bind';
import styles from './multiple-answer.module.scss';
import type { FC } from 'react';
import type { Props } from './props';
import { Stack } from '@/components/layout/stack';
import { Field } from '@/components/ui/field';
import { Checkbox } from '@/components/ui/checkbox';
import { ErrorLabel } from '@/components/ui/error-label';

const cx = classNames.bind(styles);

export const MultipleAnswer: FC<Props> = ({
	question,
	mode,
	errMessage,
	className,
	handleChange,
	checkIfAnswerChecked = () => {},
}) => {
	return (
		<Stack className={cx('multiple-answer', className)}>
			{question.answers.map((answer, index) => (
				<Field id="multiple-answer" key={index}>
					<Checkbox
						_size="18"
						disabled={mode === 'edit'}
						checked={mode === 'edit' ? answer.is_right : checkIfAnswerChecked(answer.id)}
						onChange={() => handleChange && handleChange(question.id, answer.id)}>
						{answer.text}
					</Checkbox>
				</Field>
			))}
			{errMessage && <ErrorLabel>{errMessage}</ErrorLabel>}
		</Stack>
	);
};
