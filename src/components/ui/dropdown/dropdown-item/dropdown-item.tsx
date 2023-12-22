import React from 'react';
import classNames from 'classnames/bind';
import { Paragraph } from '@/components/ui/typography/paragraph';
import styles from './dropdown-item.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const DropdownItem: FC<Props> = ({ label, value, isActive, className, onClick = () => {} }) => {
	return (
		<Paragraph
			className={cx('dropdown-item', isActive && 'dropdown-item_active', className)}
			onClick={() => {
				onClick({ label, value });
			}}>
			{label}
		</Paragraph>
	);
};
