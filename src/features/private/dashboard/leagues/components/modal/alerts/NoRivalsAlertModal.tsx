import FantasyModal from '@global/components/modals/FantasyModal'
import { EModalType } from '@global/enums/modal.type.enum';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const NoRivalsAlertModal = ({ isOpen, onClose }: Props) => {
    const [modalInvite, setModalInvite] = useState(false);
    return (
        <>
            <FantasyModal
                type={EModalType.ALERT}
                isOpen={isOpen}
                onClose={onClose}
                className="text-center grid place-items-center"
                textButtonReject='No, volver'
                textButtonAccept="Invitar a mis amigos"
                onConfirm={() => setModalInvite(true)}
            >
                <h3> Ups, aún no tienes rivales! </h3>
                <p>Para poder continuar con tu liga, debes tener al menos un rival con el que competir.</p>
            </FantasyModal>
            <AnimatePresence>
                {modalInvite}
            </AnimatePresence>
        </>
    )
}
