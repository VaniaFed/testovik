import type { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	checkboxSize?: '18' | '24';
}
