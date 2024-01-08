import type { ButtonHTMLAttributes } from 'react';
import type { ButtonVariant } from '@/types/common';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	variant?: ButtonVariant;
	circle?: boolean;
}
