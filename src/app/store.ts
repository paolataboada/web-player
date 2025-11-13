import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import playerSlice from './slices/player/player.slice';
import teamSlice from './slices/teams/teams.slice';
import { toastMiddleware } from './middlewares/toast/toast.middleware';
import { playerStorageMiddleware } from './middlewares/player/player-storage.middleware';

export const store = configureStore({
    reducer: {
        player: playerSlice,
        teams: teamSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        toastMiddleware,
        playerStorageMiddleware,
    ),
});

setupListeners(store.dispatch);

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;