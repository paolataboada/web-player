import { clearUser, setUser } from "@app/slices/user/user.slice";
import type { Middleware } from "@reduxjs/toolkit";

export const userStorageMiddleware: Middleware = () => (next) => (action) => {
    const result = next(action);

    if (setUser.match(action)) {
        localStorage.setItem("user", JSON.stringify(action.payload));
    }

    if (clearUser.match(action)) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    return result;
};
