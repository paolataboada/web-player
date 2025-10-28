import type { IPlayer } from "@entities/player/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = Pick<IPlayer, "email" | "firstName" | "lastName"> & { provider?: string };

const initialState: InitialState = {
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