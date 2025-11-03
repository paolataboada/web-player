import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import FantasyButton from "@global/components/buttons/FantasyButton";
import AuthCheckboxInput from "@features/authentication/shared/components/inputs/AuthCheckboxInput";
import { PasswordStrength } from "@features/authentication/shared/components/passwords/PasswordStrength";
import { usePasswordValidation } from "@features/authentication/shared/hooks/usePasswordValidation";
import AuthSelect from "@features/authentication/shared/components/inputs/AuthSelect";
import MotionContainer from "@global/containers/MotionContainer";
import { useFormContext } from "react-hook-form";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import { signUpValidations } from "@features/authentication/sign-up/validations/sign-up.validations";
import { getPasswordValidations } from "@features/authentication/shared/validations/password.validations";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { DOCUMENT_OPTIONS } from "@features/authentication/sign-up/constants/sign-up-document-options";
import { getDocumentValidations } from "@features/authentication/sign-up/validations/document.validations";
import { SIGN_UP_VALIDATION } from "@features/authentication/sign-up/constants/sign-up-fields-per-step";
import { EDocumentType } from "@entities/player/types";

interface Props {
    nextStep: () => void;
    previousStep: () => void;
}

const CustomAccountStep2 = ({ nextStep, previousStep }: Props) => {
    const { register, watch, formState: { errors } } = useFormContext<TFormSignUp>();

    const password = watch("password") ?? "";
    const { rules, getBarColor, getProgressWidth } = usePasswordValidation(password);
    const signUpPasswordValidations = getPasswordValidations(password);

    const documentType = watch("documentType") ?? "";
    const documentValidations = getDocumentValidations(documentType);

    const isDisabledButton = SIGN_UP_VALIDATION["STANDARD"].FIELDS_PER_STEP["Custom Account"].some((field) => !watch(field));

    return (
        <MotionContainer key="custom-account">
            <form className="grid gap-6 mt-8 sm:mb-10">
                <AuthInput
                    label="Username"
                    placeholder="Ingresa tu username"
                    error={errors.username?.message}
                    {...register("username", signUpValidations.username)}
                />

                <div className="grid grid-cols-2 gap-2">
                    <label className="font-body-normal-regular text-neutral-50 col-span-2">
                        Documento de Identidad
                    </label>
                    <AuthSelect
                        options={DOCUMENT_OPTIONS}
                        error={errors.documentType?.message}
                        defaultValue={EDocumentType.DNI}
                        className="pointer-events-none"
                        {...register("documentType", documentValidations.documentType)}
                    />
                    <AuthInput
                        placeholder="000 000 000 0"
                        error={errors.documentNumber?.message}
                        {...register("documentNumber", documentValidations.documentNumber)}
                    />
                </div>

                <div className="grid gap-4">
                    <AuthPasswordInput
                        label="Contraseña"
                        placeholder="Contraseña"
                        error={errors.password?.message}
                        register={register("password", signUpPasswordValidations.password)}
                    />
                    <PasswordStrength
                        rules={rules}
                        getBarColor={getBarColor}
                        getProgressWidth={getProgressWidth}
                    />
                </div>

                <AuthPasswordInput
                    label="Confirmar Nueva Contraseña"
                    placeholder="Confirmar Nueva Contraseña"
                    error={errors.confirmPassword?.message}
                    register={register("confirmPassword", signUpPasswordValidations.confirmPassword)}
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
                        variant="secondary"
                        size="lg"
                        className="w-full"
                        onClick={previousStep}>
                        Volver
                    </FantasyButton>
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

export default CustomAccountStep2;
