import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { DropdownItem } from '../dropdown-item';
import styles from './dropdown-list.module.scss';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const DropdownList = forwardRef<HTMLUListElement, Props>(
	({ items, active, className, onClick = () => {} }, ref) => {
		return (
			<ul className={cx('dropdown-list', className)} ref={ref}>
				{items?.map((item, key) => (
					<li key={key} className={cx('dropdown-list__item')}>
						<DropdownItem
							label={item.label}
							value={item.value}
							isActive={active.value === item.value}
							onClick={onClick}
						/>
					</li>
				))}
			</ul>
		);
	},
);

DropdownList.displayName = 'DropdownList';
