import Arrow from "@global/assets/icons/shared/Arrow.svg"
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import plusBg from "@global/assets/backgrounds/bg-plus.png"

interface Props {
    title: string;
    to?: string;
    children?: ReactNode;
}

export const BreadCrumb = ({ title, to, children }: Props) => {
    return (
        <div
            className="bg-cover bg-center bg-neutral-900 w-full"
            style={{ backgroundImage: `url(${plusBg})` }}
        >
            <div
                className="w-full p-4 h-56px border-b border-neutral-500 relative">
                {to &&
                    <NavLink to={to ?? "#"}>
                        <img
                            src={Arrow}
                            alt="Regresar"
                            className="rotate-180! w-6
                            absolute top-3.5 left-4"
                        />
                    </NavLink>
                }
                <p className="font-body-large-medium text-center">
                    {title}
                </p>

            </div>
            {children &&
                <div className="w-full px-4 h-56px border-b border-neutral-500">
                    {children}
                </div>
            }
        </div>
    )
}
