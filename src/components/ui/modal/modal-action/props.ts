import type { ButtonVariant } from '@/types/common';

export interface Props {
	title: string;
	subtitle: string;
	actionText: string;
	primaryButtonVariant: ButtonVariant;
	className?: string;
	onAction: () => void;
	close: () => void;
}
