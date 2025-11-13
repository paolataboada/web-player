import { useDispatch } from "react-redux";
import { infoToast } from "@app/middlewares/toast/toast.actions";

export const useHandleCanProceed = () => {
    const dispatch = useDispatch();

    const handleProceed = (goToStep: (step: number) => void) => {
        const message = "¡Ya estás dentro! Usa el código enviado a tu correo para activar tu cuenta.";

        dispatch(infoToast({ message }));
        goToStep(3);
    };

    return handleProceed;
};
