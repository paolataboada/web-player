import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './navigation/routes/private/PrivateRoute';
import { ROUTES } from './navigation/routes/routes';
import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/authentication/login/pages/LoginPage';
import SignUpPage from './features/authentication/sign-up/pages/SignUpPage';
import RecoverPasswordPage from './features/authentication/reset-password/pages/RecoverPasswordPage';
import PublicLayout from './navigation/routes/layouts/PublicLayout';
import ConfirmResetPassword from './features/authentication/reset-password/pages/ConfirmResetPassword';
import VerifyCodePage from './features/authentication/reset-password/pages/VerifyCodePage';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicLayout />}>
					<Route path={ROUTES.LOGIN} element={<LoginPage />} />
					<Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
					<Route path={ROUTES.RECOVER_PASSWORD} element={<RecoverPasswordPage />} />
					<Route path={ROUTES.CONFIRM_RESET_PASSWORD} element={<ConfirmResetPassword />} />
					<Route path={ROUTES.VERIFY_CODE} element={<VerifyCodePage />} />
				</Route>

				<Route element={<PrivateRoute />}>
					<Route path={ROUTES.HOME} element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
