import { useContext } from "react";
import { LoadingContext, type TLoadingContext } from "../context/LoadingContext";

export const useLoading = (): TLoadingContext => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};