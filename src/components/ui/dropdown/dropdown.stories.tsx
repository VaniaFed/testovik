import React from 'react';

import { Dropdown } from './dropdown';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Dropdown',
	component: Dropdown,
};

export default meta;
export const Default: ComponentStory<typeof Dropdown> = (args: Props) => <Dropdown {...args} />;
Default.args = {
	dropdownItems: [
		{
			label: 'Аргентина',
			value: 'аргентина',
		},
		{
			label: 'Тверь',
			value: 'тверь',
		},
	],
	className: '',
};
