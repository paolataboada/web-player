import { ToastContainer } from "react-toastify";

const ToastNotification = () => {
	return (
		<ToastContainer
			autoClose={4000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
		/>
	);
};

export default ToastNotification;
