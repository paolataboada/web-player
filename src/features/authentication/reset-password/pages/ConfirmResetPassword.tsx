import FantasyButton from "../../../../global/components/buttons/FantasyButton";
import IconCheck from "@public/svg/check.svg";

const ConfirmResetPassword = () => {
	return (
		<div className="flex items-center justify-center">
			{/* <div className="w-full max-w-dvw md:max-w-md  mx-auto px-7"> */}
				<img src={IconCheck} alt="IconCheck" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
				<h3 className="md:hidden text-center text-neutral-50 mb-2 md:mb-4">
					¡Tu nueva contraseña se ha guardado correctamente!
				</h3>
				<h2 className="hidden md:block text-center text-neutral-50 mb-2 md:mb-4">
					¡Tu nueva contraseña se ha guardado correctamente!
				</h2>

				<p className="font-form-normal font-weight-regular text-center text-neutral-200 mb-6 md:mb-8">
					Tu cuenta está segura.
					<br />
					Usa tu nueva contraseña para acceder.
				</p>
				<FantasyButton variant="primary" size="lg" type="submit" className="w-full">
					Iniciar sesión
				</FantasyButton>
			{/* </div> */}
		</div>
	);
};

export default ConfirmResetPassword;