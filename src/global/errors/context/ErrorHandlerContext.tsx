import { createContext } from 'react';

export type THandlerError = (error: unknown) => void;

export const ErrorHandlerContext = createContext<THandlerError | null>(null);