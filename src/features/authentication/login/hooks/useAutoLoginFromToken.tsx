import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setPlayer } from "@app/slices/player/player.slice";
import { ROUTES } from "@navigation/routes/routes";
import type { IPlayerJwtPayload } from "../types/api-login.types";

export const useAutoLoginFromToken = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");

        if (token) {
            localStorage.setItem("token", token);

            const decoded: IPlayerJwtPayload = jwtDecode(token);
            dispatch(setPlayer(decoded));

            navigate(ROUTES.HOME, {
                replace: true,
                state: { toast: "¡Bienvenido a Fantasy!" },
            });
        }
    }, [location.search, dispatch, navigate]);
};
