import type { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	isInvalid?: boolean;
	value?: string | number;
	solid?: boolean;
	onClear?: () => void;
}
