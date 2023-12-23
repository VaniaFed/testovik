import type { IconSize } from '@/types/common';

export interface IconBaseProps {
	children: React.ReactNode;
	size?: IconSize;
	color?: 'white' | 'black';
	className?: string;
}
