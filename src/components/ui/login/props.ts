export interface Props {
	loggedIn?: boolean;
	userName?: string;
	userRole?: 'admin' | 'user';
	onLogOut: (e: React.MouseEvent) => void;
	className?: string;
}
