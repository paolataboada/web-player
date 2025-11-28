import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import FantasyButton from "@global/components/buttons/FantasyButton";
import AuthCheckboxInput from "@features/authentication/shared/components/inputs/AuthCheckboxInput";
import MotionContainer from "@global/containers/MotionContainer";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import { step2SignUpValidations } from "@features/authentication/sign-up/validations/step-2-sign-up.validations";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useSignUpActionsServices } from "@features/authentication/sign-up/services/useSignUpActionsServices";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AuthDatePickerInput from "@features/authentication/shared/components/inputs/AuthDatePickerInput";

type IStep2Form = Pick<TFormSignUp, "birthDate" | "username" | "password"> & {
    confirmPassword: string;
    acceptDeclaration: boolean;
    acceptInformation: boolean;
    acceptTerms: boolean;
};

interface Props {
    nextStep: () => void;
    previousStep: () => void;
    setSignUpData: React.Dispatch<React.SetStateAction<IStep2Form>>;
}

const CustomAccountStep2 = ({ nextStep, previousStep, setSignUpData }: Props) => {
    const handleError = useHandlerError();

    const { validateUsernameService } = useSignUpActionsServices();

    const [usernameExists, setUsernameExists] = useState(false);

    const { register, handleSubmit, control, formState: { errors } } = useForm<IStep2Form>({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const handleVerifyUsername = async (form: IStep2Form) => {
        try {
            const exists = await validateUsernameService(form.username);
            if (exists) {
                register("username", { ...step2SignUpValidations.username, disabled: true });
                setUsernameExists(true);
                return
            }
            setSignUpData((prev) => ({ ...prev, ...form }));
            nextStep();
        } catch (error) {
            handleError(error);
        }
    }

    return (
        <MotionContainer key="custom-account">
            <form className="grid gap-6 mt-8 sm:mb-10" onSubmit={handleSubmit(handleVerifyUsername)}>
                {
                    usernameExists && (
                        <span className="text-red-500">"El username ya existe"</span>
                    )
                }

                <AuthInput
                    label="Username"
                    placeholder="Ingresa tu username"
                    error={errors.username?.message}
                    {...register("username", step2SignUpValidations.username)}
                />

                <div className="grid gap-4">
                    <AuthPasswordInput
                        label="Contraseña"
                        placeholder="Contraseña"
                        autoComplete="new-password"
                        error={errors.password?.message}
                        register={register("password", step2SignUpValidations.password)}
                    />
                </div>

                <Controller
                    name="birthDate"
                    control={control}
                    rules={step2SignUpValidations.birthDate}
                    render={({ field, fieldState }) => (
                        <AuthDatePickerInput
                            label="Fecha de nacimiento"
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                        />
                    )}
                />

                <AuthPasswordInput
                    label="Confirmar Nueva Contraseña"
                    placeholder="Confirmar Nueva Contraseña"
                    error={errors.confirmPassword?.message}
                    register={register("confirmPassword", step2SignUpValidations.confirmPassword)}
                />

                <div className="grid gap-2 my-3.5">
                    <AuthCheckboxInput
                        label="Declaración"
                        error={errors.acceptDeclaration?.message}
                        register={register("acceptDeclaration", step2SignUpValidations.acceptDeclaration)}
                    />
                    <AuthCheckboxInput
                        label="Acepto recibir"
                        linkText="Información y Datos"
                        error={errors.acceptInformation?.message}
                        register={register("acceptInformation", step2SignUpValidations.acceptInformation)}
                    />
                    <AuthCheckboxInput
                        label="Al hacer clic en siguiente acepta los"
                        linkText="Términos y Condiciones"
                        error={errors.acceptTerms?.message}
                        register={register("acceptTerms", step2SignUpValidations.acceptTerms)}
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
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full">
                        Siguiente
                    </FantasyButton>
                </div>
            </form>
        </MotionContainer>
    )
}

export default CustomAccountStep2;
