import bannerPrivate from "@global/assets/banners/banner-private.png";
import FantasyInputField from "@global/components/elements/FantasyInputField";
import FantasyLabelInput from "@global/components/elements/FantasyLabelInput";
import FantasyContainerInput from "@global/containers/FantasyContainerInput";
import MotionContainer from "@global/containers/MotionContainer";
import { PublicityBanner } from "@global/containers/PublicityBanner";
import { validationCreateLeague } from "../validations/create-league.validation";
import { NAVIGATION_ITEMS_BAR } from "@global/constants/navigation-items-bar";
import { useState } from "react";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { TFormCreateLeague } from "../components/modal/config/CreateLeagueModal";
import { useNavigate } from "react-router-dom";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { IconTabButton } from "../elements/IconTabButton";

export const CreateLeaguePage = () => {

    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    const handleError = useHandlerError();
    const navigate = useNavigate();
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
            navigate(-1)
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <MotionContainer>
            <PublicityBanner src={bannerPrivate} />

            <section className="grid gap-6 py-2 mt-4">
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

                    <div className="flex w-full gap-6">
                        <FantasyButton variant="secondary" size="md" onClick={() => navigate(-1)} className="w-full">
                            Volver
                        </FantasyButton>
                        <FantasyButton variant="primary" size="md" onClick={handleSubmit(onSubmit)} disabled={!isDirty} className="w-full">
                            Crear Liga
                        </FantasyButton>
                    </div>
                </form>
            </section>
        </MotionContainer>
    )
}
