import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../navigation/routes/routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { successToast } from "@app/middlewares/toast/toast.actions";
import MotionContainer from "@global/containers/MotionContainer";
import { clearPlayer } from "@app/slices/player/player.slice";

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        navigate(ROUTES.LOGIN);
        dispatch(clearPlayer());
    }

    useEffect(() => {
        if (location.state?.toast) {
            dispatch(successToast({ message: location.state.toast }));
            window.history.replaceState({}, document.title);
        }
    }, [location.state, dispatch]);

    return (
        <MotionContainer className="pb-20 sm:pb-0">
            <div className="flex justify-between items-center p-3">
                <div>HomePage</div>
                <button type="button" onClick={handleLogout} className="bg-red-500 rounded-xl px-3 py-1 cursor-pointer">
                    Log out
                </button>
            </div>
        </MotionContainer>
    )
}

export default HomePage