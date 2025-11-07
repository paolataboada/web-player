import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import FantasyButton from "@global/components/buttons/FantasyButton";
import AuthCheckboxInput from "@features/authentication/shared/components/inputs/AuthCheckboxInput";
import MotionContainer from "@global/containers/MotionContainer";
import { useFormContext } from "react-hook-form";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import { signUpValidations } from "@features/authentication/sign-up/validations/sign-up.validations";
import { SIGN_UP_VALIDATION } from "@features/authentication/sign-up/constants/sign-up-fields-per-step";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { generateValidRandomPassword } from "@global/utils/generate-random-password";

interface Props {
    nextStep: () => void;
}

const CreateAccountProviderStep1 = ({ nextStep }: Props) => {
    const location = useLocation();
    const player = location.state?.player;

    const { register, watch, setValue, formState: { errors } } = useFormContext<TFormSignUp>();

    useEffect(() => {
        if (!player) return;

        setValue("password", generateValidRandomPassword());
        setValue("firstName", player.firstName);
        setValue("lastName", player.lastName);
        setValue("email", player.email);
        setValue("birthDate", player.birthDate);
    }, [player, setValue]);

    const isDisabledButton = SIGN_UP_VALIDATION["PROVIDER"].FIELDS_PER_STEP["Create Account Provider"].some((field) => !watch(field));

    return (
        <MotionContainer key="custom-account">
            <form className="grid gap-6 mt-8 sm:mb-10">
                <AuthInput
                    label="Username"
                    placeholder="Ingresa tu username"
                    error={errors.username?.message}
                    autoComplete="new-username"
                    {...register("username", signUpValidations.username)}
                />

                <div className="grid gap-2 my-3.5">
                    <AuthCheckboxInput
                        label="Declaración"
                        error={errors.acceptDeclaration?.message}
                        register={register("acceptDeclaration", signUpValidations.acceptDeclaration)}
                    />
                    <AuthCheckboxInput
                        label="Acepto recibir"
                        linkText="Información y Datos"
                        error={errors.acceptInformation?.message}
                        register={register("acceptInformation", signUpValidations.acceptInformation)}
                    />
                    <AuthCheckboxInput
                        label="Al hacer clic en siguiente acepta los"
                        linkText="Términos y Condiciones"
                        error={errors.acceptTerms?.message}
                        register={register("acceptTerms", signUpValidations.acceptTerms)}
                    />
                </div>

                <div className="flex gap-2">
                    <FantasyButton
                        type="button"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isDisabledButton}
                        onClick={nextStep}>
                        Siguiente
                    </FantasyButton>
                </div>
            </form>
        </MotionContainer>
    )
}

export default CreateAccountProviderStep1;
