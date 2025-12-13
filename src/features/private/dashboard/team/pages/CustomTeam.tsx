import FantasyButton from "@global/components/buttons/FantasyButton"
import FantasyInputField from "@global/components/elements/FantasyInputField"
import FantasyLabelInput from "@global/components/elements/FantasyLabelInput"
import { BreadCrumb } from "@global/components/navbars/BreadCrumb"
import FantasyContainerInput from "@global/containers/FantasyContainerInput"
import MotionContainer from "@global/containers/MotionContainer"
import { ROUTES } from "@navigation/routes/routes"

export const CustomTeam = () => {
    return (
        <MotionContainer className="w-full min-w-screen h-min -m-4 overflow-x-hidden md:m-0 md:min-w-0 md:h-full">
            <BreadCrumb title="Elige a tu Equipo" to={ROUTES.TEAM}>
                <p className="font-body-small-regular text-center py-2 px-5 text-neutral-200">
                    El nombre de tu equipo quedará bloqueado una vez tus jugadores comiencen a puntuar.
                </p>
            </BreadCrumb>

            <div className="px-4 space-y-6 py-10">
                <h3 className="text-center">
                    Define tu identidad competitiva
                </h3>
                <FantasyLabelInput label="Nombre de tu equipo">
                    <FantasyContainerInput>
                        <FantasyInputField
                            placeholder="Nombre de tu equipo"
                        />
                    </FantasyContainerInput>

                    <span className="font-body-small-regular pt-1">
                        Máximo 25 caracteres, sin caracteres especiales.
                    </span>
                </FantasyLabelInput>
                <FantasyButton
                    variant="primary"
                    className="md:w-[200px] mt-2 w-full">
                    Buscar Jugadores
                </FantasyButton>
            </div>


        </MotionContainer>
    )
}
