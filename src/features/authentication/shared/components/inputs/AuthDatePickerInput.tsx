import { useEffect, useState } from 'react';
import { endOfYear, setYear, startOfYear } from "date-fns";
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

    const initialYear = value ? Number(value.slice(0, 4)) : null;
    const initialMonth = value ? Number(value.slice(5, 7)) : null;
    const initialDay = value ? Number(value.slice(8, 10)) : null;

    const [day, setDay] = useState<number | null>(initialDay);
    const [month, setMonth] = useState<number | null>(initialMonth);
    const [year, setYearState] = useState<number | null>(initialYear);

    useEffect(() => {
        if (year && month && day) {
            const formatted = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            onChange(formatted);
        } else {
            onChange("");
        }
    }, [day, month, year, onChange]);

    const baseInputStyles = {
        "& .MuiPickersOutlinedInput-notchedOutline": {
            border:
                error
                    ? "1px var(--color-red-500) solid !important"
                    : "1px var(--color-neutral-500) solid !important",
            boxShadow:
                error
                    ? "0 0 12px 0 var(--color-red-800) !important"
                    : "none",
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

    const maxDate = endOfYear(setYear(new Date(), 2025));
    const dateValue = value
        ? new Date(Number(value.slice(0, 4)), Number(value.slice(5, 7)) - 1, Number(value.slice(8, 10)))
        : null;
    const selectedYear = dateValue ? dateValue.getFullYear() : new Date().getFullYear();

    return (
        <div className='grid gap-1.5'>
            {label && <label className="font-body-normal-regular text-neutral-50">{label}</label>}
            <div className="grid grid-cols-3 place-content-start gap-2">
                <DatePicker
                    views={["day"]}
                    value={day ? new Date(2025, 0, day) : null}
                    minDate={startOfYear(new Date(selectedYear, 0, 1))}
                    maxDate={endOfYear(new Date(selectedYear, 11, 31))}
                    onChange={(d) => setDay(d ? d.getDate() : null)}
                    onOpen={() => setOpenPickers((p) => ({ ...p, day: true }))}
                    onClose={() => setOpenPickers((p) => ({ ...p, day: false }))}
                    slots={{ openPickerIcon: IconArrow }}
                    slotProps={getSlotProps("day")}
                />
                <DatePicker
                    views={["month"]}
                    value={month ? new Date(2025, month - 1, 1) : null}
                    maxDate={maxDate}
                    format="MM"
                    slotProps={getSlotProps("month")}
                    onChange={(d) => setMonth(d ? d.getMonth() + 1 : null)}
                    onOpen={() => setOpenPickers((p) => ({ ...p, month: true }))}
                    onClose={() => setOpenPickers((p) => ({ ...p, month: false }))}
                    slots={{ openPickerIcon: IconArrow }}
                />
                <DatePicker
                    views={["year"]}
                    value={year ? new Date(year, 0, 1) : null}
                    maxDate={maxDate}
                    format="yyyy"
                    slotProps={getSlotProps("year")}
                    onChange={(d) => setYearState(d ? d.getFullYear() : null)}
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