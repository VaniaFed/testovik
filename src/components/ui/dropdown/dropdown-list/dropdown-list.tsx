import React, { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import { DropdownItem } from '../dropdown-item';
import styles from './dropdown-list.module.scss';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const DropdownList = <T extends unknown>({
	items,
	active,
	className,
	onClick = () => {},
	customRef,
}: PropsWithChildren<Props<T>>) => {
	return (
		<ul className={cx('dropdown-list', className)} ref={customRef}>
			{items?.map((item, key) => (
				<li key={key} className={cx('dropdown-list__item')}>
					<DropdownItem<T>
						label={item.label}
						value={item.value}
						isActive={active.value === item.value}
						onClick={onClick}
					/>
				</li>
			))}
		</ul>
	);
};
