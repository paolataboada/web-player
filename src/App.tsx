import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './navigation/routes/routes';
import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/authentication/login/pages/LoginPage';
import SignUpPage from './features/authentication/sign-up/pages/SignUpPage';
import PublicLayout from './navigation/routes/layouts/PublicLayout';
import ResetPasswordPage from './features/authentication/reset-password/pages/ResetPasswordPage';
import PrivateLayout from './navigation/routes/layouts/PrivateLayout';
import ToastNotification from '@global/components/toasts/ToastNotification';
import ProfilePage from '@features/profile/pages/ProfilePage';
import PlayerMainDetailsPage from '@features/profile/pages/PlayerMainDetailsPage';
import PlayerPrivacyDetailsPage from '@features/profile/pages/PlayerPrivacyDetailsPage';
import PlayerLevelDetailsPage from './features/profile/pages/PlayerLevelDetailsPage';
import { useLoading } from '@global/loaders/hooks/useLoading';
import { PlayerFAQPage } from '@features/profile/pages/PlayerFAQPage';

function App() {
	const { showLoading, hideLoading } = useLoading();

	useEffect(() => {
		const initApp = async () => {
			showLoading();
			await new Promise((r) => setTimeout(r, 2000));
			hideLoading();
		};
		initApp();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<React.Fragment>
			<Routes>
				<Route element={<PublicLayout />}>
					<Route path={ROUTES.LOGIN} element={<LoginPage />} />
					<Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
					<Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
				</Route>

				<Route element={<PrivateLayout />}>
					<Route path={ROUTES.HOME} element={<HomePage />} />
					<Route path={ROUTES.PROFILE} element={<ProfilePage />} />
					<Route path={`/${ROUTES.PROFILE}/main-details`} element={<PlayerMainDetailsPage />} />
					<Route path={`/${ROUTES.PROFILE}/privacy-details`} element={<PlayerPrivacyDetailsPage />} />
					<Route path={`${ROUTES.PROFILE}/player-level`} element={<PlayerLevelDetailsPage />} />
					<Route path={`${ROUTES.PROFILE}/player-faq`} element={<PlayerFAQPage />} />

				</Route>
			</Routes>

			<ToastNotification />
		</React.Fragment>
	)
}

export default App
