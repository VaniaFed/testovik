import React from 'react';
import classNames from 'classnames/bind';

import styles from './answer-item.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import { Input } from '@/components/ui/input';

const cx = classNames.bind(styles);

export const AnswerItem: FC<Props> = ({ isRight, isWrong, unanswered, className, ...rest }) => {
	return (
		<Input
			className={cx(
				'answer-item',
				isRight && 'answer-item_right',
				isWrong && 'answer-item_wrong',
				unanswered && 'answer-item_unanswered',
				className,
			)}
			{...rest}
		/>
	);
};
