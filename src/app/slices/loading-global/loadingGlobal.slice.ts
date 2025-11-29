import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IGlobalLoadingState {
    active: boolean;
    message: string;
}

const initialState: IGlobalLoadingState = {
    active: false,
    message: "",
}

export const loadingGlobalSlice = createSlice({
    name: 'globalLoading',
    initialState,
    reducers: {
        activeGlobalLoading: (state, action: PayloadAction<{ message: string }>) => {
            state.active = true;
            state.message = action.payload.message;
        },
        disableGlobalLoading: (state) => {
            state.active = false;
            state.message = "";
        }
    }
});

export const { activeGlobalLoading, disableGlobalLoading } = loadingGlobalSlice.actions;

export default loadingGlobalSlice.reducer;
