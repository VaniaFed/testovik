import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from '@/reduxjs/sagas';
import { reducer as authReducer } from '@/reduxjs/modules/auth';
import { reducer as testsReducer } from '@/reduxjs/modules/tests';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	devTools: true,
	reducer: {
		auth: authReducer,
		tests: testsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
