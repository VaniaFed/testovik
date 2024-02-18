import { RefObject, useEffect, useState } from 'react';

export const useOverflow = (contentRef?: RefObject<HTMLElement>) => {
	if (!contentRef) {
		return { isOverflowed: false };
	}

	const [isClient, setIsClient] = useState(false);
	useEffect(() => setIsClient(true), []);

	const [isOverflowed, setIsOverflowed] = useState(false);
	const contentHeight = contentRef?.current?.offsetHeight;

	useEffect(() => {
		if (!isClient || !contentHeight) {
			return;
		}

		const resize = () => {
			if (contentHeight > window.innerHeight) {
				setIsOverflowed(true);
			} else {
				setIsOverflowed(false);
			}
		};

		resize();

		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, [contentHeight, contentRef, isClient]);

	return {
		isOverflowed,
		contentHeight,
	};
};
