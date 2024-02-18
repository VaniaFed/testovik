import type { IconBaseProps } from '@/components/ui/icon-base/props';

export interface Props extends Omit<IconBaseProps, 'children'> {
	direction?: 'up' | 'right' | 'down' | 'left';
}
