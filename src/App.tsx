import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './navigation/routes/private/PrivateRoute';
import { ROUTES } from './navigation/routes/routes';
import LoginPage from './features/authentication/pages/LoginPage';
import SignUpPage from './features/authentication/pages/SignUpPage';
import HomePage from './features/home/pages/HomePage';


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
