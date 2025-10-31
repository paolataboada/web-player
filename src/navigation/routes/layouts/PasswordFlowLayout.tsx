import { Outlet, useLocation, Navigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";

const PASSWORD_FLOW_ORDER = [
    ROUTES.RECOVER_PASSWORD,
    ROUTES.VERIFY_CODE,
    ROUTES.RESET_PASSWORD,
    ROUTES.CONFIRM_RESET_PASSWORD,
];

export const PasswordFlowLayout = () => {
    const location = useLocation();

    const currentPath = location.pathname;
    const currentIndex = PASSWORD_FLOW_ORDER.indexOf(currentPath);

    const lastStep = location.state?.from || ROUTES.RECOVER_PASSWORD;
    const lastIndex = PASSWORD_FLOW_ORDER.indexOf(lastStep);

    if (currentIndex > lastIndex) {
        return <Navigate to={lastStep} replace />;
    }

    return <Outlet />;
};
