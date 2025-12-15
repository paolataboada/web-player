import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconGolines from "@global/assets/icons/main/golines.svg?react";
import IconMission from "@global/assets/icons/main/retos-icon.svg?react";
import IconBell from "@global/assets/icons/main/notification.svg?react";
import GradientButton from "@global/components/buttons/GradientButton";
import LogoFFantasy from "@public/logos/isotipo-white.svg?react";
import IconPerson from "@global/assets/icons/popover/person-fill2.svg?react";

import { useResponsive } from "@global/hooks/useResponsive";
import NotificationsPanelPopover from "@features/private/notifications/components/popovers/NotificationsPanelPopover";
import { ROUTES } from "@navigation/routes/routes";
import ProfilePopover from "@features/private/dashboard/profile/elements/ProfilePopover";

const PrivateNavbar = () => {
	const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	const navigate = useNavigate();
	const { isMd } = useResponsive();

	const toggleNotifications = () => {
		if (isMd) {
			setIsNotificationsOpen(!isNotificationsOpen);
			setIsProfileOpen(false); 
		} else {
			navigate(ROUTES.NOTIFICATIONS);
		}
	};

	const toggleProfile = () => {
		if (isMd) {
			setIsProfileOpen(!isProfileOpen);
			setIsNotificationsOpen(false);
		} else {
			navigate(ROUTES.PROFILE);
		}
	};

	const closeNotifications = () => {
		setIsNotificationsOpen(false);
	};

	const closeProfile = () => {
		setIsProfileOpen(false);
	};

	return (
		<>
			<nav className="fixed z-1 top-0 left-0 w-full">
				<div
					className="hidden bg-linear-300 from-secondary-900 via-secondary-600 to-primary-500 opacity-10 
				w-full h-full absolute top-0 left-0 backdrop-blur-md md:block"
				/>
				<div
					className="hidden bg-linear-300 from-secondary-900 via-secondary-600 to-primary-500
				w-full h-px absolute bottom-0 left-0 md:block"
				/>

				<div
					className="grid gap-2 relative h-12 z-10 bg-neutral-900 border-b border-neutral-500 px-4 
				md:h-22 md:bg-transparent md:border-0 md:px-4">
					<div className="flex justify-between items-center">
						<div className="flex gap-2 md:gap-4">
							<Link to="/" className="hidden md:flex md:flex-col md:items-center w-[105px]">
								<LogoFFantasy className="h-[35.6px]" />
								<p className="font-body-extrasmall-regular">
									Powered by FFantasy
								</p>
							</Link>
							<GradientButton
								classNameContainer="h-10! md:h-12!"
								className="flex items-center gap-1 px-2 py-0! md:gap-3 md:px-5 h-full"
							>
								<IconGolines className="w-5 h-5 md:w-8 md:h-8" />
								<span className="font-body-small-medium text-center min-w-10">
									600
								</span>
							</GradientButton>
						</div>
						<div className="flex gap-1 md:gap-4">
							<GradientButton>
								<IconMission className="h-6 w-6" />
								<span className="hidden font-body-normal-medium text-center min-w-10 md:flex">
									Retos
								</span>
							</GradientButton>
							<GradientButton 
								className="relative cursor-pointer" 
								onClick={toggleNotifications}
							>
								<IconBell className="h-6 w-6" />
								<span className="hidden font-body-normal-medium text-center min-w-10 md:flex">
									Notificaciones
								</span>
							</GradientButton>
							<GradientButton 
								className="cursor-pointer"
								onClick={toggleProfile}
							>
								<IconPerson className="w-6 h-6"/>
							</GradientButton>
							{isMd && (
								<>
									<NotificationsPanelPopover
										isOpen={isNotificationsOpen}
										onClose={closeNotifications}
									/>
									<ProfilePopover
										isOpen={isProfileOpen}
										onClose={closeProfile}
									/>
								</>
							)}
						</div>
					</div>
				</div>
			</nav>
			{isMd && (
				<>
					<NotificationsPanelPopover
						isOpen={isNotificationsOpen}
						onClose={closeNotifications}
					/>
					<ProfilePopover
						isOpen={isProfileOpen}
						onClose={closeProfile}
					/>
				</>
			)}
		</>
	);
};

export default PrivateNavbar;