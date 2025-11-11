import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { ROUTES } from "@navigation/routes/routes";
import type { IPlayerSignUpJwtPayload } from "../types/player-jwt.interface";

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

        if (location.pathname === ROUTES.LOGIN) {
            navigate(ROUTES.HOME, {
                replace: true,
                state: { toast: "¡Bienvenid@ a FFantasy!" },
            });
            return;
        }

        if (location.pathname === ROUTES.SIGNUP) {
            const player: IPlayerSignUpJwtPayload = jwtDecode(token);
            setExternal?.(true);
            navigate(location.pathname, {
                replace: true,
                state: { player },
            });
            return;
        }
    }, [location, dispatch, navigate, setExternal]);
};