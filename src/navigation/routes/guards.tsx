import Splash from "@global/components/loaders/Splash";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "./routes"; // ajusta import

const AuthGuards = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // Redirect unauthenticated users to login
        navigate(ROUTES.LOGIN, { replace: true });
        session(false);
      } else {
        session(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (session == "INITIAL" && loading) {
    return <Loading_Session_Expired />;
  }

  if (session == "LOGUTTED") {
    return <Loading_Logout />;
  }

  if (session == "SESSION EXPIRED") {
    return <Loading_Login />;
  }

  if (session == "SESSION EXPIRED") {
    return <Outlet />;
  }
};

export default AuthGuards;
