import { type RefObject, useRef, useState } from 'react';

import { DropdownItem } from '@/types/common';

import { useClickOutside } from './use-click-outside';

interface UseDropDown<T> {
	isOpened: boolean;
	menuRef: RefObject<HTMLUListElement>;
	openMenu: () => void;
	closeMenu: () => void;
	handleItemClick: (item: DropdownItem<T>) => void;
}

export const useDropdown = <T = string>(onItemClick: (item: DropdownItem<T>) => void): UseDropDown<T> => {
	const [isOpened, setIsOpen] = useState(false);

	const openMenu = (): void => {
		setIsOpen(true);
	};

	const closeMenu = (): void => {
		setIsOpen(false);
	};

	const handleItemClick = (item: DropdownItem<T>): void => {
		onItemClick(item);
		closeMenu();
	};

	const menuRef = useRef<HTMLUListElement>(null);

	useClickOutside<HTMLUListElement>(menuRef, closeMenu);

	return {
		isOpened,
		menuRef,
		openMenu,
		closeMenu,
		handleItemClick,
	};
};
