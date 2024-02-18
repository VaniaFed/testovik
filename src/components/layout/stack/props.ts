import { OlHTMLAttributes, Ref } from 'react';

export interface Props extends OlHTMLAttributes<HTMLUListElement> {
	children: React.ReactNode;
	direction?: 'column' | 'row';
	gap?: '9' | '12' | '18' | '24' | '30';
	alignCenter?: boolean;
	justifyContentCenter?: boolean;
	className?: string;
	innerRef?: Ref<any>;
}
