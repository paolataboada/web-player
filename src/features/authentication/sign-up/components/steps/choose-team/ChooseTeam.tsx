import IconCheck from "@global/assets/svg/check.svg";
import FantasyButton from '../../../../../../global/components/buttons/FantasyButton';
import MotionContainer from '@global/containers/MotionContainer';
import { useFormContext } from 'react-hook-form';
import type { TFormSignUp } from '@features/authentication/sign-up/types/form-sign-up.types';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import { useDispatch } from "react-redux";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { apiSignUpService } from "@features/authentication/sign-up/services/api-sign-up.service";
import { LIST_TEAMS, type ITeam } from "@features/authentication/sign-up/constants/sign-up-teams";
import { FIELDS_PER_STEP } from "@features/authentication/sign-up/constants/sign-up-fields-per-step";
import { useEffect } from "react";

interface Props {
    previousStep: () => void;
}

const ChooseTeam = ({ previousStep }: Props) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleError = useHandlerError();

    const { register, setValue, watch, formState: { errors }, handleSubmit } = useFormContext<TFormSignUp>();

    useEffect(() => {
        register("teamId", { required: "Debes seleccionar un equipo" });
    }, [register]);

    const selectedTeam = watch("teamId") ?? "";

    const handleTeamSelect = (id: string) => {
        setValue("teamId", id, { shouldValidate: true });
    };

    const onSubmit = async (form: TFormSignUp) => {
        try {
            const payload = {
                username: form.username,
                password: form.password,
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                birthDate: form.birthDate,
                documentType: form.documentType,
                documentNumber: form.documentNumber,
                teamId: form.teamId,
            };
            await apiSignUpService(dispatch, payload)
            navigate(ROUTES.HOME, {
                replace: true,
                state: { toast: "¡Bienvenido a Fantasy!" },
            });
        } catch (error) {
            handleError(error);
        }
    };

    const isDisabledButton = FIELDS_PER_STEP["Choose Team"].some((field) => !watch(field));

    return (
        <MotionContainer key="choose-team">
            <form className="w-full max-w-[427px] flex flex-col justify-between mt-8">
                <p className="font-body-normal-medium text-neutral-50 mb-4">
                    Tu equipo definirá la experiencia dentro del Ffantasy.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {LIST_TEAMS?.map((team: ITeam) => (
                        <div
                            key={team.id}
                            className="flex flex-col items-center gap-2 relative w-[calc(33.333%-16px)] 
                            min-w-[100px] max-w-[120px] sm:w-[calc(33.333%-16px)]">
                            <button
                                type="button"
                                className={`w-full h-[100px] rounded-tl-[20px] rounded-tr-md rounded-br-[20px] rounded-bl-md
                                flex items-center justify-center relative transition-all duration-200 ease-in-out
                                ${selectedTeam === team.id
                                    ? 'btn-gradient-border custom-shadow'
                                    : 'border border-neutral-400 bg-neutral-900 cursor-pointer hover:border-neutral-300'
                                }`}
                                onClick={() => handleTeamSelect(team.id)}>
                                {selectedTeam === team.id && (
                                    <img src={IconCheck} alt="Seleccionado" className="absolute -top-2 -right-2 w-5 h-5 z-10" />
                                )}
                                <img src={team.icon} alt={team.name} className="w-16 h-16 object-contain" />
                            </button>
                            <span className="font-body-normal-medium text-neutral-50 text-center text-sm mt-1 leading-tight px-1">
                                {team.name}
                            </span>
                        </div>
                    ))}
                </div>

                {errors.teamId && <p className="text-[#F21F29] text-center text-sm mt-2">{errors.teamId.message}</p>}

                <div className="flex gap-2 my-8">
                    <FantasyButton type="button" variant="secondary" size="lg" className="w-full" onClick={previousStep}>Volver</FantasyButton>
                    <FantasyButton
                        type="button"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isDisabledButton}
                        onClick={handleSubmit(onSubmit)}>
                        Confirmar
                    </FantasyButton>
                </div>
            </form>
        </MotionContainer>
    )
}

export default ChooseTeam;