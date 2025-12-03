import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import FantasyButton from "@global/components/buttons/FantasyButton";
import AuthCheckboxInput from "@features/authentication/shared/components/inputs/AuthCheckboxInput";
import MotionContainer from "@global/containers/MotionContainer";
import { step2SignUpValidations } from "@features/authentication/validations/sign-up/step-2-sign-up.validations";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useSignUpActionsServices } from "@features/authentication/services/useSignUpActionsServices";
import { Controller, useForm } from "react-hook-form";
import AuthDatePickerInput from "@features/authentication/shared/components/inputs/AuthDatePickerInput";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import ErrorAlert from "@global/components/alerts/ErrorAlert";
import type { ISignUpData } from "@features/authentication/pages/SignUpPage";

type IStep2Form = Pick<ISignUpData, "birthDate" | "username" | "password"> & {
    confirmPassword: string;
    acceptDeclaration: boolean;
    acceptInformation: boolean;
    acceptTerms: boolean;
};

interface Props {
    nextStep: () => void;
    previousStep: () => void;
    signUpData: ISignUpData;
    setSignUpData: React.Dispatch<React.SetStateAction<ISignUpData>>;
}


const CustomAccountStep2 = ({ nextStep, previousStep, signUpData, setSignUpData }: Props) => {
    const dispatch = useDispatch();
    const handleError = useHandlerError();
    const { validateUsernameService } = useSignUpActionsServices();

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        trigger,
        control,
        formState: { errors }
    } = useForm<IStep2Form>({
        defaultValues: {
            username: signUpData.username,
            password: signUpData.password,
            confirmPassword: "",
            acceptDeclaration: false,
            acceptInformation: false,
            acceptTerms: false,
            birthDate: signUpData.birthDate,
        },
    });

    const handleVerifyUsername = async (form: IStep2Form) => {
        try {
            dispatch(activeGlobalLoading({ message: "Verificando username..." }));
            const { exists } = await validateUsernameService(form.username);
            if (exists) {
                setError("username", { type: "username-in-use" });
                return
            }
            setSignUpData(prev => ({ ...prev, username: form.username, password: form.password, birthDate: form.birthDate }));
            nextStep();
        } catch (error) {
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        }
    }

    return (
        <MotionContainer key="custom-account">
            <form className="grid gap-6 mt-8 sm:mb-10" onSubmit={handleSubmit(handleVerifyUsername)}>
                {
                    errors.username?.type === "username-in-use" && (
                        <ErrorAlert
                            title="Este usuario ya existe"
                            message="El username ya existe"
                            onClose={() => clearErrors()}
                        />
                    )
                }

                <AuthInput
                    label="Username"
                    placeholder="Ingresa tu username"
                    error={errors.username}
                    {...register("username", step2SignUpValidations.username)}
                />

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

                <div className="grid gap-4">
                    <AuthPasswordInput
                        label="Contraseña"
                        placeholder="Contraseña"
                        autoComplete="new-password"
                        error={errors.password}
                        register={register("password", {
                            ...step2SignUpValidations.password,
                            onChange: async () => await trigger("password"),
                        })}
                    />
                </div>

                <AuthPasswordInput
                    label="Confirmar Nueva Contraseña"
                    placeholder="Confirmar Nueva Contraseña"
                    error={errors.confirmPassword}
                    register={register("confirmPassword", {
                        ...step2SignUpValidations.confirmPassword,
                        onChange: async () => await trigger("confirmPassword"),
                    })}
                />




                <div className="grid gap-2 my-3.5">
                    <AuthCheckboxInput
                        label="Certifico que soy mayor de edad y acepto continuar."
                        error={errors.acceptDeclaration}
                        register={register("acceptDeclaration", step2SignUpValidations.acceptDeclaration)}
                    />
                    <AuthCheckboxInput
                        label="Acepto recibir"
                        linkText="Información y Datos"
                        error={errors.acceptInformation}
                        register={register("acceptInformation", step2SignUpValidations.acceptInformation)}
                    />
                    <AuthCheckboxInput
                        label="Al hacer clic en siguiente acepta los"
                        linkText="Términos y Condiciones"
                        error={errors.acceptTerms}
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
