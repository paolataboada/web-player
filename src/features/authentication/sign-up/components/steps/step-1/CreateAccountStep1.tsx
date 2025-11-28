import { useNavigate } from "react-router-dom";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import MotionContainer from "@global/containers/MotionContainer";
import { ROUTES } from "@navigation/routes/routes";
import { useForm } from "react-hook-form";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import { useSignUpActionsServices } from "@features/authentication/sign-up/services/useSignUpActionsServices";
import { useState } from "react";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { step1SignUpValidations } from "@features/authentication/sign-up/validations/step-1-sign-up.validations";

type IStep1Form = Pick<TFormSignUp, "firstName" | "lastName" | "email" | "birthDate">;

interface Props {
    nextStep: () => void;
    setSignUpData: React.Dispatch<React.SetStateAction<IStep1Form>>;
}

const CreateAccountStep1 = ({ nextStep, setSignUpData }: Props) => {
    const navigate = useNavigate();
    const handleError = useHandlerError();

    const { validateEmailService } = useSignUpActionsServices();
    const [emailExists, setEmailExists] = useState(false);

    const { register, control, handleSubmit, formState: { errors } } = useForm<IStep1Form>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            birthDate: "",
        },
    });


    const handleVerifyEmail = async (form: IStep1Form) => {
        try {
            const exists = await validateEmailService(form.email);
            if (exists) {
                register("email", { ...step1SignUpValidations.email, disabled: true });
                setEmailExists(true);
                return
            }
            setSignUpData((prev) => ({ ...prev, ...form }));
            nextStep();
        } catch (error) {
            handleError(error);
        }
    }

    return (
        <MotionContainer key="create-account">
            <form className="grid gap-6 mt-8" onSubmit={handleSubmit(handleVerifyEmail)}>
                {
                    emailExists && (
                        <span className="text-red-500">"El correo electrónico ya existe"</span>
                    )
                }
                <AuthInput
                    label="Nombres"
                    placeholder="Ingresa tus nombres"
                    error={errors.firstName?.message}
                    {...register("firstName", step1SignUpValidations.firstName)}
                />

                <AuthInput
                    label="Apellidos"
                    placeholder="Ingresa tus apellidos"
                    error={errors.lastName?.message}
                    {...register("lastName", step1SignUpValidations.lastName)}
                />

                <AuthInput
                    label="Correo electrónico"
                    placeholder="Ingresa tu correo electrónico"
                    error={errors.email?.message}
                    {...register("email", step1SignUpValidations.email)}
                />



                <FantasyButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="mt-4 mb-2">
                    Siguiente
                </FantasyButton>
            </form>

            <AuthLinkText
                text="¿Ya tienes una cuenta?"
                linkText="Inicia sesión"
                onClick={() => navigate(ROUTES.LOGIN)}
                className="py-[18px] px-4"
            />
        </MotionContainer>
    )
}

export default CreateAccountStep1