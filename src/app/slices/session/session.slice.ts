import { type IPlayer } from "@entities/player/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ISession {
    user: IPlayer | null;
    token: string | null;
}

export const initialState: ISession = {
    user: JSON.parse(localStorage.getItem("user") || "{}"),
    token: localStorage.getItem("token") || null,
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<ISession>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            if (action.payload.token && action.payload.user) {
                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            }
        },
        updateUser: (state, action: PayloadAction<IPlayer>) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        clearSession: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const { setSession, updateUser, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
