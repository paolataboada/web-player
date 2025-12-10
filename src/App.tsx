import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ROUTES } from "./navigation/routes/routes";
import LoginPage from "./features/authentication/pages/LoginPage";
import PublicLayout from "./navigation/routes/layouts/PublicLayout";
import ForgotPasswordPage from "./features/authentication/pages/ForgotPasswordPage";
import VerifyPage from "./features/authentication/pages/VerifyPage";
import PrivateLayout from "./navigation/routes/layouts/PrivateLayout";
import ToastNotification from "@global/components/toasts/ToastNotification";
import ProfilePage from "@features/private/dashboard/profile/pages/ProfilePage";
import PlayerMainDetailsPage from "@features/private/dashboard/profile/pages/PlayerMainDetailsPage";
import PlayerPrivacyDetailsPage from "@features/private/dashboard/profile/pages/PlayerPrivacyDetailsPage";
import PlayerLevelDetailsPage from "./features/private/dashboard/profile/pages/PlayerLevelDetailsPage";
import { PlayerFAQPage } from "@features/private/dashboard/profile/pages/PlayerFAQPage";
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
import NotificationsPanelPage from "@features/private/notifications/pages/NotificationsPanelPage";
import JoinLeaguePage from "@features/private/dashboard/leagues/pages/JoinLeaguePage";

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
            <Route path={ROUTES.NOTIFICATIONS} element={<NotificationsPanelPage />} />

            <Route element={<DashboardLayout />}>
              <Route index element={<Navigate to={ROUTES.LEAGUES} replace />} />

              <Route path={ROUTES.PROFILE} element={<Outlet />}>
                <Route index element={<ProfilePage />} />
                <Route path="account" element={<PlayerMainDetailsPage />} />
                <Route path="privacy" element={<PlayerPrivacyDetailsPage />} />
                <Route path="level" element={<PlayerLevelDetailsPage />} />
                <Route path="faq" element={<PlayerFAQPage />} />
              </Route>

              <Route path={ROUTES.LEAGUES} element={<Outlet />}>
                <Route index element={<LeaguesPage />} />
                <Route path="details" element={<LeagueDetailsPage />} />
                <Route path="members" element={<LeagueMembersPage />} />
                <Route path="ranking" element={<RankingLeaguePage />} />
                <Route path="join" element={<JoinLeaguePage />} />
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
