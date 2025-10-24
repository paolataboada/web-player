import FantasyButton from "../../../../../../global/components/buttons/FantasyButton";
import ColorPalette from "../../../elements/ColorPalette";

interface Props {
    nextStep: () => void;
    previousStep: () => void;
}

const CustomAccount = ({ nextStep, previousStep }: Props) => {
    return (
        <div>
            <ColorPalette />

            <div className="flex gap-2 my-8">
                <FantasyButton variant="secondary" size="lg" className="w-full" onClick={previousStep}>Volver</FantasyButton>
                <FantasyButton variant="primary" size="lg" className="w-full" onClick={nextStep}>Siguiente</FantasyButton>
            </div>
        </div>
    )
}

export default CustomAccount