import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import type { IRootState } from "@app/store";
import { useFormContext } from 'react-hook-form';
import type { ITeam } from "@entities/team/types";
import IconCheck from "@global/assets/svg/check.svg";
import FantasyButton from '@global/components/buttons/FantasyButton';
import MotionContainer from '@global/containers/MotionContainer';
import type { TFormSignUp } from '@features/authentication/sign-up/types/form-sign-up.types';
import { SIGN_UP_VALIDATION } from "@features/authentication/sign-up/constants/sign-up-fields-per-step";
import { useSignUpActionsServices } from "@features/authentication/sign-up/services/useSignUpActionsServices";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import IconSearch from "@global/assets/svg/shared/search.svg?react";

interface Props {
    previousStep: () => void;
    handleSubmit: () => void;
}

const ChooseTeamStep3 = ({ previousStep, handleSubmit }: Props) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const teams = useSelector((state: IRootState) => state.teams);

    const { getFantasyTeams } = useSignUpActionsServices();

    const { register, setValue, watch, formState: { errors } } = useFormContext<TFormSignUp>();

    useEffect(() => {
        register("teamId", { required: "Debes seleccionar un equipo" });
    }, [register]);

    useEffect(() => {
        getFantasyTeams();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selectedTeam = watch("teamId") ?? "";

    const handleTeamSelect = (id: string) => {
        setValue("teamId", id, { shouldValidate: true });
    };

    const isDisabledButton = SIGN_UP_VALIDATION["STANDARD"].FIELDS_PER_STEP["Choose Team"].some((field) => !watch(field));

    const filteredTeams = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) return teams;
        return teams.filter((team: ITeam) =>
            team.nickname.toLowerCase().includes(term) ||
            team.acronym?.toLowerCase().includes(term)
        );
    }, [teams, searchTerm]);

    return (
        <MotionContainer key="choose-team">
            <form className="w-full max-w-[427px] flex flex-col justify-between mt-8">
                <AuthInput
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    disabled={filteredTeams?.length === 0}
                    icon={
                        <IconSearch
                            className={`absolute bottom-0 left-3 top-1/2 -translate-y-1/2 
                            ${filteredTeams?.length === 0 ? "opacity-10 cursor-not-allowed" : ""}`}
                        />
                    }
                    className="pl-11 disabled:cursor-not-allowed"
                />

                <div className="flex flex-wrap justify-center gap-4">
                    {filteredTeams?.length === 0 &&
                        <p className="text-body-normal-regular text-neutral-200 text-center pt-12 pb-8">
                            No se encontraron equipos
                        </p>
                    }
                    {filteredTeams?.map((team: ITeam) => (
                        <div
                            key={team._id}
                            className="flex flex-col items-center gap-2 relative w-[calc(33.333%-16px)] 
                            min-w-[100px] max-w-[120px] sm:w-[calc(33.333%-16px)]">
                            <button
                                type="button"
                                className={`w-full h-[100px] rounded-tl-[20px] rounded-tr-md rounded-br-[20px] rounded-bl-md
                                flex items-center justify-center relative transition-all duration-200 ease-in-out
                                ${selectedTeam === team._id
                                    ? 'btn-gradient-border custom-shadow'
                                    : 'border border-neutral-400 bg-neutral-900 cursor-pointer hover:border-neutral-300'
                                }`}
                                onClick={() => handleTeamSelect(team._id)}>
                                {selectedTeam === team._id && (
                                    <img src={IconCheck} alt="Seleccionado" className="absolute -top-2 -right-2 w-5 h-5 z-10" />
                                )}
                                <img src={team.imageUrl} alt={team.nickname} className="w-16 h-16 object-contain" />
                            </button>
                            <span className="font-body-normal-medium text-neutral-50 text-center text-sm mt-1 leading-tight px-1">
                                {team.nickname}
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
                        onClick={handleSubmit}>
                        Confirmar
                    </FantasyButton>
                </div>
            </form>
        </MotionContainer>
    )
}

export default ChooseTeamStep3;