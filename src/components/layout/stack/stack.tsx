import React from 'react';
import classNames from 'classnames/bind';

import styles from './stack.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Stack: FC<Props> = ({
	children,
	direction = 'column',
	gap = '24',
	alignCenter,
	justifyContentCenter,
	className,
}) => {
	return (
		<ul
			className={cx(
				'stack',
				`stack_direction_${direction}`,
				`stack_gap_${gap}`,
				alignCenter && 'stack_align_center',
				justifyContentCenter && 'stack_justify-content_center',
				className,
			)}>
			{children}
		</ul>
	);
};
