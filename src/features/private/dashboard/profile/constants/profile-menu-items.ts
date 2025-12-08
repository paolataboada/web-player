import { ROUTES } from "@navigation/routes/routes";
import UserIcon from "@global/assets/icons/shared/user.svg";
import PadlockIcon from "@global/assets/icons/shared/padlock.svg";
import Questions from "@global/assets/icons/shared/questions.svg";
import Group from "@global/assets/icons/shared/Group.svg";

export const PROFILE_ITEMS = [
    {
        icon: UserIcon,
        title: "Información del usuario",
        link: `${ROUTES.PROFILE}/main-details`,
    },
    {
        icon: PadlockIcon,
        title: "Cuenta y seguridad",
        link: `${ROUTES.PROFILE}/privacy-details`,
    },
    {
        icon: Questions,
        title: "Preguntas frecuentes",
        link: `${ROUTES.PROFILE}/player-faq`,
    },
    { icon: Group, title: "Soporte", link: "#" },
];