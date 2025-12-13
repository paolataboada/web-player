import FantasyButton from "@global/components/buttons/FantasyButton"
import { BreadCrumb } from "@global/components/navbars/BreadCrumb"
import MotionContainer from "@global/containers/MotionContainer"
import { ROUTES } from "@navigation/routes/routes"
import dicesIcon from "@global/assets/icons/shared/dice-fill.svg"
import bgCancha from "@global/assets/backgrounds/cancha-vertical-bg.png"
import { PlayerPositionButton } from "../components/buttons/PlayerPositionButton"
import { EPosition } from "../enums/players.position.enum"

export const CreateTeamPage = () => {
    return (
        <MotionContainer className="w-full min-w-screen h-min -m-4 overflow-x-hidden md:m-0 md:min-w-0 md:h-full">
            <BreadCrumb title="Elige a tu Equipo" to={ROUTES.TEAM}>
                <div className="flex items-center justify-between py-1 font-body-extrasmall-regular">
                    <p>
                        Jugadores
                        <br />
                        <span className="font-body-large-medium text-red-500">
                            0
                        </span>
                        <span className="font-body-small-medium"> / 15</span>
                    </p>
                    <div>
                        Presupuesto
                        <br />
                        <span className="font-body-normal-medium">100 Mon.</span>
                    </div>
                    <FantasyButton
                        variant="secondary"
                        size="sm"
                        className="flex gap-1">
                        <img src={dicesIcon} />
                        <p className="font-action-small">Autocompletar</p>
                    </FantasyButton>
                </div>
            </BreadCrumb>

            <section className="relative">
                <div style={{ backgroundImage: `url(${bgCancha})` }} className="absolute inset-0 bg-cover bg-center" />
                <div className="absolute inset-0  bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.32)_63%,rgba(0,0,0,1)_100%)]" />

                <div className="relative z-10 py-4 px-2 space-y-3">
                    <div className="flex justify-center">
                        <PlayerPositionButton position={EPosition.DELANTERO} />
                    </div>

                    <div className="flex justify-center gap-2">
                        <PlayerPositionButton position={EPosition.VOLANTE} />
                        <PlayerPositionButton position={EPosition.VOLANTE} />
                        <PlayerPositionButton position={EPosition.VOLANTE} />
                        <PlayerPositionButton position={EPosition.VOLANTE} />
                        <PlayerPositionButton position={EPosition.VOLANTE} />
                    </div>

                    <div className="flex justify-center gap-2">
                        <PlayerPositionButton position={EPosition.DEFENSA} />
                        <PlayerPositionButton position={EPosition.DEFENSA} />
                        <PlayerPositionButton position={EPosition.DEFENSA} />
                        <PlayerPositionButton position={EPosition.DEFENSA} />
                    </div>

                    <div className="flex justify-center">
                        <PlayerPositionButton position={EPosition.PORTERO} />
                    </div>
                </div>
            </section>
            <section
                className="py-3 space-y-1.5
                bg-neutral-900 border-y border-neutral-400 px-2
                sm:border sm:rounded-2xl sm:max-w-[412px] sm:px-6"
            >
                <p className="font-body-normal-medium sm:text-center">BANQUILLO</p>
                <div className="flex justify-center gap-6 sm:justify-between">
                    <PlayerPositionButton position={EPosition.PORTERO} />
                    <PlayerPositionButton position={EPosition.VOLANTE} />
                    <PlayerPositionButton position={EPosition.DEFENSA} />
                    <PlayerPositionButton position={EPosition.DELANTERO} />
                </div>
            </section>
            <div className="px-2">
                <FantasyButton
                    variant="primary"
                    className="md:w-[200px] mt-2 w-full">
                    Buscar Jugadores
                </FantasyButton>
            </div>


        </MotionContainer>
    )
}
