import type { IPlayer } from "@entities/player/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = Pick<IPlayer, "email" | "firstName" | "lastName"> & {
    username?: IPlayer["username"];
    provider?: string;
};

const initialState: InitialState = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    provider: undefined,
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayer: (state, action: PayloadAction<InitialState>) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.provider = action.payload.provider ?? undefined;
        },
        clearPlayer: () => initialState,
    },
});

export const { setPlayer, clearPlayer } = playerSlice.actions;

export default playerSlice.reducer;