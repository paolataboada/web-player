import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setPlayer } from "@app/slices/player/player.slice";
import { ROUTES } from "@navigation/routes/routes";
import type { IPlayerJwtPayload } from "../types/player-jwt.interface";

export const useTokenAuthRedirect = () => {
    const { pathname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");
        if (!token) return;

        const decoded: IPlayerJwtPayload = jwtDecode(token);
        localStorage.setItem("token", token);

        if (pathname === ROUTES.LOGIN) {
            dispatch(setPlayer(decoded));
            navigate(ROUTES.HOME, {
                replace: true,
                state: { toast: "¡Bienvenido a Fantasy!" },
            });
            return;
        }

        if (pathname === ROUTES.SIGNUP) {
            console.log('decodedToken', decoded);
            navigate(ROUTES.SIGNUP_PROVIDER, {
                replace: true,
                state: { player: decoded },
            });
            return;
        }
    }, [pathname, location.search, dispatch, navigate]);
};