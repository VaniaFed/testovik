import { all } from 'redux-saga/effects';

import { watcher as authWatcher } from '@/reduxjs/modules/auth';
import { watcher as testsWatcher } from '@/reduxjs/modules/tests';

export default function* rootSaga() {
	yield all([...authWatcher, ...testsWatcher]);
}
