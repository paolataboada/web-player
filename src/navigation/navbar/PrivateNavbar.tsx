import IconGolines from "@global/assets/icons/main/golines.svg?react";
import IconMission from "@global/assets/icons/main/mission.svg?react";
import IconBell from "@global/assets/icons/main/notification.svg?react";
import GradientButton from "@global/components/buttons/GradientButton";
import LogoFFantasy from "@public/logos/isotipo-white.svg?react";
import { Link } from "react-router-dom";

const PrivateNavbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full h-12 z-50 md:h-22">
			<div
				className="hidden bg-linear-300 from-secondary-900 via-secondary-600 to-primary-500 opacity-10 
				w-full h-full absolute top-0 left-0 backdrop-blur-md md:block"
			/>
			<div
				className="hidden bg-linear-300 from-secondary-900 via-secondary-600 to-primary-500
				w-full h-px absolute bottom-0 left-0 md:block"
			/>

			<div className="grid gap-2 relative z-10 py-1 px-4 md:py-4 md:px-4 ">
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
						<GradientButton>
							<IconBell className="h-6 w-6" />
							<span className="hidden font-body-normal-medium text-center min-w-10 sm:flex">
								Notificaciones
							</span>
						</GradientButton>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default PrivateNavbar;
