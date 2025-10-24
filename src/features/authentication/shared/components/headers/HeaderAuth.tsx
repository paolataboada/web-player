import FantasyButton from "../../../../../global/components/buttons/FantasyButton";

const HeaderAuth = () => {
    return (
        <div className="w-full p-6 rounded-b-lg shadow-lg -mt-px relative z-10">
            <div className="text-center mb-8">
                <h2 className="text-neutral-50">¡Únete ahora!</h2>
                <p className="font-body-normal-regular text-neutral-200">Regístrate y empieza a jugar</p>
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