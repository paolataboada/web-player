import warningIcon from "@global/assets/icons/card/warning-yellow.svg"
interface Props {
    text: string;
}

export const WarningTag = ({ text }: Props) => {
    return (
        <div
            className="bg-orange-900 rounded-3xl w-full py-2
            flex items-center justify-center gap-1.5"
        >
            <img src={warningIcon} />
            <p className="font-body-small-medium">
                {text}
            </p>
        </div>
    )
}
