import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedStateReducer } from './slices/persistedState';
import { tempStateReducer } from './slices/tempState';

export const store = configureStore({
    reducer: {
        persistedState: persistedStateReducer,
        tempState: tempStateReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;