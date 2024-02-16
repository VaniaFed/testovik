import { Paragraph } from '@/components/ui/typography/paragraph';

import { Divider } from './divider';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Divider> = {
	component: Divider,
};

type Story = StoryObj<typeof Divider>;

export const Primary: Story = {
	render: () => (
		<>
			<Paragraph style={{ marginBottom: '9px' }}>Some content</Paragraph>
			<Divider />
			<Paragraph style={{ marginTop: '9px' }}>Some content</Paragraph>
		</>
	),
};
export default meta;
