import { useState, type PropsWithChildren } from "react";
import { LoadingContext } from "./LoadingContext";
import AppOverlayLoader from "../../components/loaders/AppOverlayLoader";

export const LoadingProvider = ({ children }: PropsWithChildren) => {
    const [isLoading, setIsLoading] = useState(true);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
            {isLoading && <AppOverlayLoader />}
        </LoadingContext.Provider>
    );
};