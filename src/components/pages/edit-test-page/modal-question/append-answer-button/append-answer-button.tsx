import React from 'react';
import classNames from 'classnames/bind';
import { Button } from '@/components/ui/button';
import { PlusBold } from '@/components/ui/icons/plus-bold';
import styles from './append-answer-button.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const AppendAnswerButton: FC<Props> = ({ onAppend, className }) => {
	return (
		<Button
			className={cx('append-answer-button', className)}
			type="button"
			onClick={onAppend}
			startIcon={<PlusBold color="white" />}
			variant="secondary">
			Добавить ответ
		</Button>
	);
};
