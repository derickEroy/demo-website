import { createSlice } from "@reduxjs/toolkit";
import type { ISafeUser } from "server/src/domain/types/dtos";

interface TempState {
    searchedUsers: ISafeUser[];
}

const initialState: TempState = {
    searchedUsers: []
}

const tempStateSlice = createSlice({
    name: 'tempState',
    initialState,
    reducers: {
        setSearchedUsers(state, action) {
            state.searchedUsers = action.payload;
        }
    }
});

export const { setSearchedUsers } = tempStateSlice.actions;

export const tempStateReducer = tempStateSlice.reducer;