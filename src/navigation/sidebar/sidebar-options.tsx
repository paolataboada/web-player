
import FeedIcon from "@global/assets/icons/sidebar/Feed-outline-icon.svg";
import CanchitaIcon from "@global/assets/icons/sidebar/canchita-outline-icon.svg";
import StatsIcon from "@global/assets/icons/sidebar/stats-outline-icon.svg";
import MarketIcon from "@global/assets/icons/sidebar/market-outline-icon.svg";
import ShirtIcon from "@global/assets/icons/sidebar/shirt-fill-icon.svg";
import { ROUTES } from "@navigation/routes/routes";
import type { ReactNode } from "react";

interface ItemSidebar {
    name: string,
    icon: ReactNode,
    link: string,
}

export const SIDEBAR_ITEMS: ItemSidebar[] = [
    {
        name: "Liga",
        icon: <img src={ShirtIcon} className="w-6 h-6" alt="Liga" />,
        link: ROUTES.LEAGUES
    },
    {
        name: "Equipo",
        icon: <img src={CanchitaIcon} className="w-6 h-6" alt="Equipo" />,
        link: ROUTES.HOME
    },
    {
        name: "Stats",
        icon: <img src={StatsIcon} className="w-6 h-6" alt="Stats" />,
        link: ROUTES.HOME
    },
    {
        name: "Feed",
        icon: <img src={FeedIcon} className="w-6 h-6" alt="Feed" />,
        link: ROUTES.HOME
    },
    {
        name: "Tienda",
        icon: <img src={MarketIcon} className="w-6 h-6" alt="Tienda" />,
        link: ROUTES.HOME
    }
];

