import { ErrorBlock } from './error-block';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorBlock> = {
	component: ErrorBlock,
};

type Story = StoryObj<typeof ErrorBlock>;

export const FourOfFour: Story = {
	render: () => (
		<ErrorBlock errorType="404" errorLabel="404 error">
			Your content here
		</ErrorBlock>
	),
};

export const NoAccess: Story = {
	render: () => (
		<ErrorBlock errorType="no_access" errorLabel="Your have no access to this resource">
			Your content here
		</ErrorBlock>
	),
};

export const CustomError: Story = {
	render: () => (
		<ErrorBlock errorType="error" errorLabel="Some error has occurred">
			Your content here
		</ErrorBlock>
	),
};

export default meta;
