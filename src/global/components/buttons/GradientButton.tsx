import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    className?: string;
}

const GradientButton = ({ children, className }: Props) => {
    return (
        <button className="bg-linear-130 from-primary-500/60 via-neutral-500 to-secondary-600 rounded-full h-fit p-px">
            <div
                className={`flex items-center gap-1 bg-linear-to-br from-primary-500/10 to-neutral-900
                rounded-full py-2 px-2 sm:py-3 sm:px-5 sm:gap-2 ${className ? className : ""}`}>
                {children}
            </div>
        </button>
    )
}

export default GradientButton