import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
	message: string,
	type: 'success' | 'error' | 'info';
	position: 'top-center' | 'bottom-center';
}

const initialState: InitialState = {
	message: "",
	type: 'success',
	position: 'top-center'
}

export const toastSlice = createSlice({
	name: 'toastSlice',
	initialState,
	reducers: {
		successNotification: (state, action: PayloadAction<string>) => {
			state.message = action.payload
			state.type = "success"
			state.position = "top-center"
		},
		errorNotification: (state, action: PayloadAction<string>) => {
			state.message = action.payload
			state.type = "error"
			state.position = "bottom-center"
		},
		clearNotification: state => {
			state.message = '';
			state.type = 'success';
			state.position = 'top-center';
		},
	},
})

export const { successNotification, errorNotification, clearNotification } = toastSlice.actions;

export default toastSlice.reducer;