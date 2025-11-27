import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import VerifyAccountForm from "@features/authentication/login/components/forms/VerifyAccountForm";

const VerifyPage = () => {
    const navigate = useNavigate();

    const onVerified = () => {
        navigate(ROUTES.HOME, { replace: true });
    };

    return <VerifyAccountForm setHasVerified={onVerified} />;
};

export default VerifyPage;
