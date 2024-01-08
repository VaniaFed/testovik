import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
	component: Pagination,
};

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
	render: () => (
		<Pagination
			currentPage={5}
			totalCount={22}
			disable={{ left: false, right: false }}
			goToPage={() => {}}
			onNextPage={() => {}}
			onPrevPage={() => {}}
		/>
	),
};
export default meta;
