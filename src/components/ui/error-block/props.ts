export interface Props {
	errorType: '404' | 'no_access' | 'error';
	errorLabel: string;
	children: React.ReactNode;
	className?: string;
}
