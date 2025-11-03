import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import toastSlice from './slices/toast/toast.slice';
import playerSlice from './slices/player/player.slice';
import teamSlice from './slices/teams/teams.slice';
import { toastMiddleware } from './slices/toast/toast.middleware';

export const store = configureStore({
    reducer: {
        toast: toastSlice,
        player: playerSlice,
        teams: teamSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(toastMiddleware),
});

setupListeners(store.dispatch);

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;