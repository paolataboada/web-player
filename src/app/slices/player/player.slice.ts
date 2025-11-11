import { ECreatedVia, type IPlayer } from "@entities/player/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = Omit<IPlayer, "verificationCode" | "verifiedAccount">;

const initialState: InitialState = {
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    teamId: "",
    createdVia: ECreatedVia.STANDARD,
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