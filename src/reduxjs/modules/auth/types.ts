import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
	id: string;
	username: string;
	is_admin: boolean;
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
