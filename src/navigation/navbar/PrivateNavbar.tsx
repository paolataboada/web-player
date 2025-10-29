import { Fragment, useEffect, useRef, useState } from "react";
import IconGolines from "@global/assets/icons/main/golines.svg?react";
import IconMission from "@global/assets/icons/main/mission.svg?react";
import IconBell from "@global/assets/icons/main/notification.svg?react";
import IconArrow from "@global/assets/svg/shared/arrow-left.svg?react";
import GradientButton from "@global/components/buttons/GradientButton";
import FantasyButton from "@global/components/buttons/FantasyButton";

const PrivateNavbar = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setNavbarHeight(ref.current.offsetHeight);
		}
	}, [setNavbarHeight]);

	return (
		<Fragment>
			<nav ref={ref} className="fixed top-0 w-full grid gap-2 px-4 py-3">
				<p className="font-body-extrasmall-regular text-center">
					Powered by FFantasy
				</p>
				<div className="flex justify-between items-center">
					<div className="flex gap-2 sm:gap-4">
						<FantasyButton variant="secondary" className="hidden py-2! sm:block">
							<IconArrow className="h-6 w-6" />
						</FantasyButton>
						<GradientButton className="px-3 sm:py-2!">
							<IconGolines className="h-6 w-6 sm:h-8 sm:w-8" />
							<span className="font-body-small-medium text-center min-w-10 sm:text-base!">600</span>
						</GradientButton>
					</div>
					<div className="flex gap-1">
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

			<div style={{ paddingTop: navbarHeight }} className="grid grid-cols-3">
				<p
					className="text-center border-b-3 border-transparent 
					[border-image:linear-gradient(to_right,var(--color-secondary-500),var(--color-primary-500))_1]">
					Text
				</p>
				<p className="text-center border-b-3 border-transparent">Text</p>
				<p className="text-center border-b-3 border-transparent">Text</p>
			</div>
		</Fragment>
	)
}

export default PrivateNavbar