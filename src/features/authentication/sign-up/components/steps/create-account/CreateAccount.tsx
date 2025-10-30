import { useNavigate } from "react-router-dom";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import MotionContainer from "@global/containers/MotionContainer";
import { ROUTES } from "@navigation/routes/routes";
import { useFormContext } from "react-hook-form";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import { signUpValidations } from "@features/authentication/sign-up/validations/sign-up.validations";
import { SIGN_UP_VALIDATION } from "@features/authentication/sign-up/constants/sign-up-fields-per-step";

interface Props {
    nextStep: () => void;
}

const CreateAccount = ({ nextStep }: Props) => {
    const navigate = useNavigate();

    const { register, watch, formState: { errors } } = useFormContext<TFormSignUp>();

    const isDisabledButton = SIGN_UP_VALIDATION["STANDARD"].FIELDS_PER_STEP["Create Account"].some((field) => !watch(field));

    return (
        <MotionContainer key="create-account">
            <form className="grid gap-6 mt-8">
                <AuthInput
                    label="Nombres"
                    placeholder="Ingresa tus nombres"
                    error={errors.firstName?.message}
                    {...register("firstName", signUpValidations.firstName)}
                />

                <AuthInput
                    label="Apellidos"
                    placeholder="Ingresa tus apellidos"
                    error={errors.lastName?.message}
                    {...register("lastName", signUpValidations.lastName)}
                />

                <AuthInput
                    label="Correo electrónico"
                    placeholder="Ingresa tu correo electrónico"
                    error={errors.email?.message}
                    {...register("email", signUpValidations.email)}
                />

                <AuthInput
                    type="date"
                    label="Fecha de nacimiento"
                    placeholder="Ingresa tu fecha de nacimiento"
                    error={errors.birthDate?.message}
                    {...register("birthDate", signUpValidations.birthDate)}
                />

                <FantasyButton
                    type="button"
                    variant="primary"
                    size="lg"
                    className="mt-4 mb-2"
                    disabled={isDisabledButton}
                    onClick={nextStep}>
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

export default CreateAccount