import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './navigation/routes/routes';
import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/authentication/login/pages/LoginPage';
import SignUpPage from './features/authentication/sign-up/pages/SignUpPage';
import PublicLayout from './navigation/routes/layouts/PublicLayout';
import ResetPasswordPage from './features/authentication/reset-password/pages/ResetPasswordPage';
import PrivateLayout from './navigation/routes/layouts/PrivateLayout';
import ToastNotification from '@global/components/toasts/ToastNotification';

function App() {
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
				</Route>
			</Routes>

			<ToastNotification />
		</React.Fragment>
	)
}

export default App
