export interface Props {
	children: React.ReactNode;
	direction?: 'column' | 'row';
	gap?: '9' | '12' | '18' | '24' | '30';
	alignCenter?: boolean;
	justifyContentCenter?: boolean;
	className?: string;
}
