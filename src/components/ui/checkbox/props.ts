import type { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	_size?: '18' | '24';
}
