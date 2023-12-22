import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
	size?: '1' | '2' | '3';
	children?: React.ReactNode;
	className?: string;
}
