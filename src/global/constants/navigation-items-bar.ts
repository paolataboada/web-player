import ShirtOutlined from "@global/assets/icons/navigation/ShirtOutlined.svg?react";
import ShirtFilled from "@global/assets/icons/navigation/ShirtFilled.svg?react";
import SoccerFieldOutlined from "@global/assets/icons/navigation/SoccerFieldOutlined.svg?react";
import SoccerFieldFilled from "@global/assets/icons/navigation/SoccerFieldFilled.svg?react";
import ChartOutlined from "@global/assets/icons/navigation/ChartOutlined.svg?react";
import ChartFilled from "@global/assets/icons/navigation/ChartFilled.svg?react";
import MegaphoneOutlined from "@global/assets/icons/navigation/MegaphoneOutlined.svg?react";
import MegaphoneFilled from "@global/assets/icons/navigation/MegaphoneFilled.svg?react";
import MarketOutlined from "@global/assets/icons/navigation/MarketOutlined.svg?react";
import MarketFilled from "@global/assets/icons/navigation/MarketFilled.svg?react";
import { ROUTES } from "@navigation/routes/routes";

export interface INavigationItemBar {
    id: string;
    label: string;
    iconOutlined: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconFilled: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    to: string;
}

export const NAVIGATION_ITEMS_BAR: INavigationItemBar[] = [
    { id: "leagues", label: "Ligas", iconOutlined: ShirtOutlined, iconFilled: ShirtFilled, to: ROUTES.LEAGUES },
    { id: "teams", label: "Equipo", iconOutlined: SoccerFieldOutlined, iconFilled: SoccerFieldFilled, to: ROUTES.TEAM },
    { id: "stats", label: "Stats", iconOutlined: ChartOutlined, iconFilled: ChartFilled, to: ROUTES.HOME },
    { id: "feed", label: "Feed", iconOutlined: MegaphoneOutlined, iconFilled: MegaphoneFilled, to: ROUTES.HOME },
    { id: "market", label: "Tienda", iconOutlined: MarketOutlined, iconFilled: MarketFilled, to: ROUTES.HOME },
];