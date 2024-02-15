import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';
import { Providers } from '@/components/utils/providers';

const meta: Meta<typeof Header> = {
	component: Header,
};

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
	render: () => (
		<Providers>
			<Header />
		</Providers>
	),
};
export default meta;
