import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";

interface Props {
    isAuthenticated: boolean;
}
const PrivateRoute = ({ isAuthenticated }: Props) => {
    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <Outlet />;
}

export default PrivateRoute