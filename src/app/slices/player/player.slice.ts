import type { IPlayer } from "@entities/player/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    currentPlayer: IPlayer | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: InitialState = {
    currentPlayer: null,
    isLoading: false,
    error: null,
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayer: (state, action: PayloadAction<IPlayer>) => {
            state.currentPlayer = action.payload;
        },
        clearPlayer: (state) => {
            state.currentPlayer = null;
        },
    },
});

export const { setPlayer, clearPlayer } = playerSlice.actions;

export default playerSlice.reducer;