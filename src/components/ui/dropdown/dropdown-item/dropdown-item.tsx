import classNames from 'classnames/bind';
import React from 'react';

import { Paragraph } from '@/components/ui/typography/paragraph';

import styles from './dropdown-item.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const DropdownItem = <T extends unknown>({
	label,
	value,
	isActive,
	className,
	onClick = () => {},
}: Props<T>) => {
	return (
		<Paragraph
			className={cx('dropdown-item', isActive && 'dropdown-item_active', className)}
			onClick={() => {
				onClick({ label, value });
			}}
		>
			{label}
		</Paragraph>
	);
};
