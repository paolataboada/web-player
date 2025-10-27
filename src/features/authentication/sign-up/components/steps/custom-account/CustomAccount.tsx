import FantasyButton from "../../../../../../global/components/buttons/FantasyButton";
import AuthCheckboxInput from "../../../../shared/components/inputs/AuthCheckboxInput";
import ColorPalette from "../../../elements/ColorPalette";

interface Props {
    nextStep: () => void;
    previousStep: () => void;
}

const CustomAccount = ({ nextStep, previousStep }: Props) => {
    return (
        <div>
            <ColorPalette />

            <div className="grid gap-2 my-10">
                <AuthCheckboxInput
                    label="Declaración"
                />
                <AuthCheckboxInput
                    label="Acepto recibir"
                    linkText="Información y Datos"
                />
                <AuthCheckboxInput
                    label="Al hacer clic en siguiente acepta los"
                    linkText="Términos y Condiciones"
                />
            </div>

            <div className="flex gap-2 my-8">
                <FantasyButton variant="secondary" size="lg" className="w-full" onClick={previousStep}>Volver</FantasyButton>
                <FantasyButton variant="primary" size="lg" className="w-full" onClick={nextStep}>Siguiente</FantasyButton>
            </div>
        </div>
    )
}

export default CustomAccount;
