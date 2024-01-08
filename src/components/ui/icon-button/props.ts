import type { HTMLAttributes } from 'react';
import type { ButtonVariant } from '@/types/common';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: Omit<ButtonVariant, 'secondary'>;
	zeroSpacing?: boolean;
	circle?: boolean;
	disabled?: boolean;
	className?: string;
}
