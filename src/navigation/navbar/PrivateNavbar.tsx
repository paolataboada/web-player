import { Fragment } from "react";
import IconGolines from "@global/assets/icons/main/golines.svg?react";
import IconMission from "@global/assets/icons/main/mission.svg?react";
import IconBell from "@global/assets/icons/main/notification.svg?react";
import IconArrow from "@global/assets/icons/shared/arrow-left.svg?react";
import GradientButton from "@global/components/buttons/GradientButton";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { UserProgressAvatar } from "@global/components/avatars/UserProgressAvatar";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";

const PrivateNavbar = () => {
	const navigate = useNavigate();

	return (
		<Fragment>
			<nav className="fixed top-0 w-full grid gap-2 px-4 py-3">
				<p className="font-body-extrasmall-regular text-center">
					Powered by FFantasy
				</p>
				<div className="flex justify-between items-center">
					<div className="flex gap-2 sm:gap-4">
						<FantasyButton variant="secondary" className="hidden py-2! sm:block">
							<IconArrow className="h-6 w-6" />
						</FantasyButton>
						<UserProgressAvatar
							currentLevel={20}
							currentProgress={1220}
							rangeStart={1000}
							rangeEnd={2000}
							onClick={() => navigate(ROUTES.PROFILE)}
						/>
						<GradientButton className="px-3 sm:py-2!">
							<IconGolines className="h-6 w-6 sm:h-8 sm:w-8" />
							<span className="font-body-small-medium text-center min-w-10 sm:text-base!">600</span>
						</GradientButton>
					</div>
					<div className="flex gap-1 sm:gap-4">
						<GradientButton>
							<IconMission className="h-6 w-6" />
							<span className="hidden font-body-normal-medium text-center min-w-10 sm:flex">Misiones</span>
						</GradientButton>
						<GradientButton>
							<IconBell className="h-6 w-6" />
							<span className="hidden font-body-normal-medium text-center min-w-10 sm:flex">Notificaciones</span>
						</GradientButton>
					</div>
				</div>
			</nav>
		</Fragment>
	)
}

export default PrivateNavbar