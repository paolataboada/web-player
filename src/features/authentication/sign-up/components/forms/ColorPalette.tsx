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
        <div className="grid gap-2 mt-8">
            <p className="font-body-normal-regular text-neutral-50">Personaliza tu Avatar</p>
            <div className="flex justify-between items-center gap-5">
                <div className={`w-[62px] min-w-[62px] h-[62px] bg-${selectedColor} rounded-full flex justify-center items-center transition-colors duration-300`}>
                    <img src={user} className="w-[38px] h-[38px]" />
                </div>
                <div className="flex flex-wrap justify-between items-center gap-2 w-full">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            className={`w-8 h-8 rounded-full ${color.class} cursor-pointer transition-all duration-500
                            ${selectedColor === color.name
                                ? 'outline-[2.5px] outline-offset-[-2.5px] outline-white'
                                : ''
                            }`}
                            onClick={() => handleColorSelect(color.name)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColorPalette;