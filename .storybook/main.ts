const path = require('path');

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config: any) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@/components': path.resolve(__dirname, '../src/components/'),
			'@/utils': path.resolve(__dirname, '../src/utils/'),
		};

		return config;
	},
};
export default config;
