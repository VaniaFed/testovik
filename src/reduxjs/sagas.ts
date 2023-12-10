import { all } from 'redux-saga/effects';
import authWatcher from '@/reduxjs/modules/auth/watcher';
import testsWatcher from '@/reduxjs/modules/tests/watcher';

export default function* rootSaga() {
	yield all([...authWatcher, ...testsWatcher]);
}
