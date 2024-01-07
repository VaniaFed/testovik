import type { HTMLAttributes } from 'react';
import type { ButtonVariant } from '@/types/common';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	variant?: Omit<ButtonVariant, 'secondary'>;
	zeroSpacing?: boolean;
	children: React.ReactNode;
	className?: string;
}
