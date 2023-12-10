export interface SignInRequest {
	username: string;
	password: string;
}

export interface SignUpRequest extends SignInRequest {
	password_confirmation: string;
	is_admin: boolean;
}

export interface LogOutRequest {}
