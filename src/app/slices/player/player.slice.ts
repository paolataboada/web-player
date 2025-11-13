import { type IPlayer } from "@entities/player/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = IPlayer;

const initialState: InitialState = {
    _id: "",
    username: "",
    firstName: "",
    lastName: "",
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayer: (_, action: PayloadAction<InitialState>) => action.payload,
        clearPlayer: () => initialState,
    },
});

export const { setPlayer, clearPlayer } = playerSlice.actions;

export default playerSlice.reducer;