import type { INavigationItemBar } from "@global/constants/navigation-items-bar";

interface Props {
    selectedIcon: string | null
    setSelectedIcon: (selectedIcon: string) => void
    tab: INavigationItemBar
}

export const IconTabButton = ({ selectedIcon, setSelectedIcon, tab }: Props) => {
    const isActive = selectedIcon === tab.id;

    return (
        <button
            key={tab.id}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedIcon(tab.id) }}
            className={`
                                        relative flex justify-center items-center rounded-full p-2 cursor-pointer
                                        transition-colors duration-200 bg-transparent
                                        ${isActive && "bg-linear-to-br from-primary-500 to-secondary-500/80"}`
            }
        >
            <tab.iconFilled />
        </button>
    );
}
