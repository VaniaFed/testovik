import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/reduxjs/modules/auth/reducer';
import rootSaga from '@/reduxjs/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	devTools: true,
	reducer: {
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
