import { useState } from 'react';
import { format, setYear } from "date-fns";
import IconArrow from "@global/assets/icons/shared/arrow-left.svg?react";
import { DatePicker, type DatePickerProps } from '@mui/x-date-pickers/DatePicker';

interface Props {
    label?: string;
    value?: string;
    onChange: (value: string) => void;
    error?: string;
}

const AuthDatePickerInput = ({ label, value, onChange, error }: Props) => {
    const [openPickers, setOpenPickers] = useState({
        day: false,
        month: false,
        year: false,
    });

    const baseInputStyles = {
        "& .MuiPickersOutlinedInput-notchedOutline": {
            border:
                error
                    ? "1px var(--color-red-500) solid !important"
                    : "1px var(--color-neutral-500) solid !important",
        },
        "& .MuiPickersInputBase-root, & .MuiInputBase-root": {
            borderRadius: "16px",
            paddingRight: "16px",
            height: "48px",
            backgroundColor: "var(--color-neutral-500)",
        },
        "& .MuiInputBase-input": {
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "16px",
        },
    };

    const getSlotProps = (key: "day" | "month" | "year"): DatePickerProps<true>["slotProps"] => ({
        openPickerButton: {
            sx: {
                "& svg": {
                    width: "24px",
                    height: "24px",
                    transition: "transform 0.3s ease",
                    transform: openPickers[key] ? "rotate(90deg)" : "rotate(-90deg)",
                },
            },
        },
        openPickerIcon: {
            className: "w-6 h-6",
        },
        textField: { sx: baseInputStyles },
    });

    const maxDate = setYear(new Date(), 2030);
    const dateValue = value ? new Date(value) : null;

    const handleChange = (date: Date | null) => {
        const formatted = date ? format(date, "yyyy-MM-dd") : "";
        onChange(formatted);
    };

    return (
        <div className='grid gap-1.5'>
            {label && <label className="font-body-normal-regular text-neutral-50">{label}</label>}
            <div className="grid grid-cols-3 place-content-start gap-2">
                <DatePicker
                    views={["day"]}
                    value={dateValue}
                    maxDate={maxDate}
                    onChange={handleChange}
                    onOpen={() => setOpenPickers((p) => ({ ...p, day: true }))}
                    onClose={() => setOpenPickers((p) => ({ ...p, day: false }))}
                    slots={{ openPickerIcon: IconArrow }}
                    slotProps={getSlotProps("day")}
                />
                <DatePicker
                    views={["month"]}
                    value={dateValue}
                    maxDate={maxDate}
                    format="MM"
                    slotProps={{
                        ...getSlotProps("month"),
                        textField: {
                            ...getSlotProps("month")?.textField,
                            placeholder: "MM",
                        },
                    }}
                    onChange={handleChange}
                    onOpen={() => setOpenPickers((p) => ({ ...p, month: true }))}
                    onClose={() => setOpenPickers((p) => ({ ...p, month: false }))}
                    slots={{ openPickerIcon: IconArrow }}
                />
                <DatePicker
                    views={["year"]}
                    value={dateValue}
                    maxDate={maxDate}
                    format="yyyy"
                    slotProps={{
                        ...getSlotProps("year"),
                        textField: {
                            ...getSlotProps("year")?.textField,
                            placeholder: "AAAA",
                        },
                    }}
                    onChange={handleChange}
                    onOpen={() => setOpenPickers((p) => ({ ...p, year: true }))}
                    onClose={() => setOpenPickers((p) => ({ ...p, year: false }))}
                    slots={{ openPickerIcon: IconArrow }}
                />
            </div>
            {error?.trim() && <p className="font-body-small-regular text-red-500">{error}</p>}
        </div>
    );
};

export default AuthDatePickerInput