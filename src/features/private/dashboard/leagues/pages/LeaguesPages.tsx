import MotionContainer from "@global/containers/MotionContainer";
import bannerPrivate from "@global/assets/banners/banner-private.png";
import LeagueCard from "@global/components/cards/LeagueCard";
import Camiseta from "@global/assets/icons/card/Camiseta.svg";
import IconFantasy from "/logos/isotipo-white.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { ArrowRightIcon } from "@mui/x-date-pickers";
import { useResponsive } from "@global/hooks/useResponsive";
import XIcon from "@global/assets/icons/shared/XIcon";
import IconKeyFill from "@global/assets/icons/shared/key-fill.svg?react";
import { useState } from "react";
import { CreateLeagueModal } from "../components/modal/config/CreateLeagueModal";

const LeaguesPage = () => {
	const [modalCreateLeague, setModalCreateLeague] = useState(false);
	const { isMd } = useResponsive();

	return (
		<MotionContainer className="flex flex-col h-full p-4 md:h-auto md:p-8 md:pb-14">
			<img src={bannerPrivate} alt="Mock Banner Privado" className="rounded-2xl md:h-[300px] md:w-full md:object-cover" />

			<section className="grid gap-6 py-2 mt-4">
				<div className="flex justify-center gap-4 md:justify-end">
					<FantasyButton
						variant="secondary"
						size={isMd ? "lg" : "sm"}
						onClick={() => setModalCreateLeague(true)}
						className="flex justify-center items-center gap-2 w-full md:max-w-[260px]">
						<XIcon className="h-6 w-6 rotate-45" />
						Crear Liga
					</FantasyButton>
					<FantasyButton
						variant="primary"
						size={isMd ? "lg" : "sm"}
						className="flex justify-center items-center gap-2 w-full md:max-w-[260px]">
						<IconKeyFill className="h-6 w-6" />
						Unirme a Liga
					</FantasyButton>
				</div>

				<div className="grid gap-6">
					<div className="grid gap-4">
						<div className="flex justify-between items-center">
							<h4>Mis Ligas Publicas</h4>
							{!isMd &&
								<FantasyButton variant="secondary" className="py-2! px-2.5! h-10! w-11!">
									<ArrowRightIcon />
								</FantasyButton>
							}
						</div>
						<div className="flex gap-4 overflow-x-auto">
							<LeagueCard
								type="Liga Publica"
								id="A123-456"
								title="FFANTASY"
								creator="FFantasy"
								icon={IconFantasy}
								color="rosa"
							/>
						</div>
					</div>

					<div className="grid gap-4">
						<div className="flex justify-between items-center">
							<h4>Mis Ligas Privadas</h4>
							{!isMd &&
								<FantasyButton variant="secondary" className="py-2! px-2.5! h-10! w-11!">
									<ArrowRightIcon />
								</FantasyButton>
							}
						</div>
						<div className="flex gap-4 overflow-x-auto">
							<LeagueCard
								type="Liga Privada"
								id="A123-456"
								title="FFANTASY"
								creator="FFantasy"
								icon={Camiseta}
								color="verde"
							/>
							<LeagueCard
								type="Liga Privada"
								id="A123-456"
								title="FFANTASY"
								creator="FFantasy"
								icon={Camiseta}
								color="celeste"
							/>
							<LeagueCard
								type="Liga Privada"
								id="A123-456"
								title="FFANTASY"
								creator="FFantasy"
								icon={Camiseta}
								color="amarillo"
							/>
							<LeagueCard
								type="Liga Privada"
								id="A123-456"
								title="FFANTASY"
								creator="FFantasy"
								icon={Camiseta}
								color="azul"
							/>
						</div>
					</div>
				</div>
			</section>

			<CreateLeagueModal
				isOpen={modalCreateLeague}
				onClose={() => setModalCreateLeague(false)}
			/>
		</MotionContainer>
	);
};

export default LeaguesPage;