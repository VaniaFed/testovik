const path = require('path');

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	staticDirs: ['../public'],
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
			'@/hooks': path.resolve(__dirname, '../src/hooks/'),
			'@/reduxjs': path.resolve(__dirname, '../src/reduxjs/'),
			'@/services': path.resolve(__dirname, '../src/services/'),
		};

		return config;
	},
};
export default config;
