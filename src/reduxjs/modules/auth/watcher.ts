import { takeLatest } from 'redux-saga/effects';
import { FETCH_USER_REQUEST, LOG_OUT_REQUEST, SIGN_IN_REQUEST, SIGN_UP_REQUEST } from '@/reduxjs/modules/auth/actions';
import { fetchUserSaga, logOutSaga, signInSaga, signUpSaga } from '@/reduxjs/modules/auth/sagas';

export default [
	takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
	takeLatest(SIGN_UP_REQUEST, signUpSaga),
	takeLatest(SIGN_IN_REQUEST, signInSaga),
	takeLatest(LOG_OUT_REQUEST, logOutSaga),
];
