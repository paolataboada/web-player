import { useState } from 'react';
import user from "@public/svg/user.svg";

const ColorPalette = () => {
    const [selectedColor, setSelectedColor] = useState('blue-500');

    const colors = [
        { name: 'blue-500', class: 'bg-blue-500' },
        { name: 'violet-500', class: 'bg-violet-500' },
        { name: 'pink-500', class: 'bg-pink-500' },
        { name: 'red-500', class: 'bg-red-500' },
        { name: 'orange-500', class: 'bg-orange-500' },
        { name: 'green-500', class: 'bg-green-500' }
    ];

    const handleColorSelect = (colorName: string) => {
        setSelectedColor(colorName);
    };

    return (
        <div className="w-full max-w-[427px] h-[225px] flex flex-col justify-between">
            <div className="h-[87px] flex flex-col justify-between">
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
                    <div className="h-[62px] flex justify-between items-center">
                        <div className={`w-[62px] min-w-[62px] h-[62px] bg-${selectedColor} rounded-full flex justify-center items-center transition-colors duration-300 `}>
                            <img src={user} className="w-[38px] h-[38px]" />
                        </div>
                        <div className="w-[340px] h-8 flex justify-between">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    className={`w-8 h-8 rounded-full ${color.class} cursor-pointer transition-all duration-500 ${
                                        selectedColor === color.name 
                                        ? 'outline-[2.5px] outline-offset-[-2.5px] outline-white' 
                                        : ''
                                    }`}
                                    onClick={() => handleColorSelect(color.name)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPalette;