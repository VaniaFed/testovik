import { ChangeEvent } from 'react';

export interface Props {
	className?: string;
	title: string;
	onChangeTitle: (e: ChangeEvent) => void;
	questionLength: number;
}
