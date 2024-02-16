import classNames from 'classnames/bind';
import React from 'react';

import { Stack } from '@/components/layout/stack';
import { Checkbox } from '@/components/ui/checkbox';
import { ErrorLabel } from '@/components/ui/error-label';
import { Field } from '@/components/ui/field';

import styles from './multiple-answer.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const MultipleAnswer: FC<Props> = ({
	question,
	mode,
	errMessage,
	className,
	handleChange,
	checkIfAnswerChecked,
}) => {
	return (
		<Stack className={cx('multiple-answer', className)}>
			{question.answers.map(
				(answer, index) =>
					answer && (
						<Field id="multiple-answer" key={index}>
							<Checkbox
								_size="18"
								disabled={mode === 'edit'}
								checked={mode === 'edit' ? answer.is_right : checkIfAnswerChecked!(answer.id)}
								onChange={() => handleChange && handleChange(question.id, answer.id)}>
								{answer.text}
							</Checkbox>
						</Field>
					),
			)}
			{errMessage && <ErrorLabel>{errMessage}</ErrorLabel>}
		</Stack>
	);
};
