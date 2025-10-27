import { useState } from 'react';
import IconCheck from "@global/assets/svg/check.svg";
import "../../.././../../../index.css";

// Importa todas tus camisetas con nombres únicos
import AlianzaLimaIcon from "@public/camisetas/Alianza Lima.svg";
import AtleticoIcon from "@public/camisetas/A. Atlético.svg";
import ADTIcon from "@public/camisetas/ADT.svg";
import CarlosMannucciIcon from "@public/camisetas/Carlos Mannu.svg";
import ChancasCYCIcon from "@public/camisetas/Chankas CYC.svg";
import CiencianoDeDeportesIcon from "@public/camisetas/Cienciano de Deportes.svg";
import ComerciantesUnidosIcon from "@public/camisetas/Comerciantes Unidos.svg";
import CuscoIcon from "@public/camisetas/Cusco.svg";
import DeportivoGarIcon from "@public/camisetas/Deportivo Gar.svg";
import MelgarIcon from "@public/camisetas/Melgar.svg";
import SportBoysIcon from "@public/camisetas/Sport Boys.svg";
import SportHuancayoIcon from "@public/camisetas/Sport Huancayo.svg";
import SportingCristalIcon from "@public/camisetas/Sporting Cristal.svg";
import UniversitarioIcon from "@public/camisetas/Universitario de Deportes.svg";
import UTCCajamarcaIcon from "@public/camisetas/UTC Cajamarca.svg";
import FantasyButton from '../../../../../../global/components/buttons/FantasyButton';

interface Team {
    id: number;
    name: string;
    icon: string;
}

interface Props {
    nextStep: () => void;
    previousStep: () => void;
}

const ChooseTeam = ({ nextStep, previousStep }: Props) => {
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

    const handleTeamSelect = (id: number) => {
        setSelectedTeam(id);
    };

    const teams: Team[] = [
        { id: 13, name: "Sporting Cristal", icon: SportingCristalIcon },
        { id: 1, name: "Alianza Lima", icon: AlianzaLimaIcon },
        { id: 14, name: "Universitario de Deportes", icon: UniversitarioIcon },
        { id: 6, name: "Cienciano de Deportes", icon: CiencianoDeDeportesIcon },
        { id: 8, name: "Cusco", icon: CuscoIcon },
        { id: 2, name: "A. Atlético", icon: AtleticoIcon },
        { id: 10, name: "Melgar", icon: MelgarIcon },
        { id: 12, name: "Sport Huancayo", icon: SportHuancayoIcon },
        { id: 9, name: "Deportivo Gar", icon: DeportivoGarIcon },
        { id: 15, name: "UTC Cajamarca", icon: UTCCajamarcaIcon },
        { id: 3, name: "ADT", icon: ADTIcon },
        { id: 5, name: "Chankas CYC", icon: ChancasCYCIcon },
        { id: 7, name: "Comerciantes Unidos", icon: ComerciantesUnidosIcon },
        { id: 4, name: "Carlos Mannu", icon: CarlosMannucciIcon },
        { id: 11, name: "Sport Boys", icon: SportBoysIcon },
    ];

    return (
        <div className="w-full max-w-[427px] flex flex-col justify-between mt-8">
            <p className="font-body-normal-medium text-neutral-50 mb-4">
                Tu equipo definirá la experiencia dentro del Ffantasy.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                {teams.map((team: Team) => (
                    <div key={team.id} className="flex flex-col items-center gap-2 relative w-[calc(33.333%-16px)] sm:w-[calc(33.333%-16px)] min-w-[100px] max-w-[120px]">
                        <button
                            className={`w-full h-[100px] rounded-tl-[20px] rounded-tr-md rounded-br-[20px] rounded-bl-md
                                flex items-center justify-center relative transition-all duration-200 ease-in-out
                                ${selectedTeam === team.id
                                    ? 'btn-gradient-border custom-shadow'
                                    : 'border border-neutral-400 bg-neutral-900 cursor-pointer hover:border-neutral-300'
                                }`
                            }
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

            <div className="flex gap-2 my-8">
                <FantasyButton type="button" variant="secondary" size="lg" className="w-full" onClick={previousStep}>Volver</FantasyButton>
                <FantasyButton type="button" variant="primary" size="lg" className="w-full" onClick={nextStep}>Confirmar</FantasyButton>
            </div>
        </div>
    )
}

export default ChooseTeam;