import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import toastSlice from './slices/toast/toast.slice';

export const store = configureStore({
    reducer: {
        toast: toastSlice,
    },
});

setupListeners(store.dispatch);