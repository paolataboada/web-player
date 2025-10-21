import { Navigate, Outlet } from "react-router-dom";

interface Props {
    canAccess: boolean;
    redirectTo: string;
}

const RouteGuard = ({ canAccess, redirectTo }: Props) => {
    if (!canAccess) {
        return <Navigate to={redirectTo} replace />;
    }
    return <Outlet />;
};

export default RouteGuard;
