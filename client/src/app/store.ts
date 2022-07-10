import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import campaignSlice from '../features/campaign/campaignSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        campaign: campaignSlice,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga, store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
