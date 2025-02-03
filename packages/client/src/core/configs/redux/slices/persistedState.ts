import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import type { ISafeUser } from "server/src/domain/types/dtos";

interface PersistedState {
    user: ISafeUser | null;
}

const initialState: PersistedState = {
    user: null
}

const persistedStateSlice = createSlice({
    name: 'persistedState',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        }
    }
});

export const { setUser } = persistedStateSlice.actions;

export const persistedStateReducer = persistReducer(
    { key: "persistedState", storage },
    persistedStateSlice.reducer
);