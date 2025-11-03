import { type ITeam } from "@entities/team/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = ITeam[];

const initialState: InitialState = [];

const teamSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        setTeams: (_, action: PayloadAction<InitialState>) => {
            return action.payload;
        },
    },
});

export const { setTeams } = teamSlice.actions;

export default teamSlice.reducer;