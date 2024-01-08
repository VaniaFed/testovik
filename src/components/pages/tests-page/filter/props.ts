import { ChangeEvent } from 'react';

export interface Props {
	className?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
