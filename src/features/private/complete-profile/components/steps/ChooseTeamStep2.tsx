import { useEffect, useMemo, useState } from "react";
import { ETeamStatus, type ITeam } from "@entities/team/types";
import IconCheck from "@global/assets/icons/shared/check.svg";
import IconSearch from "@global/assets/icons/shared/search.svg?react";
import FantasyButton from '@global/components/buttons/FantasyButton';
import MotionContainer from '@global/containers/MotionContainer';
import InputField from "@global/components/forms/InputField";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import type { ICompleteProfileData } from "../../CompleteProfilePage";
import { useCompleteProfileActionsServices } from "../../services/useCompleteProfileActionsServices";

interface Props {
    previousStep: () => void;
    handleSubmit: () => void;
    setCompleteProfileData: React.Dispatch<React.SetStateAction<ICompleteProfileData>>;
}

const ChooseTeamStep2 = ({ previousStep, setCompleteProfileData, handleSubmit }: Props) => {
    const handleErrors = useHandlerError();

    const { getFantasyTeams } = useCompleteProfileActionsServices();

    const [teams, setTeams] = useState<ITeam[] | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const [selectedTeamId, setSelectedTeamId] = useState<string | null | "">("");

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const teams = await getFantasyTeams();
                const availableTeams = [...teams].filter((team: ITeam) => team.status === ETeamStatus.ACTIVE);
                setTeams(availableTeams);
            } catch (error) {
                handleErrors(error);
            }
        };

        fetchTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTeamSelect = (id: string) => {
        setSelectedTeamId(id);
    };

    const handleSubmitTeam = () => {
        if (!selectedTeamId) {
            return setSelectedTeamId(null)
        }
        setCompleteProfileData((prev) => ({ ...prev, teamId: selectedTeamId }));
        handleSubmit();
    };

    const filteredTeams = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();

        if (!term) return teams;

        return teams?.filter((team) =>
            team.nickname.toLowerCase().includes(term) ||
            team.acronym?.toLowerCase().includes(term)
        );
    }, [teams, searchTerm]);

    return (
        <MotionContainer key="choose-team">
            <form className="w-full max-w-[427px] flex flex-col justify-between mt-8">
                <InputField
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    icon={<IconSearch className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2" />}
                    className="pl-11"
                />

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {filteredTeams?.length === 0 ?
                        <p className="text-body-normal-regular text-neutral-200 text-center pt-12 pb-8">
                            No se encontraron equipos
                        </p>
                        : (filteredTeams?.map((team: ITeam) => (
                            <div
                                key={team._id}
                                className="flex flex-col items-center gap-2 relative w-[calc(33.333%-16px)] 
                                min-w-[100px] max-w-[120px] sm:w-[calc(33.333%-16px)]">
                                <button
                                    type="button"
                                    className={`w-full h-[100px] rounded-tl-[20px] rounded-tr-md rounded-br-[20px] rounded-bl-md
                                    flex items-center justify-center relative transition-all duration-200 ease-in-out
                                    ${selectedTeamId === team._id
                                            ? 'btn-gradient-border custom-shadow'
                                            : 'border border-neutral-400 bg-neutral-900 cursor-pointer hover:border-neutral-300'
                                        }`}
                                    onClick={() => handleTeamSelect(team._id)}>
                                    {selectedTeamId === team._id && (
                                        <img src={IconCheck} alt="Seleccionado" className="absolute -top-2 -right-2 w-5 h-5 z-10" />
                                    )}
                                    <img src={team.imageUrl} alt={team.nickname} className="w-16 h-16 object-contain" />
                                </button>
                                <span className="font-body-normal-medium text-neutral-50 text-center text-sm mt-1 leading-tight px-1">
                                    {team.nickname}
                                </span>
                            </div>
                        )))}
                </div>

                {selectedTeamId === null && <p className="text-[#F21F29] text-center text-sm mt-2">Debe seleccionar un equipo</p>}

                <div className="flex gap-2 my-8">
                    <FantasyButton type="button" variant="secondary" size="lg" className="w-full" onClick={previousStep}>Volver</FantasyButton>
                    <FantasyButton
                        type="button"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        onClick={handleSubmitTeam}>
                        Confirmar
                    </FantasyButton>
                </div>
            </form>
        </MotionContainer>
    )
}

export default ChooseTeamStep2;