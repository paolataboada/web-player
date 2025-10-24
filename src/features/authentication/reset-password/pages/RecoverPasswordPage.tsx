import MotionContainer from "../../../../global/containers/MotionContainer";
import lock from "../../../../../public/svg/lock.svg";
import FantasyButton from "../../../../global/components/buttons/FantasyButton";
import AuthInput from "../../shared/components/inputs/AuthInput";

const RecoverPasswordPage = () => {
	return (
		<MotionContainer>
			<div className="grid gap-10">
				<div className=" h-[226px] flex flex-col justify-between items-center">
					<img src={lock} className="w-12 h-12 text-neutral-50" />
					<div className="text-box  h-[166px] flex flex-col justify-between ">
						<h2 className="h2  h-[120px] text-center text-neutral-50">Ups, ¿No <br /> recuerdas <br /> tu contraseña?</h2>
						<p className=" h-9 font-body-normal-regular text-neutral-200 text-center " >Ingresa tu correo y te enviaremos un código <br /> para crear una nueva. </p>
					</div>
				</div>

				<AuthInput
					label="Correo electrónico"
					placeholder="Ingresa tu correo electrónico"
				/>

				<div className="flex justify-between gap-4">
					<FantasyButton variant="secondary" size="lg" className="w-full">Volver al inicio</FantasyButton>
					<FantasyButton variant="primary" size="lg" className="w-full">Enviar código</FantasyButton>
				</div>
			</div>
		</MotionContainer>
	)
}

export default RecoverPasswordPage