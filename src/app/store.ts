import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userSlice from './slices/user/user.slice';
import teamSlice from './slices/teams/teams.slice';
import { toastMiddleware } from './middlewares/toast/toast.middleware';
import { userStorageMiddleware } from './middlewares/user/user-storage.middleware';

export const store = configureStore({
    reducer: {
        user: userSlice,
        teams: teamSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        toastMiddleware,
        userStorageMiddleware,
    ),
});

setupListeners(store.dispatch);

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;