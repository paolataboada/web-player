import MotionContainer from "../../../../global/containers/MotionContainer";
import lock from "../../../../../public/svg/lock.svg";
import FantasyButton from "../../../../global/components/buttons/FantasyButton";

const ResetPasswordPage = () => {
	return (
		<MotionContainer>
			<div className="w-full max-w-[332px] h-[434px] flex flex-col justify-between">
				<div className=" h-[226px] flex flex-col justify-between items-center">
					<img src={lock} className="w-12 h-12 text-neutral-50" />
					<div className="text-box  h-[166px] flex flex-col justify-between ">
						<h2 className="h2  h-[120px] text-center text-neutral-50">Ups, ¿No <br/> recuerdas <br/> tu contraseña?</h2>
						<p className=" h-9 font-body-normal-regular text-neutral-200 text-center " >Ingresa tu correo y te enviaremos un código <br/> para crear una nueva. </p>
					</div>
				</div>
				<div className=" h-[168px] flex flex-col justify-between ">
					<div className=" h-[72px] flex flex-col justify-between">
						<div className=" h-[18px]  flex items-center font-body-normal-regular">Correo electrónico</div>
						<input type="text" name="" id="" className=" h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="Ingresa tu correo electrónico" />
					</div>
					<div className=" h-14 flex justify-between">
						<FantasyButton variant="secondary" size="lg" className="w-[158px] " >Volver al inicio</FantasyButton>
						<FantasyButton variant="primary" size="lg" className="w-[158px] " >Enviar código</FantasyButton>
					</div>
				</div>
			</div>
		</MotionContainer>
	)
}

export default ResetPasswordPage