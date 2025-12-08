interface Props {
    title: string;
    subtitle: string;
    icon?: string;
}

const HeaderForm = ({ title, subtitle, icon }: Props) => {
    return (
        <div className="grid place-content-center gap-3">
            {icon && <img src={icon} className="w-12 h-12 mx-auto" />}
            <div className="grid gap-2.5 w-full">
                <h2 className="text-center text-neutral-50">{title}</h2>
                <p className="font-body-normal-regular text-neutral-200 text-center">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default HeaderForm