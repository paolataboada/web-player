interface Props {
    text?: string;
    linkText: string;
    onClick: () => void;
    className?: string;
}

export const AuthLinkText = ({ text, linkText, onClick, className }: Props) => (
    <p className={`font-body-normal-regular text-center ${className ? className : ""}`}>
        {text ? `${text} ` : ""}
        <button onClick={onClick} className="font-body-normal-medium hover:cursor-pointer">
            {linkText}
        </button>
    </p>
)
