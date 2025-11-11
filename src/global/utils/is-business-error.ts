import type { IBusinessError } from "@global/errors/handlers/handleBusinessError";

export const isBusinessError = (error: unknown): error is IBusinessError => {
	return typeof error === "object" && error !== null && "response" in error;
};