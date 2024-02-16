import classNames from 'classnames/bind';
import React from 'react';

import { Chevron } from '@/components/ui/icons/chevron';
import { Input } from '@/components/ui/input';
import { useDropdown } from '@/hooks/use-dropdown';

import { DropdownList } from './dropdown-list/';
import styles from './dropdown.module.scss';

import type { Props } from './props';
import type { PropsWithChildren, ReactElement } from 'react';

const cx = classNames.bind(styles);

export const Dropdown = <T extends unknown>({
	items,
	active,
	name,
	isInvalid,
	className,
	onChange = () => {},
	onBlur = () => {},
}: PropsWithChildren<Props<T>>): ReactElement | null => {
	const { isOpened, menuRef, openMenu, handleItemClick } = useDropdown<T>(onChange);

	return (
		<div className={cx('dropdown', className)}>
			<div className={cx('dropdown__input-wrapper')}>
				<Input
					value={active.label}
					type="text"
					name={name}
					id={name}
					isInvalid={isInvalid}
					className={cx('dropdown__input')}
					onClick={openMenu}
					readOnly
					onBlur={onBlur}
				/>
				<Chevron className={cx('dropdown__chevron')} />
			</div>
			{isOpened && (
				<DropdownList<T> items={items} active={active} onClick={handleItemClick} customRef={menuRef} />
			)}
		</div>
	);
};
