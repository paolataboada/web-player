import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './navigation/routes/routes';
import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/authentication/login/pages/LoginPage';
import SignUpPage from './features/authentication/sign-up/pages/SignUpPage';
import RecoverPasswordPage from './features/authentication/reset-password/pages/RecoverPasswordPage';
import PublicLayout from './navigation/routes/layouts/PublicLayout';
import ResetPasswordPage from './features/authentication/reset-password/pages/ResetPasswordPage';
import ConfirmResetPasswordPage from './features/authentication/reset-password/pages/ConfirmResetPasswordPage';
import VerifyCodePage from './features/authentication/reset-password/pages/VerifyCodePage';
import PrivateLayout from './navigation/routes/layouts/PrivateLayout';
import ToastNotification from '@global/components/toasts/ToastNotification';
import { PasswordFlowLayout } from '@navigation/routes/layouts/PasswordFlowLayout';

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route element={<PublicLayout />}>
					<Route path={ROUTES.LOGIN} element={<LoginPage />} />
					<Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
					<Route path={ROUTES.VERIFY_CODE_SIGNUP} element={<VerifyCodePage />} />

					<Route element={<PasswordFlowLayout />}>
						<Route path={ROUTES.RECOVER_PASSWORD} element={<RecoverPasswordPage />} />
						<Route path={ROUTES.VERIFY_CODE} element={<VerifyCodePage />} />
						<Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
						<Route path={ROUTES.CONFIRM_RESET_PASSWORD} element={<ConfirmResetPasswordPage />} />
					</Route>
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
