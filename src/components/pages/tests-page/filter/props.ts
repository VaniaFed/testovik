import { ChangeEvent } from 'react';

export interface Props {
	className?: string;
	value?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onClear?: () => void;
}
