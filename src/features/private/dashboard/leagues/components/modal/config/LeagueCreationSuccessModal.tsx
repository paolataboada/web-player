import FantasyModal from "@global/components/modals/FantasyModal"
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NoRivalsAlertModal } from "../alerts/NoRivalsAlertModal";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const LeagueCreationSuccessModal = ({ isOpen, onClose }: Props) => {
    const [modalInvite, setModalInvite] = useState(false);
    const [modalAlert, setModalAlert] = useState(false);

    const onCloseModal = () => {
        setModalAlert(true);

    };

    return (
        <>
            <FantasyModal
                isOpen={isOpen}
                onClose={onCloseModal}
                className="text-center grid place-items-center"
                textButtonAccept="Invitar a mis amigos"
                onConfirm={() => setModalInvite(true)}
            >
                <h3>¡Tu liga está en marcha!</h3>
                <p>Ahora reúne a tus amigos y ve quién domina la temporada.</p>
            </FantasyModal>

            <AnimatePresence>
                {modalAlert && (
                    <NoRivalsAlertModal
                        isOpen={modalAlert}
                        onClose={() => { setModalAlert(false); onClose() }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {modalInvite}
            </AnimatePresence>
        </>
    );
};
