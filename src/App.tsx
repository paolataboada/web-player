import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ROUTES } from "./navigation/routes/routes";
import HomePage from "./features/home/pages/HomePage";
import LoginPage from "./features/authentication/pages/LoginPage";
import PublicLayout from "./navigation/routes/layouts/PublicLayout";
import ForgotPasswordPage from "./features/authentication/pages/ForgotPasswordPage";
import VerifyPage from "./features/authentication/pages/VerifyPage";
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
import SignUpPage from "@features/authentication/pages/SignUpPage";
import ResetPasswordPage from "@features/private/reset-password/pages/ResetPasswordPage";
import DashboardLayout from "@navigation/routes/layouts/DashboardLayout";
import CompleteProfilePage from "@features/private/complete-profile/CompleteProfilePage";
import VerifyEmailPage from "@features/private/verify-email/VerifyEmailPage";
import LeagueDetailsPage from "@features/private/dashboard/leagues/pages/LeagueDetailsPage";
import LeaguesPage from "@features/private/dashboard/leagues/pages/LeaguesPages";
import LeagueMembersPage from "@features/private/dashboard/leagues/pages/LeagueMembersPage";
import RankingLeaguePage from "@features/private/dashboard/leagues/pages/RankingLeaguePage";

const App = () => {
  const { active, message } = useSelector(
    (state: IRootState) => state.globalLoading
  );

  return (
    <React.Fragment>
      <SplashWrapper duration={1000}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
            <Route
              path={ROUTES.FORGOT_PASSWORD}
              element={<ForgotPasswordPage />}
            />
            <Route path={ROUTES.VERIFY} element={<VerifyPage />} />

          </Route>

          <Route element={<PrivateLayout />}>
            <Route
              path={ROUTES.RESET_PASSWORD}
              element={<ResetPasswordPage />}
            />
            <Route
              path={ROUTES.COMPLETE_PROFILE}
              element={<CompleteProfilePage />}
            />
            <Route
              path={ROUTES.VERIFY_EMAIL}
              element={<VerifyEmailPage />}
            />

            <Route element={<DashboardLayout />}>
              <Route path={ROUTES.HOME} element={<LeaguesPages />} />
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

              <Route path={ROUTES.LEAGUES} element={<Outlet />}>
                <Route index element={<LeaguesPage />} />
                <Route path="details" element={<LeagueDetailsPage />} />
                <Route path="members" element={<LeagueMembersPage />} />
                <Route path="ranking" element={<RankingLeaguePage />} />
              </Route>
            </Route>

          </Route>

          <Route
            path={ROUTES.NOT_FOUND}
            element={<Navigate to={ROUTES.HOME} replace />}
          />
        </Routes>
        <ToastNotification />
      </SplashWrapper>

      {active && <GlobalLoading message={message} />}
    </React.Fragment>
  );
};

export default App;
