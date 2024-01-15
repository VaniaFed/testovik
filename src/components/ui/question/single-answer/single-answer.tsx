import React from 'react';
import classNames from 'classnames/bind';
import styles from './single-answer.module.scss';
import type { FC } from 'react';
import type { Props } from './props';
import { Stack } from '@/components/layout/stack';
import { Field } from '@/components/ui/field';
import { Radio } from '@/components/ui/radio';
import { ErrorLabel } from '@/components/ui/error-label';

const cx = classNames.bind(styles);

export const SingleAnswer: FC<Props> = ({ question, errMessage, className, mode, handleChange }) => {
	return (
		<Stack className={cx('single-answer', className)}>
			{question.answers.map((answer, index) => (
				<Field id="single-answer" key={index}>
					<Radio
						name={String(question.id)}
						disabled={mode === 'edit'}
						defaultChecked={mode === 'edit' && answer.is_right}
						onChange={() => handleChange && handleChange(question.id, answer.id)}>
						{answer.text}
					</Radio>
				</Field>
			))}
			{errMessage && <ErrorLabel>{errMessage}</ErrorLabel>}
		</Stack>
	);
};
