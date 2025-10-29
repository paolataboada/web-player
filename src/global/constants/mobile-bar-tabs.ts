import ShirtOutlined from "@global/assets/svg/tab-bar/shirt-outline-icon.svg?react";
import ShirtFilled from "@global/assets/svg/tab-bar/shirt-fill-icon.svg?react";
import SoccerFieldOutlined from "@global/assets/svg/tab-bar/canchita-outline-icon.svg?react";
import SoccerFieldFilled from "@global/assets/svg/tab-bar/canchita-fill-icon.svg?react";
import ChartOutlined from "@global/assets/svg/tab-bar/stats-outline-icon.svg?react";
import ChartFilled from "@global/assets/svg/tab-bar/stats-fill-icon.svg?react";
import MegaphoneOutlined from "@global/assets/svg/tab-bar/feed-outline-icon.svg?react";
import MegaphoneFilled from "@global/assets/svg/tab-bar/feed-fill-icon.svg?react";
import MarketOutlined from "@global/assets/svg/tab-bar/market-outline-icon.svg?react";
import MarketFilled from "@global/assets/svg/tab-bar/market-fill-icon.svg?react";

export const MOBILE_BAR_TABS = [
    { id: "leagues", label: "Ligas", iconOutlined: ShirtOutlined, iconFilled: ShirtFilled },
    { id: "teams", label: "Equipo", iconOutlined: SoccerFieldOutlined, iconFilled: SoccerFieldFilled },
    { id: "stats", label: "Stats", iconOutlined: ChartOutlined, iconFilled: ChartFilled },
    { id: "feed", label: "Feed", iconOutlined: MegaphoneOutlined, iconFilled: MegaphoneFilled },
    { id: "market", label: "Tienda", iconOutlined: MarketOutlined, iconFilled: MarketFilled },
];