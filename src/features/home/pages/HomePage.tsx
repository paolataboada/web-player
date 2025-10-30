import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../navigation/routes/routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { successToast } from "@app/slices/toast/toast.slice";
import MotionContainer from "@global/containers/MotionContainer";

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const dispatch = useDispatch();

    const handleLogout = () => {
        navigate(ROUTES.LOGIN);
        localStorage.removeItem("token");
    }

    useEffect(() => {
        if (location.state?.toast) {
            dispatch(successToast(location.state.toast));
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