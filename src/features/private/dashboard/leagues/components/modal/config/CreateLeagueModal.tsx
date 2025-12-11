import FantasyInputField from "@global/components/elements/FantasyInputField";
import FantasyLabelInput from "@global/components/elements/FantasyLabelInput";
import FantasyModal from "@global/components/modals/FantasyModal";
import FantasyContainerInput from "@global/containers/FantasyContainerInput";
import { EModalType } from "@global/enums/modal.type.enum";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useForm, type SubmitHandler } from "react-hook-form";
import { validationCreateLeague } from "../../../validations/create-league.validation";
import { NAVIGATION_ITEMS_BAR } from "@global/constants/navigation-items-bar";
import { useState } from "react";
import { IconTabButton } from "../../../elements/IconTabButton";
import { AnimatePresence } from "framer-motion";
import { LeagueCreationSuccessModal } from "./LeagueCreationSuccessModal";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

interface ILeague { name: string; players: number; }

export type TFormCreateLeague = Partial<Pick<ILeague, "name" | "players">>;

export const CreateLeagueModal = ({ isOpen, onClose }: Props) => {

    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
    const [modalSuccess, setModalSuccess] = useState(false);

    const handleError = useHandlerError();
    //const { editLeagueService } = useLeaguesActionsServices();

    const { register, handleSubmit, formState: { errors, isDirty } } = useForm<TFormCreateLeague>({ mode: "onChange" });

    const onSubmit: SubmitHandler<TFormCreateLeague> = async (form) => {
        console.log(form);
        try {
            // await editLeagueService({
            //     name: form.name ?? "",
            //     players: form.players ?? 0,
            // });

            //updateListLeague();
            onClose();
            setModalSuccess(true)
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <>
            <FantasyModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={handleSubmit(onSubmit)}
                type={EModalType.CREATE}
                className="text-center grid place-items-center"
                disabledAccept={!isDirty}
                textButtonReject="Cancelar"
                textButtonAccept="Crear Liga"
            >
                <h3> ¡Crea tu propia liga! </h3>
                <p>¡Demuestra tus habilidades y lidera tu propia liga! </p>
                <form className="w-full space-y-4">
                    <FantasyLabelInput label="Nombre de la liga">
                        <FantasyContainerInput error={errors.name?.message}>
                            <FantasyInputField
                                placeholder="Nombre de la liga"
                                {...register("name", validationCreateLeague.name)}
                            />
                        </FantasyContainerInput>
                    </FantasyLabelInput>

                    <FantasyLabelInput label="Icono de Liga">
                        <div className="w-full rounded-full border-neutral-500 border p-2 flex justify-between">
                            {NAVIGATION_ITEMS_BAR.map((tab) => (
                                <IconTabButton
                                    key={tab.id}
                                    selectedIcon={selectedIcon}
                                    setSelectedIcon={setSelectedIcon}
                                    tab={tab}
                                />
                            ))}
                        </div>
                    </FantasyLabelInput>



                    <FantasyLabelInput label="Número de jugadores">
                        <FantasyContainerInput error={errors.players?.message}>
                            <FantasyInputField
                                placeholder="00"
                                {...register("players", validationCreateLeague.players)}
                            />
                        </FantasyContainerInput>
                        <span className="font-body-normal-regular pt-1">Max 100</span>
                    </FantasyLabelInput>
                    <FantasyLabelInput label="Fecha de Inicio de Liga">
                        <FantasyContainerInput disabled>
                            <FantasyInputField placeholder="01" disabled />
                        </FantasyContainerInput>
                        <span className="font-body-normal-regular pt-1 text-neutral-300">
                            Fecha Actual: Semana 1
                        </span>
                    </FantasyLabelInput>
                    <FantasyLabelInput label="Fecha Torneo">
                        <FantasyContainerInput disabled>
                            <FantasyInputField placeholder="16" disabled />
                        </FantasyContainerInput>
                    </FantasyLabelInput>
                </form>
            </FantasyModal>
            <AnimatePresence>
                {
                    modalSuccess &&
                    <LeagueCreationSuccessModal
                        isOpen={modalSuccess}
                        onClose={()=>setModalSuccess(false)}
                    />
                }
            </AnimatePresence>
        </>
    )
}
