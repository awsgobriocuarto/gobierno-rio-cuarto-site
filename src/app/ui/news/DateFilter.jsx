"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DateFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Extraer valores iniciales de la URL
    const [year, setYear] = useState(searchParams.get("year") || "");
    const [month, setMonth] = useState(searchParams.get("month") || "");
    const [day, setDay] = useState(searchParams.get("day") || "");

    useEffect(() => {
        setYear(searchParams.get("year") || "");
        setMonth(searchParams.get("month") || "");
        setDay(searchParams.get("day") || "");
    }, [searchParams]);

    const handleDateChange = (newYear, newMonth, newDay) => {
        const params = new URLSearchParams(searchParams);

        if (newYear) params.set("year", newYear);
        else params.delete("year");

        if (newMonth) params.set("month", newMonth);
        else params.delete("month");

        if (newDay) params.set("day", newDay);
        else params.delete("day");

        // Eliminamos el parámetro 'date' viejo si existiera
        params.delete("date");

        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => String(currentYear - i));
    const months = [
        { val: "01", name: "Enero" },
        { val: "02", name: "Febrero" },
        { val: "03", name: "Marzo" },
        { val: "04", name: "Abril" },
        { val: "05", name: "Mayo" },
        { val: "06", name: "Junio" },
        { val: "07", name: "Julio" },
        { val: "08", name: "Agosto" },
        { val: "09", name: "Septiembre" },
        { val: "10", name: "Octubre" },
        { val: "11", name: "Noviembre" },
        { val: "12", name: "Diciembre" },
    ];

    const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));

    return (
        <div className="date-filter-group d-flex gap-2">
            <select
                className="form-select form-select-sm"
                value={year}
                onChange={(e) => {
                    const val = e.target.value;
                    setYear(val);
                    handleDateChange(val, month, day);
                }}
            >
                <option value="">Año</option>
                {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                ))}
            </select>

            <select
                className="form-select form-select-sm"
                value={month}
                onChange={(e) => {
                    const val = e.target.value;
                    setMonth(val);
                    handleDateChange(year, val, day);
                }}
            >
                <option value="">Mes</option>
                {months.map((m) => (
                    <option key={m.val} value={m.val}>{m.name}</option>
                ))}
            </select>

            <select
                className="form-select form-select-sm"
                value={day}
                onChange={(e) => {
                    const val = e.target.value;
                    setDay(val);
                    handleDateChange(year, month, val);
                }}
            >
                <option value="">Día</option>
                {days.map((d) => (
                    <option key={d} value={d}>{d}</option>
                ))}
            </select>
        </div>
    );
}
