import { MouseEvent } from 'react';

export interface Props {
	title: string;
	testId: number;
	questionNumber: number;
	canEdit?: boolean;
	className?: string;
	onClick?: (e: MouseEvent) => void;
}
