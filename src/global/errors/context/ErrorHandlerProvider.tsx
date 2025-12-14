import { useDispatch } from "react-redux";
import { useCallback, type PropsWithChildren, type ReactNode } from "react";
import { ErrorHandlerContext, type THandlerError } from "./ErrorHandlerContext";
import { errorToast } from "@app/middlewares/toast/toast.actions";

interface Props extends PropsWithChildren {
    children: ReactNode;
}

export const ErrorHandlerProvider = ({ children }: Props) => {
    const dispatch = useDispatch();

    const handleError: THandlerError = useCallback((error) => {
        console.log("Handle Error 👉🏻", error);
        const message = error?.message;
        dispatch(errorToast({ message }));
    }, [dispatch]);

    return (
        <ErrorHandlerContext.Provider value={handleError}>
            {children}
        </ErrorHandlerContext.Provider>
    );
};