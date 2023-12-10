import { all } from 'redux-saga/effects';

import authWatcher from '@/reduxjs/modules/auth/watcher';

export default function* rootSaga() {
	yield all([...authWatcher]);
}
