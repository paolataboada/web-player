import FantasyButton from "../../../../../../global/components/buttons/FantasyButton"

const CreateAccount = () => {
    return (
        <div>
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
            </div>
        </div>
    )
}

export default CreateAccount