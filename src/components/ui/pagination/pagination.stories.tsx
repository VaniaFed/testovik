import { Pagination } from './pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
	component: Pagination,
};

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
	render: () => (
		<Pagination
			totalPages={9}
			currentPage={1}
			itemsPerPage={10}
			totalItems={22}
			onNextPageClick={console.log}
			onPrevPageClick={console.log}
			onItemClick={console.log}
		/>
	),
};
export default meta;
