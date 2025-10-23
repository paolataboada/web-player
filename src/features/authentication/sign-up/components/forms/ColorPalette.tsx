import user from "../../../../../../public/svg/user.svg";
import edit from "../../../../../../public/svg/edit.svg";

const ColorPalette = () => {
    return (
        <div className="w-full max-w-[427px] h-[225px] flex flex-col justify-between ">
            <div className="h-[87px] flex flex-col justify-between ">
                <h3 className="h3 text-neutral-50 pt-[9px] h-8 text-center ">Crea tu cuenta</h3>
                <div className="h-[30px] flex flex-col p-0 m-0 justify-between">
                    <div className="steps h-1 p-0 m-0 flex justify-between gap-2">
                        <div className="current-step w-[136px] h-1 rounded-sm bg-green-500"></div>
                        <div className="next-step w-[136px] h-1 rounded-sm bg-neutral-200"></div>
                        <div className="last-step w-[136px] h-1 rounded-sm bg-neutral-500" ></div>
                    </div>
                    <p className="text-body-normal-regular text-neutral-200 h-[18px] text-center flex justify-center items-center ">Paso 2 de 3: Personaliza tu cuenta</p>
                </div>
            </div>
            <div className="h-[106px]">
                <div className="h-[88px] flex flex-col justify-between">
                    <p className="text-body-normal-regular h-[18px] text-neutral-50 flex flex-col justify-center">Personaliza tu Avatar</p>
                    <div className="h-[62px] flex justify-between items-center ">
                        <div className="w-[62px] min-w-[62px] h-[62px] bg-violet-500 rounded-full flex justify-center items-center ">
                            <img src={user} className="w-[38px] h-[38px]" />
                        </div>
                        <div className="w-[25.5px] h-[25.5px] bg-neutral-900 relative rounded-full flex justify-center items-center top-[21px] right-5">
                            <img src={edit} className="w-4 h-4" />
                        </div>
                        <div className="w-[352px] h-8 flex justify-between ">
                            <div className="colors w-8 h-8 rounded-full bg-blue-500 "></div>
                            <div className="colors w-8 h-8 rounded-full bg-violet-500 outline-[2.5px] outline-offset-[-2.5px] "></div>
                            <div className="colors w-8 h-8 rounded-full bg-pink-500 "></div>
                            <div className="colors w-8 h-8 rounded-full bg-red-500 "></div>
                            <div className="colors w-8 h-8 rounded-full bg-orange-500 "></div>
                            <div className="colors w-8 h-8 rounded-full bg-green-500 "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPalette