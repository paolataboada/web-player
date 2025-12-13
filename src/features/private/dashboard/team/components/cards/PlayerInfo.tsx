import kitIcon from "@global/assets/icons/card/kit-icon.svg";

interface Props {
    player: {
        fullName: string
        teamShirt: string
        status: string
    }
}

export const PlayerInfo = ({ player }: Props) => {
    return (
        <div className="grid grid-cols-[44px_1fr_32px] gap-3 items-center">
            <img
                src={player.teamShirt}
                alt={player.fullName}
            />
            <div>
                <p className="font-body-large-medium">
                    {player.fullName}
                </p>
                <p className="font-body-normal-regular">
                    {player.status}
                </p>
            </div>
            <div
                className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                <img src={kitIcon} />
            </div>
        </div>
    )
}
