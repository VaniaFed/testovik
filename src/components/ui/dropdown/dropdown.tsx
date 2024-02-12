import React from 'react';
import classNames from 'classnames/bind';
import { Input } from '@/components/ui/input';
import { useDropdown } from '@/hooks/use-dropdown';
import { DropdownList } from './dropdown-list/';
import { Chevron } from '@/components/ui/icons/chevron';
import styles from './dropdown.module.scss';
import type { PropsWithChildren, ReactElement } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Dropdown = <T extends unknown>({
	items,
	active,
	name,
	placeholder,
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
					placeholder={placeholder}
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
