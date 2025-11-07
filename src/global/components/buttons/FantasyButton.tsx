import React from "react";
import lottieLoader from "../../assets/lotties/loading-animation.json";
import Lottie from "react-lottie";

type TFantasyButtonVariant = "primary" | "secondary" | "red" | "neutral";
type TFantasyButtonSize = "sm" | "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: TFantasyButtonVariant;
    size?: TFantasyButtonSize;
    loading?: boolean;
    className?: string;
}

const FantasyButton = ({ variant, size = "md", loading, children, className, ...props }: Props) => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieLoader,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <button
            className={cn("transition-all duration-500 rounded-[16px_6px]",
                { // Size
                    sm: "font-action-small text-center h-10 py-[13px] px-4",
                    md: "font-action-normal text-center h-12 py-4 px-4",
                    lg: "font-action-large text-center h-14 py-[19px] px-4",
                }[size],
                { // Variant
                    primary: cn(
                        loading
                            ? "bg-primary-600 pointer-events-none"
                            : props.disabled
                                ? "bg-neutral-500 text-neutral-300 cursor-not-allowed"
                                : `bg-[radial-gradient(160.48%_74.31%_at_100%_100%,var(--color-secondary-500)_0%,var(--color-primary-500)_100%)]
                                text-neutral-50 cursor-pointer
                                shadow-[0_0_16px_0_var(--color-secondary-700),0_0_24px_0_rgba(255,255,255,0.40)_inset]
                                hover:bg-[radial-gradient(160.48%_74.31%_at_100%_100%,var(--color-primary-500)_0%,var(--color-secondary-500)_100%)]
                                hover:shadow-[0_0_16px_0_var(--color-secondary-700),0_0_24px_0_rgba(255,255,255,0.40)_inset]
                                active:bg-primary-600 active:hover:shadow-none`,
                    ),

                    secondary: cn(
                        loading
                            ? "bg-neutral-300 pointer-events-none"
                            : props.disabled
                                ? "bg-neutral-500 cursor-not-allowed"
                                : `bg-neutral-900 
                                text-neutral-50 cursor-pointer
                                shadow-[inset_0_0_0_1px_var(--color-neutral-400)]
                                hover:bg-neutral-400 hover:shadow-none
                                active:bg-neutral-300 active:hover:shadow-none`
                    ),

                    red: cn(
                        loading
                            ? "bg-red-500 pointer-events-none"
                            : props.disabled
                                ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                                : `bg-red-50 rounded-xl
                                text-red-500 cursor-pointer
                                shadow-none
                                hover:bg-red-200 hover:text-red-50
                                active:bg-red-500 active:text-red-50`
                    ),

                    neutral: cn(
                        loading
                            ? "bg-neutral-400 pointer-events-none"
                            : props.disabled
                                ? "bg-neutral-500 text-neutral-300 cursor-not-allowed"
                                : `bg-neutral-500 
                                text-neutral-300 cursor-pointer
                                shadow-none
                                hover:bg-neutral-400 hover:text-neutral-200
                                active:bg-neutral-600`
                    ),
                }[variant],
                className,
            )}
            {...props}
        >
            {loading
                ? <Lottie options={lottieOptions} height={19} width={19} />
                : children
            }
        </button>
    );
};

const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");

export default FantasyButton;