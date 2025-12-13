import FantasyButton from "@global/components/buttons/FantasyButton"
import { BreadCrumb } from "@global/components/navbars/BreadCrumb"
import MotionContainer from "@global/containers/MotionContainer"
import { ROUTES } from "@navigation/routes/routes"

export const SearchPlayers = () => {
    return (
        <MotionContainer className="w-full min-w-screen h-min -m-4 overflow-x-hidden md:m-0 md:min-w-0 md:h-full">
            <BreadCrumb title="0 de 15" to={ROUTES.TEAM} />

            {/* TABLE */}

            <section>

            </section>

            <div 
                className="flex items-center justify-between py-1 font-body-extrasmall-regular
                border-t border-neutral-500 absolute bottom-0 left-0 right-0 px-4 ">
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
                    variant="primary"
                >
                    Revisar Equipo
                </FantasyButton>
            </div>


        </MotionContainer>
    )
}
