import MotionContainer from "../../../../global/containers/MotionContainer";
import letter from "../../../../../public/svg/letter.svg";
import FantasyButton from "../../../../global/components/buttons/FantasyButton";

const VerifyCodePage = () => {
	return (
		<MotionContainer>
			<div className="w-full max-w-[332px] lg:max-w-[426px] h-[418px] flex flex-col justify-between">
				<div className=" h-[146px] flex flex-col justify-between items-center">
					<img src={letter} className="w-12 h-12 text-neutral-50" />
					<div className="text-box h-[86px] flex flex-col justify-between ">
						<h2 className="h2  h-10 text-center text-neutral-50">Verifica tu acceso</h2>
						<p className="h-9 font-body-normal-regular text-neutral-200 text-center " >Escribe el código de 6 digitos que llegó a tu correo<br/> <span className="font-body-normal-medium text-neutral-50">(anita@gmail.com)</span> </p>
					</div>
				</div>
				<div className=" h-[232px] flex flex-col justify-between ">
					<div className=" h-[72px] flex flex-col justify-between">
						<div className=" h-[18px]  flex items-center font-body-normal-regular">Correo electrónico</div>
						<div className="flex justify-between">
							<input type="text" name="" id="" className="text-center w-[60px] lg:w-[78.8px] h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
							<input type="text" name="" id="" className="text-center w-[60px] lg:w-[78.8px] h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
							<input type="text" name="" id="" className="text-center w-[60px] lg:w-[78.8px] h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
							<input type="text" name="" id="" className="text-center w-[60px] lg:w-[78.8px] h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
							<input type="text" name="" id="" className="text-center w-[60px] lg:w-[78.8px] h-12 p-3 bg-neutral-500 font-body-normal-regular text-neutral-300 rounded-2xl" placeholder="0" />
						</div>
					</div>
					<div className="lg:max-h-[120px] flex flex-col justify-between">
						<div className="h-14 flex justify-between">
							<FantasyButton variant="secondary" size="lg" className="lg:w-[205px] w-[158px] " >Volver al inicio</FantasyButton>
							<FantasyButton variant="primary" size="lg" className="lg:w-[205px] " >Confirmar código</FantasyButton>
						</div>
						<div className="h-14 flex flex-col justify-center items-center">
							<div className="  h-[21px] font-body-normal-regular text-neutral-200">¿No recibiste el código? <span className="font-body-normal-regular text-neutral-50">Reenviar código</span></div>
						</div>
					</div>
				</div>
			</div>
		</MotionContainer>
	)
}

export default VerifyCodePage