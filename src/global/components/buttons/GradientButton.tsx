import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    className?: string;
    onClick?: () => void;
}

const GradientButton = ({ children, className, onClick }: Props) => {
    return (
        <button
            className="bg-linear-to-r from-primary-600/50 via-neutral-500/20 to-secondary-600/60 rounded-full h-fit p-px"
            onClick={onClick}
        >
            <div
                className={`flex items-center gap-1 bg-linear-to-br from-primary-500/15 via-neutral-900 to-neutral-900 
                rounded-full py-2 px-2 md:py-3 md:px-5 md:gap-2 ${className ? className : ""}`}>
                {children}
            </div>
        </button>
    )
}

export default GradientButton;