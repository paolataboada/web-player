import { useContext } from "react";
import { ErrorHandlerContext, type THandlerError } from "../context/ErrorHandlerContext";

export const useHandlerError = (): THandlerError => {
  const context = useContext(ErrorHandlerContext);
  if (!context) {
    throw new Error("useErrorHandler must be used within an ErrorHandlerProvider");
  }
  return context;
};