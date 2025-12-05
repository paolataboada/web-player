import FantasyButton from "../../../../../global/components/buttons/FantasyButton";
import googleIcon from "../../../../../global/assets/icons/auth-providers/google-icon.svg";
import facebookIcon from "../../../../../global/assets/icons/auth-providers/facebook-icon.svg";
import { useSocialAuth } from "../../hooks/useSocialAuth";
import HeaderForm from "./HeaderForm";

interface Props {
    title: string;
    subtitle: string;
}

const AuthHeader = ({ title, subtitle }: Props) => {
    const { handleGoogle, handleFacebook } = useSocialAuth();

    return (
        <div className="grid gap-8 mb-8">
            <HeaderForm title={title} subtitle={subtitle} />
            
            <div className="flex justify-center gap-4">
                <FantasyButton
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={handleGoogle}
                    className="flex justify-center items-center w-full truncate">
                    <img
                        src={googleIcon}
                        alt="Google"
                        className="w-6 h-6 mr-2"
                    />
                    Google
                </FantasyButton>
                <FantasyButton
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={handleFacebook}
                    className="flex justify-center items-center w-full truncate">
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

export default AuthHeader;