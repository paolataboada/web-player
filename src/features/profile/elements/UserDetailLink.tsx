import Arrow from "@global/assets/icons/shared/Arrow.svg";
import { Link } from "react-router-dom";

interface UserDetailLinkProps {
    icon: string;
    title: string;
    link: string;
}

const UserDetailLink = ({ icon, title, link }: UserDetailLinkProps) => {
    return (
        <Link
            to={link}
            className="w-[432px] h-[72px] opacity-100 p-0.5 gap-3 rounded-xl
            bg-linear-to-r from-primary-600 via-neutral-500 to-secondary-600/70"
        >
            <div
                className="w-full h-full rounded-xl pt-4 pr-2 pb-4 pl-2
                flex justify-center items-center bg-linear-110 from-primary-500/30 to-primary-700"
            >
                <div className="flex flex-row items-center gap-3 w-full px-2">
                    <img className="w-6 h-6" src={icon} alt={title}/>
                    <p className="text-neutral-50 font-body-normal-medium flex-1">{title}</p>
                    <div className="w-6 h-6">
                        <img className="w-6 h-6" src={Arrow} alt="Arrow"/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default UserDetailLink