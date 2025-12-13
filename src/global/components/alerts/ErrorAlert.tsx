import { useEffect, useRef } from "react";
import CloseIcon from "../../assets/icons/modals/xmark.svg?react";

interface Props {
    title?: string;
    message: string;
    onClose?: () => void;
}

const ErrorAlert = ({ title = "Error", message, onClose }: Props) => {
    const alertRef = useRef<HTMLDivElement>(null);

    useEffect(() => alertRef.current?.focus(), []);

    return (
        <div
            ref={alertRef}
            tabIndex={-1}
            role="alert"
            className="bg-[#260004] rounded-xl flex justify-between items-center gap-4 py-2.5 px-3">
            <div className="grid gap-0.5">
                <p className="font-body-normal-medium text-red-200">
                    {title}
                </p>
                <p className="font-body-small-regular text-red-50">
                    {message}
                </p>
            </div>
            {onClose &&
                <CloseIcon className="h-4 w-4 min-w-4 cursor-pointer" onClick={onClose} />
            }
        </div>
    )
}

export default ErrorAlert