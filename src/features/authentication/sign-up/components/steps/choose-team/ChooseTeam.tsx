import IconShirt from "@public/svg/shirt.svg";
import IconCheck from "@public/svg/check.svg";
import "../../.././../../../index.css";

const ChooseTeam = () => {
    return (
        <div className="w-full max-w-[427px] h-[225px] flex flex-col justify-between">
            <div className="h-[87px] flex flex-col justify-between">
                <h3 className="h3 text-neutral-50 pt-[9px] h-8 text-center ">Crea tu cuenta</h3>
                <div className="h-[30px] flex flex-col p-0 m-0 justify-between">
                    <div className="steps h-1 p-0 m-0 flex justify-between gap-2">
                        <div className="current-step w-[136px] h-1 rounded-sm bg-green-500"></div>
                        <div className="next-step w-[136px] h-1 rounded-sm bg-neutral-200"></div>
                        <div className="last-step w-[136px] h-1 rounded-sm bg-neutral-500"></div>
                    </div>
                    <p className="text-body-normal-regular text-neutral-200 h-[18px] text-center flex justify-center items-center ">
                        Paso 3 de 3: Elige tu equipo favorito
                    </p>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <div className="flex flex-col items-center gap-2">
                    <button
                        className="w-full h-[100px] 
                       rounded-tl-[20px] rounded-tr-md rounded-br-[20px] border border-neutral-400 bg-neutral-900
                       flex items-center justify-center"
                    >
                        <img src={IconShirt} alt="Alianza Lima" className="w-16 h-16" />
                    </button>
                    <span className="font-body-normal-medium">Alianza Lima</span>
                </div>

                <div className="flex flex-col items-center gap-2 relative">
                    <button
                        className="w-full h-[100px] 
                        rounded-tl-[20px] rounded-tr-md rounded-br-[20px] rounded-bl-md
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
        </div>
    )
}

export default ChooseTeam