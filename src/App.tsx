import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './navigation/routes/private/PrivateRoute';
import { ROUTES } from './navigation/routes/routes';
import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/authentication/login/pages/LoginPage';
import SignUpPage from './features/authentication/sign-up/pages/SignUpPage';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.LOGIN} element={<LoginPage />} />
				<Route path={ROUTES.SIGNUP} element={<SignUpPage />} />

				<Route element={<PrivateRoute />}>
					<Route path={ROUTES.HOME} element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
