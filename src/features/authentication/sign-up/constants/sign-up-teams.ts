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

export interface ITeam {
    id: string;
    name: string;
    icon: string;
}

export const LIST_TEAMS: ITeam[] = [
    { id: "13", name: "Sporting Cristal", icon: SportingCristalIcon },
    { id: "1", name: "Alianza Lima", icon: AlianzaLimaIcon },
    { id: "14", name: "Universitario de Deportes", icon: UniversitarioIcon },
    { id: "6", name: "Cienciano de Deportes", icon: CiencianoDeDeportesIcon },
    { id: "8", name: "Cusco", icon: CuscoIcon },
    { id: "2", name: "A. Atlético", icon: AtleticoIcon },
    { id: "10", name: "Melgar", icon: MelgarIcon },
    { id: "12", name: "Sport Huancayo", icon: SportHuancayoIcon },
    { id: "9", name: "Deportivo Gar", icon: DeportivoGarIcon },
    { id: "15", name: "UTC Cajamarca", icon: UTCCajamarcaIcon },
    { id: "3", name: "ADT", icon: ADTIcon },
    { id: "5", name: "Chankas CYC", icon: ChancasCYCIcon },
    { id: "7", name: "Comerciantes Unidos", icon: ComerciantesUnidosIcon },
    { id: "4", name: "Carlos Mannu", icon: CarlosMannucciIcon },
    { id: "11", name: "Sport Boys", icon: SportBoysIcon },
];