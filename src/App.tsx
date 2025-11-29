import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./navigation/routes/routes";
import HomePage from "./features/home/pages/HomePage";
import LoginPage from "./features/authentication/login/pages/LoginPage";
import SignUpPage from "./features/authentication/sign-up/pages/SignUpPage";
import PublicLayout from "./navigation/routes/layouts/PublicLayout";
import ResetPasswordPage from "./features/authentication/reset-password/pages/ResetPasswordPage";
import VerifyPage from "./features/authentication/verify/pages/VerifyPage";
import PrivateLayout from "./navigation/routes/layouts/PrivateLayout";
import ToastNotification from "@global/components/toasts/ToastNotification";
import ProfilePage from "@features/profile/pages/ProfilePage";
import PlayerMainDetailsPage from "@features/profile/pages/PlayerMainDetailsPage";
import PlayerPrivacyDetailsPage from "@features/profile/pages/PlayerPrivacyDetailsPage";
import PlayerLevelDetailsPage from "./features/profile/pages/PlayerLevelDetailsPage";
import { PlayerFAQPage } from "@features/profile/pages/PlayerFAQPage";
import SplashWrapper from "@global/components/Splashes/SplashWrapper";
import { GlobalLoading } from "@global/components/loaders/GlobalLoading";
import { useSelector } from "react-redux";
import type { IRootState } from "./app/store";

const App = () => {
  const { active, message } = useSelector((state: IRootState) => state.globalLoading);

  return (
    <React.Fragment>
      <SplashWrapper duration={1000}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
            <Route
              path={ROUTES.RESET_PASSWORD}
              element={<ResetPasswordPage />}
            />
            <Route path={ROUTES.VERIFY} element={<VerifyPage />} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route
              path={`/${ROUTES.PROFILE}/main-details`}
              element={<PlayerMainDetailsPage />}
            />
            <Route
              path={`/${ROUTES.PROFILE}/privacy-details`}
              element={<PlayerPrivacyDetailsPage />}
            />
            <Route
              path={`${ROUTES.PROFILE}/player-level`}
              element={<PlayerLevelDetailsPage />}
            />
            <Route
              path={`${ROUTES.PROFILE}/player-faq`}
              element={<PlayerFAQPage />}
            />
          </Route>
          <Route
            path={ROUTES.NOT_FOUND}
            element={
              <Navigate
                to={ROUTES.HOME}
                replace
              />
            }
          />
        </Routes>
        <ToastNotification />
      </SplashWrapper>

      {active && <GlobalLoading message={message} />}

    </React.Fragment>
  );
};

export default App;
