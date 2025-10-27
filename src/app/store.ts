import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import toastSlice from './slices/toast/toast.slice';
import playerSlice from './slices/player/player.slice';
import { toastMiddleware } from './slices/toast/toast.middleware';

export const store = configureStore({
    reducer: {
        toast: toastSlice,
        player: playerSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(toastMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;