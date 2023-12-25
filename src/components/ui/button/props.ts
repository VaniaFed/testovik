import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'accent' | 'positive' | 'attention' | 'negative' | 'secondary';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	variant?: ButtonVariant;
}
