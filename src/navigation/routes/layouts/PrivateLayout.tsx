import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import MotionContainer from "@global/containers/MotionContainer";

const PrivateLayout = () => {
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	return (
		<div className="relative bg-pattern min-h-screen">
			<PrivateNavbar />

			<MotionContainer>
				<Outlet />
			</MotionContainer>
		</div>
	);
}

export default PrivateLayout