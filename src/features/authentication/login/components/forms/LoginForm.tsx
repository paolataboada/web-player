import IconShirt from "@public/svg/shirt.svg";
import IconCheck from "@public/svg/check.svg";
import "../../../../../index.css";

const LoginForm = () => {
    return (
        <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
                <button
                    className="w-full h-[100px] 
                       rounded-tl-[20px] rounded-tr-[6px] rounded-br-[20px] border border-neutral-400 bg-neutral-900
                       flex items-center justify-center"
                >
                    <img src={IconShirt} alt="Alianza Lima" className="w-16 h-16" />
                </button>
                <span className="font-body-normal-medium">Alianza Lima</span>
            </div>

            <div className="flex flex-col items-center gap-2 relative">
                <button
                    className="w-full h-[100px] 
                    rounded-tl-[20px] rounded-tr-[6px] rounded-br-[20px] rounded-bl-[6px]
                    btn-gradient-border
                    flex items-center justify-center
                    relative
                    custom-shadow"
                >
                    <img src={IconCheck} alt="Check" className="absolute -top-2 -right-2 w-5 h-5" />
                    <img src={IconShirt} alt="Alianza Lima" className="w-16 h-16" />
                </button>
                <span className="font-body-normal-medium">Alianza Lima</span>
            </div>

        </div>
    );
};

export default LoginForm;