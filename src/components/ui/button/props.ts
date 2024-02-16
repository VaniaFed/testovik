import type { ButtonVariant } from '@/types/common';
import type { ButtonHTMLAttributes } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	variant?: ButtonVariant;
	circle?: boolean;
}
