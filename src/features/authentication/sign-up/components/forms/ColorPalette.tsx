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
        <div className="w-full max-w-[427px] flex flex-col justify-between mt-6">
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