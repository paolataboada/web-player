import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../navigation/routes/routes";

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate(ROUTES.LOGIN);
        localStorage.removeItem("userToken");
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex justify-between items-center p-3">
                <div>HomePage</div>
                <button type="button" onClick={handleLogout} className="bg-red-500 rounded-xl px-3 py-1 cursor-pointer">
                    Log out
                </button>
            </div>
        </motion.div>
    )
}

export default HomePage