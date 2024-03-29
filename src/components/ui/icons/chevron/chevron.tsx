import React from 'react';

import { IconBase } from '@/components/ui/icon-base';

import type { Props } from './props';
import type { FC } from 'react';

export const Chevron: FC<Props> = ({ className, ...rest }) => {
	return (
		<IconBase className={className} {...rest}>
			<svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
				<path d="M13 19.4141L4.29289 10.707C3.90236 10.3164 3.90237 9.68326 4.29289 9.29274C4.68341 8.90221 5.31658 8.90221 5.7071 9.29274L13 16.5856L20.2929 9.29274C20.6834 8.90221 21.3166 8.90221 21.7071 9.29274C22.0976 9.68326 22.0976 10.3164 21.7071 10.707L13 19.4141Z" />
			</svg>
		</IconBase>
	);
};
