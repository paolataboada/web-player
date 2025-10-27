import MotionContainer from "../../../../global/containers/MotionContainer";
import FantasyButton from "../../../../global/components/buttons/FantasyButton";
import IconLetter from "@global/assets/svg/letter.svg";
import { AuthLinkText } from "../../shared/components/texts/AuthLinkText";
import { ROUTES } from "../../../../navigation/routes/routes";
import { useNavigate } from "react-router-dom";

const VerifyCodePage = () => {
	const navigate = useNavigate();

	return (
		<MotionContainer className="grid gap-10">
			<div className="flex flex-col justify-between items-center">
				<img src={IconLetter} className="w-12 h-12 text-neutral-50 mb-3" />
				<div className="text-box flex flex-col justify-between">
					<h2 className="text-center text-neutral-50 mb-2.5">Verifica tu acceso</h2>
					<p className="font-body-normal-regular text-neutral-200 text-center">Escribe el código de 6 digitos que llegó a tu correo<br /> <span className="font-body-normal-medium text-neutral-50">(anita@gmail.com)</span> </p>
				</div>
			</div>
			<div className="grid gap-1.5">
				<div className="flex items-center font-body-normal-regular">Código</div>
				<div className="grid grid-cols-5 gap-2 w-full">
					<input type="text" name="" id="1" className="text-center h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
					<input type="text" name="" id="2" className="text-center h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
					<input type="text" name="" id="3" className="text-center h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
					<input type="text" name="" id="4" className="text-center h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
					<input type="text" name="" id="5" className="text-center h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<div className="flex gap-4 mb-2">
					<FantasyButton
						variant="secondary"
						size="lg"
						onClick={() => navigate(ROUTES.LOGIN)}
						className="h-auto w-full">
						Volver al inicio
					</FantasyButton>
					<FantasyButton
						variant="primary"
						size="lg"
						onClick={() => navigate(ROUTES.RESET_PASSWORD)}
						className="h-auto w-full px-2.5!">
						Confirmar código
					</FantasyButton>
				</div>
				<AuthLinkText
					text="¿No recibiste el código?"
					linkText="Reenviar código"
					onClick={() => null}
					className="py-[18px] px-4"
				/>
			</div>
		</MotionContainer>
	)
}

export default VerifyCodePage