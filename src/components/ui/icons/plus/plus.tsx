import React from 'react';
import type { FC } from 'react';
import type { Props } from './props';
import { IconBase } from '@/components/ui/icon-base';

export const Plus: FC<Props> = ({ className, ...rest }) => {
	return (
		<IconBase className={className} {...rest}>
			<svg
				enableBackground="new 0 0 512 512"
				id="Layer_1"
				version="1.1"
				viewBox="0 0 512 512"
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg">
				<g>
					<path d="M256.108,3.02c-139.743,0-253,113.257-253,253s113.257,252.995,253,252.995   c139.743,0,253-113.252,253-252.995S395.852,3.02,256.108,3.02z M256.108,488.775c-128.338,0-232.76-104.417-232.76-232.755   c0-128.339,104.422-232.76,232.76-232.76c128.338,0,232.76,104.421,232.76,232.76C488.868,384.358,384.446,488.775,256.108,488.775   z" />
					<polygon points="266.228,104.22 245.988,104.22 245.988,245.9 104.98,245.9 104.98,266.14 245.988,266.14    245.988,407.148 266.228,407.148 266.228,266.14 407.908,266.14 407.908,245.9 266.228,245.9  " />
				</g>
			</svg>
		</IconBase>
	);
};