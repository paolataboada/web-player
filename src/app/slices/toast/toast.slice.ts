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
	name: 'toast',
	initialState,
	reducers: {
		successToast: (state, action: PayloadAction<string>) => {
			state.message = action.payload
			state.type = "success"
			state.position = "top-center"
		},
		errorToast: (state, action: PayloadAction<string>) => {
			state.message = action.payload
			state.type = "error"
			state.position = "bottom-center"
		},
		clearToast: state => {
			state.message = '';
			state.type = 'success';
			state.position = 'top-center';
		},
	},
})

export const { successToast, errorToast, clearToast } = toastSlice.actions;

export default toastSlice.reducer;