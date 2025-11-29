import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import sessionSlice from './slices/session/session.slice';
import teamSlice from './slices/teams/teams.slice';
import { toastMiddleware } from './middlewares/toast/toast.middleware';
import globalLoadingSlice from './slices/loading-global/loadingGlobal.slice';

export const store = configureStore({
    reducer: {
        session: sessionSlice,
        teams: teamSlice,
        globalLoading: globalLoadingSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        toastMiddleware,
    ),
});

setupListeners(store.dispatch);

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;