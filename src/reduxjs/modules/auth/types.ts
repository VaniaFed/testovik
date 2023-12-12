import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
	id: string;
	username: string;
	is_admin: boolean;
}

export interface SignInRequest {
	username: string;
	password: string;
}

export interface SignUpRequest extends SignInRequest {
	password_confirmation: string;
	is_admin: boolean;
}

export type SignUpAction = PayloadAction<SignUpRequest>;
export type SignInAction = PayloadAction<SignInRequest>;
