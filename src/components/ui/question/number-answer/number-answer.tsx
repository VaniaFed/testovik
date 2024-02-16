import classNames from 'classnames/bind';
import React from 'react';

import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import styles from './number-answer.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const NumberAnswer: FC<Props> = ({ question, errMessage, className, mode, handleChange }) => {
	return (
		<Field className={cx('number-answer', className)} id={String(question.id)} errMessage={errMessage}>
			<Input
				type="number"
				disabled={mode === 'edit'}
				value={mode === 'edit' ? String(question.answer) : undefined}
				onChange={(e) => handleChange!(question.id, Number(e.target.value))}
			/>
		</Field>
	);
};
