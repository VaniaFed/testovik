import type { AuthState } from '@/reduxjs/modules/auth';

export const mockedAuthState: AuthState = {
	user: {
		id: 66,
		username: 'admin',
		is_admin: true,
	},
	status: 'SUCCEEDED',
};
