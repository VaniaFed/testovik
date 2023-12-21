import { axiosProxy } from '@/utils/axios';
import { SignInRequest, SignUpRequest, User } from '@/reduxjs/modules/auth/types';

export const authApi = {
	signUp: async (data: SignUpRequest) => await axiosProxy.post<User>('/signup', data),
	signIn: async (data: SignInRequest) => await axiosProxy.post<User>('/signin', data),
	getCurrentUser: async () => await axiosProxy.get<User>('/users/current'),
	logOut: async () => await axiosProxy.delete('/logout'),
};
