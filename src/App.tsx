import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './modules/home/pages/HomePage'
import LoginPage from './modules/authentication/pages/LoginPage'
import SignUpPage from './modules/authentication/pages/SignUpPage'
import PrivateRoute from './routes/private/PrivateRoute'
import RouteGuard from './routes/guards/RouteGuard'
import { ROUTES } from './routes/routes'
import DashboardPage from './modules/dashboard/pages/DashboardPage'
import NotFoundPage from './modules/not-found/pages/NotFoundPage'

function App() {
	const isAuthenticated = !!localStorage.getItem('userToken');

	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.LOGIN} element={<LoginPage />} />
				<Route path={ROUTES.SIGNUP} element={<SignUpPage />} />

				<Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
					<Route path={ROUTES.HOME} element={<HomePage />} />

					<Route element={<RouteGuard canAccess={true} redirectTo={ROUTES.HOME} />}>
						<Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
					</Route>
				</Route>

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
