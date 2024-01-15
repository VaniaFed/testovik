import { axiosProxy } from '@/utils/axios';
import {
	FetchUserSuccessPayload,
	SignInPayload,
	SignInSuccessPayload,
	SignUpPayload,
	SignUpSuccessPayload,
} from '@/reduxjs/modules/auth/types';

export const authApi = {
	signUp: async (data: SignUpPayload) => await axiosProxy.post<SignUpSuccessPayload>('/signup', data),
	signIn: async (data: SignInPayload) => await axiosProxy.post<SignInSuccessPayload>('/signin', data),
	getCurrentUser: async () => await axiosProxy.get<FetchUserSuccessPayload>('/users/current'),
	logOut: async () => await axiosProxy.delete('/logout'),
};
