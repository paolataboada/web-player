import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import toastSlice from './slices/toast/toast.slice';
import playerSlice from './slices/player/player.slice';

export const store = configureStore({
    reducer: {
        toast: toastSlice,
        player: playerSlice,
    },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;