import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

const HomePage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex justify-between items-center p-3">
                <div>HomePage</div>
                <Link to={ROUTES.LOGIN} className="bg-red-500 rounded-xl px-3 py-1">Log out</Link>
            </div>
        </motion.div>
    )
}

export default HomePage