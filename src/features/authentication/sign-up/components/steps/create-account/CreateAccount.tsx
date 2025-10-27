import { useNavigate } from "react-router-dom";
import FantasyButton from "../../../../../../global/components/buttons/FantasyButton";
import { AuthLinkText } from "../../../../shared/components/texts/AuthLinkText";
import { ROUTES } from "../../../../../../navigation/routes/routes";
import AuthInput from "../../../../shared/components/inputs/AuthInput";

interface Props {
    nextStep: () => void;
}

const CreateAccount = ({ nextStep }: Props) => {
    const navigate = useNavigate();

    return (
        <div>
            <form className="grid gap-6 mt-8">
                <AuthInput
                    label="Nombres"
                    placeholder="Ingresa tus nombres"
                />

                <AuthInput
                    label="Apellidos"
                    placeholder="Ingresa tus apellidos"
                />

                <AuthInput
                    label="Correo electrónico"
                    placeholder="Ingresa tu correo electrónico"
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
        </div>
    )
}

export default CreateAccount