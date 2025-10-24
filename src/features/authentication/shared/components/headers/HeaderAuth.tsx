import FantasyButton from "../../../../../global/components/buttons/FantasyButton";
import googleIcon from "../../../../../global/assets/icons/auth-providers/google-icon.svg";
import facebookIcon from "../../../../../global/assets/icons/auth-providers/facebook-icon.svg";

interface Props {
    title: string;
    description: string;
    titleWidth?: number;
}

const HeaderAuth = ({ title, description, titleWidth }: Props) => {
    return (
        <div className="grid gap-8 mb-8">
            <div className="grid gap-2 text-center">
                <h2 style={{ maxWidth: titleWidth }} className="text-neutral-50 mx-auto">
                    {title}
                </h2>
                <p className="font-body-normal-regular text-neutral-200">{description}</p>
            </div>

            <div className="flex justify-center gap-4">
                <FantasyButton variant="secondary" size="sm" className="flex justify-center items-center w-full truncate">
                    <img
                        src={googleIcon}
                        alt="Google"
                        className="w-6 h-6 mr-2"
                    />
                    Google
                </FantasyButton>
                <FantasyButton variant="secondary" size="sm" className="flex justify-center items-center w-full truncate">
                    <img
                        src={facebookIcon}
                        alt="Facebook"
                        className="w-6 h-6 mr-2"
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