import classNames from 'classnames/bind';
import React from 'react';

import { Button } from '@/components/ui/button';
import { PlusBold } from '@/components/ui/icons/plus-bold';

import styles from './append-answer-button.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const AppendAnswerButton: FC<Props> = ({ onAppend, className }) => {
	return (
		<Button
			className={cx('append-answer-button', className)}
			type="button"
			onClick={onAppend}
			startIcon={<PlusBold color="white" className={cx('append-answer-button__plus')} />}
			variant="secondary"
		>
			Добавить ответ
		</Button>
	);
};
