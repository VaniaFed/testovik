export interface Props {
	id: string;
	required?: boolean;
	label?: string;
	leftContent?: React.ReactNode;
	rightContent?: React.ReactNode;
	children: React.ReactNode;
	errMessage?: string;
	className?: string;
	labelClassName?: string;
}
