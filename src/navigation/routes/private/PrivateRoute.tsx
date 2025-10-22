import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";

const PrivateRoute = () => {
    const token = localStorage.getItem("userToken");

    if (!token) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <Outlet />;
}

export default PrivateRoute