import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode;
	small?: boolean;
	className?: string;
}
