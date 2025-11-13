import { clearPlayer, setPlayer } from "@app/slices/player/player.slice";
import type { Middleware } from "@reduxjs/toolkit";


export const playerStorageMiddleware: Middleware = () => (next) => (action) => {
    const result = next(action);

    if (setPlayer.match(action)) {
        localStorage.setItem("player", JSON.stringify(action.payload));
    }

    if (clearPlayer.match(action)) {
        localStorage.removeItem("token");
        localStorage.removeItem("player");
    }

    return result;
};
