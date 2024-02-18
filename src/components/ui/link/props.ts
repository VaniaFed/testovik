import type { LinkHTMLAttributes } from 'react';

export interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
	isExternal?: boolean;
	children?: React.ReactNode;
	level?: 'h1' | 'h2' | 'h3' | 'paragraph' | 'label' | 'button_accent';
	color?: 'black' | 'white' | 'blue' | 'blue_reversed';
	underline?: boolean;
	iconType?: 'go' | 'edit';
}
