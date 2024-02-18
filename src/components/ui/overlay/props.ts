import { RefObject } from 'react';

export interface Props {
	children: React.ReactNode;
	withDarkBackground?: boolean;
	contentRef?: RefObject<HTMLElement>;
	className?: string;
	overlayContentClassName?: string;
}
