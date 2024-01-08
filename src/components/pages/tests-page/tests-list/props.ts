import { User } from '@/reduxjs/modules/auth';
import { Test } from '@/reduxjs/modules/tests';

export interface Props {
	tests: Test[];
	user: User;
	className?: string;
}
