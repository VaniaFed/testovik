import { Login } from './login';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Login> = {
	component: Login,
};

type Story = StoryObj<typeof Login>;

export const NotLoggedIn: Story = {
	render: () => <Login onLogOut={() => {}} />,
};
export const LoggedInAsAdmin: Story = {
	render: () => <Login loggedIn userName="vaniafed" userRole="admin" onLogOut={() => {}} />,
};

export const LoggedInAsUser: Story = {
	render: () => <Login loggedIn userName="vaniafed" userRole="user" onLogOut={() => {}} />,
};

export default meta;
