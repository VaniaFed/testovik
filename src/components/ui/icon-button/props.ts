import { ButtonVariant } from '@/components/ui/button/props';
import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	variant?: Omit<ButtonVariant, 'secondary'>;
	zeroSpacing?: boolean;
	children: React.ReactNode;
	className?: string;
}
