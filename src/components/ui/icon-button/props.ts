import type { ButtonVariant } from '@/types/common';
import type { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: Omit<ButtonVariant, 'secondary'>;
	zeroSpacing?: boolean;
	circle?: boolean;
	disabled?: boolean;
	className?: string;
}
