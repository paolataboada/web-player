import { type IPlayer } from "@entities/player/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = IPlayer;

const initialState: InitialState = {
    _id: "",
    username: "",
    firstName: "",
    lastName: "",
    verifiedAccount: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, action: PayloadAction<InitialState>) => action.payload,
        clearUser: () => initialState,
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;