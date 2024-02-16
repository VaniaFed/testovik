import { MainLayout } from './main-layout';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainLayout> = {
	component: MainLayout,
};

type Story = StoryObj<typeof MainLayout>;

export const Primary: Story = {
	render: () => <MainLayout>Your content here</MainLayout>,
};
export default meta;
