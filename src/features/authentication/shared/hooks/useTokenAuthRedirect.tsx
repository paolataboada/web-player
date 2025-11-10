import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setPlayer } from "@app/slices/player/player.slice";
import { ROUTES } from "@navigation/routes/routes";
import type { IPlayerJwtPayload } from "../types/player-jwt.interface";

interface Props {
    setExternal?: (value: boolean) => void;
}

export const useTokenAuthRedirect = ({ setExternal }: Props = {}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");
        if (!token) return;

        const decoded: IPlayerJwtPayload = jwtDecode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("player", JSON.stringify(decoded));

        if (location.pathname === ROUTES.LOGIN) {
            dispatch(setPlayer(decoded));
            navigate(ROUTES.HOME, {
                replace: true,
                state: { toast: "¡Bienvenid@ a FFantasy!" },
            });
            return;
        }

        if (location.pathname === ROUTES.SIGNUP) {
            setExternal?.(true);
            navigate(location.pathname, {
                replace: true,
                state: { player: decoded },
            });
            return;
        }
    }, [location, dispatch, navigate, setExternal]);
};