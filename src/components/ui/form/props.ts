import type { FormHTMLAttributes } from 'react';

export interface Props extends FormHTMLAttributes<HTMLFormElement> {
	errMessage?: string;
	className?: string;
}
