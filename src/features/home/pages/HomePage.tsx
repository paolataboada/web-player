import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../navigation/routes/routes";
import { useDispatch } from "react-redux";
import MotionContainer from "@global/containers/MotionContainer";
import { clearSession } from "@app/slices/session/session.slice";

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        navigate(ROUTES.LOGIN);
        dispatch(clearSession());
    }

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