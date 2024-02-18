import React from 'react';

import { IconBase } from '@/components/ui/icon-base';

import type { Props } from './props';
import type { FC } from 'react';

export const Sort: FC<Props> = ({ className, ...rest }) => {
	return (
		<IconBase className={className} {...rest}>
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_6_747)">
					<path d="M4.20622 7.54354V20.9784H6.45091V7.54354L8.84067 10.8349L10.6572 9.51526L5.32859 2.17763L0 9.51526L1.81651 10.8349L4.20622 7.54354Z" />
					<path d="M19.7941 16.4565V3.02159H17.5494V16.4566L15.1593 13.1651L13.3428 14.4847L18.6718 21.8224L24 14.484L22.1835 13.1658L19.7941 16.4565Z" />
				</g>
			</svg>
		</IconBase>
	);
};
