import { MouseEvent } from 'react';

export interface Props {
	loggedIn?: boolean;
	userName?: string;
	userRole?: 'admin' | 'user';
	onLogOut: (e: MouseEvent) => void;
	className?: string;
}
