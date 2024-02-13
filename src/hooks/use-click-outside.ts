import { useEffect, type RefObject } from 'react';

export function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, onClickOutside?: () => void): void {
	if (!onClickOutside) {
		return;
	}

	const handleClickOutside = (e: MouseEvent): void => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			onClickOutside();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
}
