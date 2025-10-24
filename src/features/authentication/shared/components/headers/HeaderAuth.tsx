import { useLocation } from "react-router-dom";
import FantasyButton from "../../../../../global/components/buttons/FantasyButton";
import { ROUTES } from "../../../../../navigation/routes/routes";

const HeaderAuth = () => {
    const { pathname } = useLocation();

    const WELCOME_TITLE = {
        [ROUTES.LOGIN]: "¡Hey, ya estás aquí!",
        [ROUTES.SIGNUP]: "¡Únete ahora!",
    }

    const WELCOME_DESCRIPTION = {
        [ROUTES.LOGIN]: "Conéctate y arma tu liga ganadora",
        [ROUTES.SIGNUP]: "Regístrate y empieza a jugar",
    }

    const WIDTH_TITLE_SIZE = {
        [ROUTES.LOGIN]: 192,
        [ROUTES.SIGNUP]: 237,
    }

    return (
        <div className="w-full py-6 rounded-b-lg shadow-lg -mt-px relative z-10">
            <div className="text-center mb-8">
                <h2
                    style={{ width: WIDTH_TITLE_SIZE[pathname] }}
                    className="text-neutral-50 mb-2 mx-auto">
                    {WELCOME_TITLE[pathname]}
                </h2>
                <p className="font-body-normal-regular text-neutral-200">{WELCOME_DESCRIPTION[pathname]}</p>
            </div>

            <div className="flex space-x-4 mb-8">
                <FantasyButton variant="secondary" size="sm" className="flex justify-center items-center w-full">
                    <img
                        src="/Desktop/google-icon.png"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                    />
                    Google
                </FantasyButton>
                <FantasyButton variant="secondary" size="sm" className="flex justify-center items-center w-full">
                    <img
                        src="/Desktop/facebook-icon.png"
                        alt="Facebook"
                        className="w-5 h-5 mr-2"
                    />
                    Facebook
                </FantasyButton>
            </div>

            <div className="flex items-center justify-center">
                <hr className="grow border-neutral-400" />
                <span className="mx-4 font-body-small-regular text-neutral-200">O</span>
                <hr className="grow border-neutral-400" />
            </div>
        </div>
    );
}

export default HeaderAuth;