import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconGolines from "@global/assets/icons/main/golines.svg?react";
import IconMission from "@global/assets/icons/main/retos-icon.svg?react";
import IconBell from "@global/assets/icons/main/notification.svg?react";
import GradientButton from "@global/components/buttons/GradientButton";
import LogoFFantasy from "@public/logos/isotipo-white.svg?react";
import { useResponsive } from "@global/hooks/useResponsive";
import NotificationsPanelPopover from "@features/private/notifications/components/popovers/NotificationsPanelPopover";
import { ROUTES } from "@navigation/routes/routes";

const PrivateNavbar = () => {
	const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

	const navigate = useNavigate();
	const { isMd } = useResponsive();

	const toggleNotifications = () => {
		if (isMd) {
			setIsNotificationsOpen(!isNotificationsOpen);
		} else {
			navigate(ROUTES.NOTIFICATIONS);
		}
	};

	const closeNotifications = () => {
		setIsNotificationsOpen(false);
	};

	return (
		<nav className="fixed top-0 left-0 w-full h-12 z-50 sm:h-22">
			<div
				className="hidden bg-linear-300 from-secondary-900 via-secondary-600 to-primary-500 opacity-10 
				w-full h-full absolute top-0 left-0 backdrop-blur-md sm:block"
			/>
			<div
				className="hidden bg-linear-300 from-secondary-900 via-secondary-600 to-primary-500
				w-full h-px absolute bottom-0 left-0 sm:block"
			/>

			<div
				className="grid gap-2 relative z-10 bg-neutral-900 border-b border-neutral-500 py-1 px-4 
				sm:bg-transparent sm:border-0 sm:py-4 sm:px-4">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 sm:gap-4">
						<Link to="/" className="hidden md:flex md:flex-col md:items-center">
							<LogoFFantasy className="h-auto w-[38px]" />
							<p className="font-body-extrasmall-regular">
								Powered by FFantasy
							</p>
						</Link>
						<GradientButton className="px-3 sm:py-2!">
							<IconGolines className="h-6 w-6 sm:h-8 sm:w-8" />
							<span className="font-body-small-medium text-center min-w-10">
								600
							</span>
						</GradientButton>
					</div>
					<div className="flex gap-1 sm:gap-4">
						<GradientButton>
							<IconMission className="h-6 w-6" />
							<span className="hidden font-body-normal-medium text-center min-w-10 sm:flex">
								Retos
							</span>
						</GradientButton>
						<GradientButton className="relative" onClick={toggleNotifications}>
							<IconBell className="h-6 w-6" />
							<span className="hidden font-body-normal-medium text-center min-w-10 sm:flex">
								Notificaciones
							</span>
						</GradientButton>
						{isMd && (
							<NotificationsPanelPopover
								isOpen={isNotificationsOpen}
								onClose={closeNotifications}
							/>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default PrivateNavbar;
