import MotionContainer from "../../../../global/containers/MotionContainer";
import FantasyButton from "../../../../global/components/buttons/FantasyButton";
import IconLetter from "@global/assets/svg/letter.svg";
import { AuthLinkText } from "../../shared/components/texts/AuthLinkText";
import { ROUTES } from "../../../../navigation/routes/routes";
import { useLocation, useNavigate } from "react-router-dom";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import { useForm } from "react-hook-form";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useCodeInputs } from "../hooks/useCodeInputs";
import { showCodeFieldErrors } from "../utils/show-code-field-errors";
import { useResetPasswordActions } from "../services/useResetPasswordActions";

export type TFormVerifyCode = {
	code: string[];
};

const VerifyCodePage = () => {
	const location = useLocation();
	const email = location.state?.email;

	const navigate = useNavigate();
	const handleError = useHandlerError();

	const { verifyCodeService, resendRecoveryCodeService } = useResetPasswordActions();

	const { register, setValue, handleSubmit, watch, setError, clearErrors, formState: { errors } } = useForm<TFormVerifyCode>({
		defaultValues: { code: ["", "", "", "", ""] },
		shouldFocusError: false,
		mode: "onChange",
	});

	const { handlePaste, handleChange, handleKeyDown } = useCodeInputs({ setValue });

	const onSubmit = async (form: TFormVerifyCode) => {
		try {
			const payload = { code: form.code.join(""), email }
			await verifyCodeService(payload);

			navigate(ROUTES.RESET_PASSWORD, { state: payload });
		} catch (error) {
			handleError(error);
			showCodeFieldErrors(setError);
		}
	};

	const handleResendCode = async () => {
		try {
			const payload = { email };
			await resendRecoveryCodeService(payload);

			navigate(ROUTES.VERIFY_CODE, { state: payload, });
		} catch (error) {
			handleError(error);
		}
	};

	return (
		<MotionContainer>
			<form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
				<div className="flex flex-col justify-between items-center">
					<img src={IconLetter} className="w-12 h-12 text-neutral-50 mb-3" />
					<div className="text-box flex flex-col justify-between">
						<h2 className="text-center text-neutral-50 mb-2.5">Verifica tu acceso</h2>
						<p className="font-body-normal-regular text-neutral-200 text-center">
							Escribe el código de 6 digitos que llegó a tu correo
							<br />
							<span className="font-body-normal-medium text-neutral-50">
								({location.state?.email})
							</span>
						</p>
					</div>
				</div>
				<div className="grid gap-1.5">
					<div className="flex items-center font-body-normal-regular">Código</div>
					<div className="grid grid-cols-5 gap-2 w-full">
						{[0, 1, 2, 3, 4].map((i) => (
							<AuthInput
								key={i}
								id={`code-${i}`}
								type="text"
								maxLength={1}
								placeholder="0"
								error={errors.code?.[i]?.message ? " " : undefined}
								className="text-center"
								{...register(`code.${i}`, {
									required: "Ingrese el código de verificación",
									validate: (_, formValues) => {
										const joined = formValues.code.join("");
										return joined.length === 5 || "Complete el código de verificación";
									},
								})}
								onChange={(e) => { clearErrors("code"); handleChange(i, e) }}
								onKeyDown={(e) => handleKeyDown(i, e)}
								onPaste={i === 0 ? handlePaste : undefined}
							/>
						))}
					</div>
					{errors.code?.[0]?.message?.trim() && <p className="text-red-500 text-sm -mt-2">{errors.code[0].message}</p>}
				</div>
				<div className="flex flex-col justify-between">
					<div className="flex gap-4 mb-2">
						<FantasyButton
							type="button"
							variant="secondary"
							size="lg"
							onClick={() => navigate(ROUTES.LOGIN)}
							className="h-auto w-full">
							Volver al inicio
						</FantasyButton>
						<FantasyButton
							type="submit"
							variant="primary"
							size="lg"
							disabled={!watch("code").every((c) => c.trim() !== "")}
							className="h-auto w-full px-2.5!">
							Confirmar código
						</FantasyButton>
					</div>
					<AuthLinkText
						text="¿No recibiste el código?"
						linkText="Reenviar código"
						onClick={handleResendCode}
						className="py-[18px] px-4"
					/>
				</div>
			</form>
		</MotionContainer>
	)
}

export default VerifyCodePage