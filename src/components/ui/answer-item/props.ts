import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	// type: 'right' | 'wrong' | 'unanswered';
	isRight?: boolean;
	isWrong?: boolean;
	unanswered?: boolean;
	value?: string | number | boolean;
}
