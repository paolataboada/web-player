import type { UseFormSetError } from "react-hook-form";
import type { TFormVerifyCode } from "../types/form-reset-password.types";

/**
 * Marca todos los inputs del código de verificación con un error vacío
 * para activar el estado visual de error sin mostrar mensaje.
 */
export const showCodeFieldErrors = (setError: UseFormSetError<TFormVerifyCode>) => {
    for (let i = 0; i < 6; i++) {
        setError(`code.${i}`, { message: " " });
    }
};