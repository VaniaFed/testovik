// cSpell:disable
import { Paragraph } from './paragraph';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Paragraph> = {
	component: Paragraph,
};

type Story = StoryObj<typeof Paragraph>;

export const Regular: Story = {
	render: () => (
		<Paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
			ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</Paragraph>
	),
};

export const Small: Story = {
	render: () => (
		<Paragraph small>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
			ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</Paragraph>
	),
};
export default meta;
