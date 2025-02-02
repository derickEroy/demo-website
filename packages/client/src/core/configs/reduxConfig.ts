import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { ISafeUser } from 'server/src/domain/types/dtos';

interface UserState {
    value: ISafeUser | null;
}

const initialState: UserState = {
    value: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setValue(state, action) {
            state.value = action.payload;
        }
    }
});

export const userActions = userSlice.actions;

const persistConfig = {
    key: "user",
    storage,
};

export const store = configureStore({
    reducer: {
        user: persistReducer(persistConfig, userSlice.reducer)
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;