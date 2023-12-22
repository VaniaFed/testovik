import { useState, type RefObject, useRef } from 'react';

import { useClickOutside } from './use-click-outside';
import { DropdownItem } from '@/types/common';

interface UseDropDownReturnType {
	isOpened: boolean;
	menuRef: RefObject<HTMLUListElement>;
	openMenu: () => void;
	closeMenu: () => void;
	handleItemClick: (item: DropdownItem) => void;
}

export const useDropdown = (onItemClick: (item: DropdownItem) => void): UseDropDownReturnType => {
	const [isOpened, setIsOpen] = useState(false);

	const openMenu = (): void => {
		setIsOpen(true);
	};

	const closeMenu = (): void => {
		setIsOpen(false);
	};

	const handleItemClick = (item: DropdownItem): void => {
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
