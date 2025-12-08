import FantasyModal from '@global/components/modals/FantasyModal'
import { EModalType } from '@global/enums/modal.type.enum';
interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const MaxLeagueLimitModal = ({ isOpen, onClose }: Props) => {
    return (
        <FantasyModal
            isOpen={isOpen}
            onClose={onClose}
            type={EModalType.ALERT}
            className="p-10! text-center space-y-6 grid place-items-center"
        >
            <h3>
                ¡Tope de ligas alcanzado!
            </h3>
            <p>
                Ya formas parte de
                <strong> 20 ligas </strong> 
                entre creadas y unidas. Para unirte a una nueva competencia, deberás liberar un espacio en tu lista de ligas.
            </p>

        </FantasyModal>
    )
}
