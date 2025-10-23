import FantasyButton from "../../../../../global/components/buttons/FantasyButton";

const HeaderAuth = () => {
    return (
        <div className="min-h-screen text-neutral-50 flex flex-col items-center bg-linear-to-b from-brand-secondary-500 via-brand-secondary-700 to-neutral-900">
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="w-full p-8 rounded-b-lg shadow-lg -mt-px relative z-10">
                        <div className="text-center mb-8">
                            <h2 className="text-neutral-50">¡Únete ahora!</h2>
                            <p className="font-body-normal-regular text-neutral-200">Regístrate y empieza a jugar</p>
                        </div>

                        <div className="flex space-x-4 mb-8">
                            <FantasyButton variant="secondary" size="sm" className="flex justify-center items-center w-full">
                                <img
                                    src="/Desktop/google-icon.png"
                                    alt="Google"
                                    className="w-5 h-5 mr-2"
                                />
                                Google
                            </FantasyButton>
                            <FantasyButton variant="secondary" size="sm" className="flex justify-center items-center w-full">
                                <img
                                    src="/Desktop/facebook-icon.png"
                                    alt="Facebook"
                                    className="w-5 h-5 mr-2"
                                />
                                Facebook
                            </FantasyButton>
                        </div>

                        {/* <div className="flex items-center justify-center mb-8">
                            <hr className="grow border-neutral-400" />
                            <span className="mx-4 font-body-small-regular text-neutral-200">O</span>
                            <hr className="grow border-neutral-400" />
                        </div>

                        <div className="text-center mb-6">
                            <h3 className="text-neutral-50">Crea tu cuenta</h3>
                            <p className="font-body-small-regular text-neutral-200">Paso 1 de 3: Ingresa tus datos</p>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="nombres" className="block font-form-normal text-neutral-50 mb-1">Nombres</label>
                                <input
                                    type="text"
                                    id="nombres"
                                    placeholder="Ingresa tus nombres"
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="apellidos" className="block font-form-normal text-neutral-50 mb-1">Apellidos</label>
                                <input
                                    type="text"
                                    id="apellidos"
                                    placeholder="Ingresa tus apellidos"
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="correo" className="block font-form-normal text-neutral-50 mb-1">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="correo"
                                    placeholder="Ingresa tu correo electrónico"
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="fechaNacimiento" className="block font-form-normal text-neutral-50 mb-1">Fecha de nacimiento</label>
                                <div className="flex space-x-2">
                                    <select
                                        id="fechaNacimiento-dd"
                                        className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                                    >
                                        <option>DD</option>
                                    </select>
                                    <select
                                        id="fechaNacimiento-mm"
                                        className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                                    >
                                        <option>MM</option>
                                    </select>
                                    <select
                                        id="fechaNacimiento-aaa"
                                        className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                                    >
                                        <option>AAA</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="documentoIdentidad" className="block font-form-normal text-neutral-50 mb-1">Documento de Identidad</label>
                                <div className="flex space-x-2">
                                    <select
                                        id="documentoIdentidad-tipo"
                                        className="w-1/3 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                                    >
                                        <option>DNI</option>
                                    </select>
                                    <input
                                        type="text"
                                        id="documentoIdentidad-numero"
                                        placeholder="000 000 000 0"
                                        className="grow px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                                    />
                                </div>
                            </div>

                            <FantasyButton variant="primary" size="lg" type="submit" className="w-full">
                                Siguiente
                            </FantasyButton>
                        </form>

                        <div className="text-center mt-6">
                            <p className="font-body-normal-regular text-neutral-50">
                                ¿Ya tienes una cuenta? {' '}
                                <a href="#" className="font-link-normal text-brand-secondary-500">Inicia sesión</a>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAuth;