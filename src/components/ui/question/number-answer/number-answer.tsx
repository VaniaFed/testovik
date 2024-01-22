import React from 'react';
import classNames from 'classnames/bind';
import styles from './number-answer.module.scss';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const NumberAnswer: FC<Props> = ({ question, errMessage, className, mode, handleChange }) => {
	return (
		<Field className={cx('number-answer', className)} id={String(question.id)} errMessage={errMessage}>
			<Input
				type="number"
				disabled={mode === 'edit'}
				value={mode === 'edit' ? question.answer : undefined}
				onChange={(e) => handleChange!(question.id, Number(e.target.value))}
			/>
		</Field>
	);
};
