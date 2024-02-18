export interface Props {
	header: React.ReactNode;
	footer: React.ReactNode;
	children?: React.ReactNode;
	close?: () => void;
	className?: string;
	overlayContentClassName?: string;
}
