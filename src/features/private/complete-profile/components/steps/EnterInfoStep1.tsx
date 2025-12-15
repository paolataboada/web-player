import InputField from "@global/components/forms/InputField";
import FantasyButton from "@global/components/buttons/FantasyButton";
import CheckboxInputField from "@global/components/forms/CheckboxInputField";
import MotionContainer from "@global/containers/MotionContainer";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { Controller, useForm } from "react-hook-form";
import AuthDatePickerInput from "@features/authentication/shared/components/inputs/AuthDatePickerInput";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import ErrorAlert from "@global/components/alerts/ErrorAlert";
import type { ICompleteProfileData } from "../../CompleteProfilePage";
import { step1EnterInfoValidations } from "../../validations/step-1-enter-info.validations";
import { useSignUpActionsServices } from "@features/authentication/services/useSignUpActionsServices";
import type { BusinessECSessionCurrent } from "@documentation/code/business.error.code";
import { BUSINESS_ERROR_MAPPING } from "@documentation/mapping/error.mapping";

type IStep2Form = Pick<ICompleteProfileData, "birthDate" | "username"> & {
    confirmPassword: string;
    acceptDeclaration: boolean;
    acceptInformation: boolean;
    acceptTerms: boolean;
};

interface Props {
    nextStep: () => void;
    completeProfileData: ICompleteProfileData;
    setCompleteProfileData: React.Dispatch<React.SetStateAction<ICompleteProfileData>>;
}

const EnterInfoStep1 = ({ nextStep, completeProfileData, setCompleteProfileData }: Props) => {
    const dispatch = useDispatch();
    const handleError = useHandlerError();
    const { validateUsernameService } = useSignUpActionsServices();

    const {
        register,
        handleSubmit,
        setError,
        control,
        formState: { errors }
    } = useForm<IStep2Form>({
        defaultValues: {
            username: completeProfileData.username,
            acceptDeclaration: false,
            acceptInformation: false,
            acceptTerms: false,
            birthDate: completeProfileData.birthDate,
        },
    });

    const handleVerifyUsername = async (form: IStep2Form) => {
        try {
            dispatch(activeGlobalLoading({ message: "Verificando username..." }));
            await validateUsernameService(form.username);
            setCompleteProfileData(prev => ({ ...prev, username: form.username, birthDate: form.birthDate }));
            nextStep();
        } catch (error: any) {
            const businessError = BUSINESS_ERROR_MAPPING.SIGN_UP[error?.code as BusinessECSessionCurrent];
            if (businessError) {
                setError("username", { type: "username-available", message: businessError.message });
                return;
            }
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        }
    }

    return (
        <MotionContainer key="custom-account">
            <form className="grid gap-6 mt-8 sm:mb-10" onSubmit={handleSubmit(handleVerifyUsername)}>
                {(errors.username?.type === "username-available" && errors.username?.message) &&
                    <ErrorAlert message={errors.username?.message} />
                }

                <InputField
                    label="Username"
                    placeholder="Ingresa tu username"
                    error={errors.username}
                    {...register("username", step1EnterInfoValidations.username)}
                />

                <Controller
                    name="birthDate"
                    control={control}
                    rules={step1EnterInfoValidations.birthDate}
                    render={({ field, fieldState }) => (
                        <AuthDatePickerInput
                            label="Fecha de nacimiento"
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                        />
                    )}
                />


                <div className="grid gap-2 my-3.5">
                    <CheckboxInputField
                        label="Certifico que soy mayor de edad y acepto continuar."
                        error={errors.acceptDeclaration}
                        register={register("acceptDeclaration", step1EnterInfoValidations.acceptDeclaration)}
                    />
                    <CheckboxInputField
                        label="Acepto recibir"
                        linkText="Información y Datos"
                        error={errors.acceptInformation}
                        register={register("acceptInformation", step1EnterInfoValidations.acceptInformation)}
                    />
                    <CheckboxInputField
                        label="Al hacer clic en siguiente acepta los"
                        linkText="Términos y Condiciones"
                        error={errors.acceptTerms}
                        register={register("acceptTerms", step1EnterInfoValidations.acceptTerms)}
                    />
                </div>

                <FantasyButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full">
                    Continuar
                </FantasyButton>
            </form>
        </MotionContainer>
    )
}

export default EnterInfoStep1;
