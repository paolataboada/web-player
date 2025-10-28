import { useNavigate } from "react-router-dom";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import MotionContainer from "@global/containers/MotionContainer";
import { ROUTES } from "@navigation/routes/routes";
import { useFormContext } from "react-hook-form";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import { signUpValidations } from "@features/authentication/sign-up/validations/sign-up.validations";

interface Props {
    nextStep: () => void;
}

const CreateAccount = ({ nextStep }: Props) => {
    const navigate = useNavigate();

    const { register, formState: { errors } } = useFormContext<TFormSignUp>();

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

                <div>
                    <label htmlFor="fechaNacimiento" className="block font-form-normal text-neutral-50 mb-1">Fecha de nacimiento</label>
                    <div className="flex space-x-2">
                        <select
                            id="fechaNacimiento-dd"
                            className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                        >
                            <option>DD</option>
                        </select>
                        <select
                            id="fechaNacimiento-mm"
                            className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                        >
                            <option>MM</option>
                        </select>
                        <select
                            id="fechaNacimiento-aaa"
                            className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                        >
                            <option>AAA</option>
                        </select>
                    </div>
                </div>

                <FantasyButton type="button" variant="primary" size="lg" className="mt-4 mb-2" onClick={nextStep}>
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