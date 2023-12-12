import type { Meta, StoryObj } from '@storybook/react';

import { Login } from './login';

const meta: Meta<typeof Login> = {
	component: Login,
};

type Story = StoryObj<typeof Login>;

export const NotLoggedIn: Story = {
	render: () => <Login />,
};
export const LoggedInAsAdmin: Story = {
	render: () => <Login loggedIn userName="vaniafed" userRole="admin" />,
};

export const LoggedInAsUser: Story = {
	render: () => <Login loggedIn userName="vaniafed" userRole="user" />,
};

export default meta;
