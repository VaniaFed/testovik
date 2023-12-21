'use client';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/reduxjs/store';
import type { FC } from 'react';
import type { Props } from './props';

export const Providers: FC<Props> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
