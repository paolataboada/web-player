import IconCheck from "@global/assets/icons/status/status-check.svg";
import IconEquis from "@global/assets/icons/status/status-wrong.svg";

interface Props {
    rules: { key: string; text: string; valid: boolean }[];
    getBarColor: () => string;
    getProgressWidth: () => string;
}

export const PasswordStrength = ({ rules, getBarColor, getProgressWidth }: Props) => {
    return (
        <div className="grid gap-4">
            <div className="h-1.5 w-full bg-neutral-500 rounded-sm overflow-hidden">
                <div
                    className="h-full transition-all duration-400 ease-out"
                    style={{ width: getProgressWidth(), backgroundColor: getBarColor() }}
                />
            </div>

            <div className="grid gap-2">
                <p className="font-body-normal-medium text-neutral-50">
                    Introduce una contraseña. Debe contener:
                </p>
                <ul className="grid gap-1">
                    {rules.map((rule) => (
                        <li
                            key={rule.key}
                            className={`flex items-center gap-2 font-body-normal-regular 
                            ${rule.valid ? "text-green-500" : "text-neutral-300"}`}>
                            <img src={rule.valid ? IconCheck : IconEquis} alt="Status Icon" />
                            {rule.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
