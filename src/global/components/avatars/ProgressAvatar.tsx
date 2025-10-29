import IconUser from "@global/assets/svg/user.svg?react";
import GradientButton from "../buttons/GradientButton";

interface Props {
    progress: number;
    size?: number;
}

export const ProgressAvatar = ({ progress, size = 48 }: Props) => {
    const strokeWidth = 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div
            style={{ width: size, height: size }}
            className="relative flex items-center justify-center">
            {/* SVG del borde progresivo */}
            <svg
                width={size}
                height={size}
                style={{ position: "absolute", top: 0, left: 0 }}
                className="-rotate-90">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                        <stop offset="0%" stopColor="var(--color-primary-500)" />
                        <stop offset="100%" stopColor="var(--color-secondary-500)" />
                    </linearGradient>
                </defs>

                {/* Borde de fondo (gris) */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="var(--color-neutral-400)"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Borde de progreso */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="url(#gradient)"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Círculo central con ícono */}
            <div className="h-[38px] w-[38px] flex items-center justify-center rounded-full bg-linear-to-r from-primary-700 to-secondary-900">
                <IconUser className="h-6 w-6" />
            </div>

            {/* Número (badge) */}
            <div className="absolute bottom-0 right-0">
                <GradientButton className="grid bg-neutral-900 h-5 min-w-5 py-0.5! px-[3px]!">
                    <span className="font-body-extrasmall-medium">{progress}</span>
                </GradientButton>
            </div>
        </div>
    );
};
