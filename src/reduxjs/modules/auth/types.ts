import type { Status } from '@/types/common';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
	id: number;
	username: string;
	is_admin: boolean;
}

export interface AuthState {
	user: User | undefined | null;
	status: Status;
	error?: string;
}

export interface SignInPayload {
	username: string;
	password: string;
}

export interface SignUpPayload extends SignInPayload {
	password_confirmation: string;
	is_admin: boolean;
}

export interface SignUpSuccessPayload {
	user: User;
}

export interface SignInSuccessPayload extends SignUpSuccessPayload {}

export interface FetchUserSuccessPayload extends SignUpSuccessPayload {}

export interface LogOutSuccessPayload {
	status: boolean;
}

export type SignUpRequest = PayloadAction<SignUpPayload>;
export type SignUpSuccess = PayloadAction<SignUpSuccessPayload>;
export type SignInRequest = PayloadAction<SignInPayload>;
export type SignInSuccess = PayloadAction<SignInSuccessPayload>;
export type FetchUserSuccess = PayloadAction<FetchUserSuccessPayload>;
export type LogOutSuccess = PayloadAction<LogOutSuccessPayload>;
