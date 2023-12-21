import type { FormHTMLAttributes } from 'react';

export interface Props extends FormHTMLAttributes<HTMLFormElement> {
	formError?: string;
	className?: string;
}
