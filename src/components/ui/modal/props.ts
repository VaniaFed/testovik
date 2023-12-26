export interface Props {
	header: React.ReactNode;
	footer: React.ReactNode;
	children?: React.ReactNode;
	closable?: boolean;
	closeModal?: () => void;
	className?: string;
}
