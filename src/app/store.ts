import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import toastSlice from './slices/notification.slice';

export const store = configureStore({
    reducer: {
        toast: toastSlice,
    },
});

setupListeners(store.dispatch);