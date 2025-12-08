import FantasyInputField from "@global/components/elements/FantasyInputField";
import FantasyLabelInput from "@global/components/elements/FantasyLabelInput";
import FantasyModal from "@global/components/modals/FantasyModal";
import FantasyContainerInput from "@global/containers/FantasyContainerInput";
import { EModalType } from "@global/enums/modal.type.enum";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useForm, type SubmitHandler } from "react-hook-form";
import { validationCreateLeague } from "../validations/create-league.validation";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export type TFormCreateLeague = Partial<Pick<ILeague, "name" | "players">>;

export const CreateLeagueModal = ({ isOpen, onClose }: Props) => {

    const handleError = useHandlerError();
    //const { editLeagueService } = useLeaguesActionsServices();

    const { register, handleSubmit, formState: { errors, isDirty }} = useForm<TFormCreateLeague>({ mode: "onChange" });

    const onSubmit: SubmitHandler<TFormCreateLeague> = async (form) => {
        try {
            // await editLeagueService({
            //     name: form.name ?? "",
            //     players: form.players ?? 0,
            // });

            //updateListLeague();
            onClose();
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <FantasyModal
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleSubmit(onSubmit)}
            type={EModalType.CREATE}
            className="text-center grid place-items-center"
            disabledAccept={!isDirty}
        >
            <h3> ¡Crea tu propia liga! </h3>
            <p>¡Demuestra tus habilidades y lidera tu propia liga! </p>
            <form>
                <FantasyLabelInput label="Nombre">
                    <FantasyContainerInput error={errors.name?.message}>
                        <FantasyInputField
                            placeholder="Nombre"
                            {...register("name", validationCreateLeague.name)}
                        />
                    </FantasyContainerInput>
                </FantasyLabelInput>
            </form>
        </FantasyModal>
    )
}
