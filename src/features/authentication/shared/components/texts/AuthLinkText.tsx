interface Props {
    loading?: boolean;
    text?: string;
    linkText: string;
    onClick: () => void;
    className?: string;
}

export const AuthLinkText = ({ loading, text, linkText, onClick, className }: Props) => (
    <p className={`font-body-normal-regular text-center ${className ? className : ""}`}>
        {text ? `${text} ` : ""}
        <button type="button" onClick={onClick} disabled={loading} className="font-body-normal-medium hover:cursor-pointer">
            {linkText}
        </button>
    </p>
)
