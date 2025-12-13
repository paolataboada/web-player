import MotionContainer from "@global/containers/MotionContainer"
import bannerPrivate from "@global/assets/banners/banner-private.png";
import { PublicityBanner } from "@global/containers/PublicityBanner";
import FantasyButton from "@global/components/buttons/FantasyButton";
import BgCanchaDsk from "@global/assets/backgrounds/cancha-bg-horizontal.png"
import arrows from "@global/assets/icons/shared/arrows-left-right.svg"
import { PlayerInfo } from "../components/cards/PlayerInfo";
import teamShirt from "@global/assets/icons/modals/Team.svg"
import { WarningTag } from "../components/tags/WarningTag";

export const MainTeamPage = () => {
    return (
        <MotionContainer className="space-y-5">
            <PublicityBanner src={bannerPrivate} />
            <section
                className="bg-gradient-primary-neutral-secondary p-[1.5px] special-rounded">
                <div
                    className="w-full h-auto text-center py-8 px-2 grid items-center justify-center gap-2
                    bg-center special-rounded rounded-b-none! object-cover"
                    style={{ backgroundImage: `url(${BgCanchaDsk})` }}>
                    <p className="font-body-normal-medium">
                        Fecha límite para armar tu Equipo
                    </p>
                    <h1> 10 : 21 : 11 </h1>
                    <div className="bg-neutral-900 flex items-center gap-1.5 py-1 px-2 mx-auto rounded-[10px]">
                        <img src={arrows} alt="" />
                        <p className="font-body-small-regular leading-0!">
                            Plazo límite:
                            <strong> 4 Nov, 15:00 </strong>
                        </p>
                    </div>
                </div>
                <div
                    className="space-y-3 p-[1.5px] py-4 px-6 special-rounded rounded-t-none!
                    bg-linear-to-r! from-primary-700  to-secondary-900/80">
                    <WarningTag text="¡Tu equipo te necesita!" />
                    <PlayerInfo player={{ fullName: "Paolo Guerrero", status: "Lesionado", teamShirt: teamShirt }} />
                    <PlayerInfo player={{ fullName: "Paolo Guerrero", status: "Lesionado", teamShirt: teamShirt }} />
                    <FantasyButton
                        variant="primary"
                        className="w-full">
                        Ver Equipo
                    </FantasyButton>
                </div>
            </section>
        </MotionContainer>
    )
}
