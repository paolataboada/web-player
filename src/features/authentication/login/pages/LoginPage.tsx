import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { ROUTES } from "../../../../navigation/routes/routes";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useTokenAuthRedirect } from "../../shared/hooks/useTokenAuthRedirect";
import { useLoginActionsServices } from "../services/useLoginActionsServices";
import type { TFormLogin } from "../types/form-login.types";
import LoginForm from "../components/forms/LoginForm";
import VerifyAccountForm from "../components/forms/VerifyAccountForm";
import { handleUnverifiedAccountError } from "../utils/handle-unverified-account-error";
import { isBusinessError } from "@global/utils/is-business-error";

const LoginPage = () => {
    const [hasVerified, setHasVerified] = useState(true);

    useTokenAuthRedirect();
    const { apiLoginService } = useLoginActionsServices();

    const navigate = useNavigate();
    const handleError = useHandlerError();

    const methods = useForm<TFormLogin>({ mode: "onChange" });

    const onSubmit = async (form: TFormLogin) => {
        try {
            const payload = {
                identifier: form.identifier.trim(),
                password: form.password.trim(),
            };
            await apiLoginService(payload);

            navigate(ROUTES.HOME);
        } catch (error) {
            handleError(error);
            if (isBusinessError(error)) {
                handleUnverifiedAccountError(error, setHasVerified, methods);
            }
        };
    };

    return (
        <Fragment>
            {hasVerified ?
                <FormProvider {...methods}>
                    <LoginForm handleSubmit={methods.handleSubmit(onSubmit)} />
                </FormProvider>
                :
                <VerifyAccountForm setHasVerified={setHasVerified} />
            }
        </Fragment>
    );
};

export default LoginPage;
