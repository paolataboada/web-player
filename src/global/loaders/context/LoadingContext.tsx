import { createContext } from "react";

export type TLoadingContext = {
	isLoading: boolean;
	showLoading: () => void;
	hideLoading: () => void;
};

export const LoadingContext = createContext<TLoadingContext | null>(null);