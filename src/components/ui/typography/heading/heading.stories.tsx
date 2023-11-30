import React from 'react';

import { Heading } from './heading';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Heading',
	component: Heading,
};

export default meta;

export const H1: ComponentStory<typeof Heading> = (args: Props) => <Heading {...args}>H1</Heading>;
export const H2: ComponentStory<typeof Heading> = (args: Props) => (
	<Heading size="2" {...args}>
		H2
	</Heading>
);
