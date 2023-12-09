import type { ButtonHTMLAttributes } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'accent' | 'positive' | 'attention' | 'negative' | 'secondary';
}
