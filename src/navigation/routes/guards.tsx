import Splash from "@global/components/loaders/Splash";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { useSelector } from "react-redux";
import type { IRootState } from "@app/store";
import { useLoadingSplashActionsServices } from "@global/loaders/services/useLoadingSplashActionsServices";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";

const AuthGuards = () => {
  const navigate = useNavigate();
  const handleError = useHandlerError();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { verifyTokenAndGetAccountDataService } = useLoadingSplashActionsServices();
  const { user: dataUser, token } = useSelector((state: IRootState) => state.session);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        setLoading(false);
        return;
      }

      if (!dataUser) {
        try {
          await verifyTokenAndGetAccountDataService({ token: storedToken });
        } catch (error) {
          localStorage.removeItem("token");
          handleError(error);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  useEffect(() => {
    if (loading) return;

    const isPublicRoute = [ROUTES.LOGIN, ROUTES.SIGNUP, ROUTES.RESET_PASSWORD].includes(location.pathname);
    const isVerifyRoute = location.pathname === ROUTES.VERIFY;

    // State: Public
    if (!token) {
      if (!isPublicRoute) {
        navigate(ROUTES.LOGIN, { replace: true });
      }
      return;
    }

    // State: Private (Verified)
    if (dataUser?.verifiedAccount) {
      if (isPublicRoute || isVerifyRoute) {
        navigate(ROUTES.HOME, { replace: true });
      }
      return;
    }

    // State: Restricted (Unverified)
    if (dataUser && !dataUser.verifiedAccount) {
      if (location.pathname !== ROUTES.VERIFY) {
         navigate(ROUTES.VERIFY, { replace: true });
      }
    }

  }, [loading, token, dataUser, location.pathname, navigate]);

  if (loading) {
    return <Splash />;
  }

  return <Outlet />;
};

export default AuthGuards;
