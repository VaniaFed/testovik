import React from 'react';
import classNames from 'classnames/bind';
import { Input } from '@/components/ui/input';
import { useDropdown } from '@/hooks/use-dropdown';
import { DropdownList } from './dropdown-list/';
import { Chevron } from '@/components/ui/icons/chevron';
import styles from './dropdown.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Dropdown: FC<Props> = ({
	items,
	active,
	name,
	placeholder,
	isInvalid,
	className,
	onChange = () => {},
	onBlur = () => {},
}) => {
	const { isOpened, menuRef, openMenu, handleItemClick } = useDropdown(onChange);

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
			{isOpened && <DropdownList items={items} active={active} onClick={handleItemClick} ref={menuRef} />}
		</div>
	);
};
