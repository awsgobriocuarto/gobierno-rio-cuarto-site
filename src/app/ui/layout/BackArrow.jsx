"use client";
import { useRouter, usePathname } from "next/navigation";

export default function BackArrow() {
    const router = useRouter();
    const pathname = usePathname();

    // No mostrar en la página principal
    if (pathname === "/") return null;

    return (
        <button
            className="back-arrow"
            type="button"
            onClick={() => router.back()}
            aria-label="Volver atrás"
            title="Volver atrás"
        >
            <i className="fa-solid fa-arrow-left"></i>
        </button>
    );
}
