import classNames from 'classnames/bind';
import React, { forwardRef } from 'react';

import styles from './stack.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Stack: FC<Props> = forwardRef<HTMLUListElement, Props>(
	(
		{
			children,
			direction = 'column',
			gap = '24',
			alignCenter,
			justifyContentCenter,
			className,
			innerRef,
			...rest
		}: Props,
		ref,
	) => {
		return (
			<ul
				className={cx(
					'stack',
					`stack_direction_${direction}`,
					`stack_gap_${gap}`,
					alignCenter && 'stack_align_center',
					justifyContentCenter && 'stack_justify-content_center',
					className,
				)}
				ref={innerRef ?? ref}
				{...rest}
			>
				{children}
			</ul>
		);
	},
);

Stack.displayName = 'Stack';
