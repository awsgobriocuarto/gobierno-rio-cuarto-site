"use client";
import { useRouter } from "next/navigation";

export default function LinkToBack({ variant = "btn-primary", text = "Volver" }) {
  const router = useRouter();

  return (
    <button
      className={`btn ${variant}`}
      type="button"
      data-track="back_click"
      data-source="button"
      onClick={router.back}
    >
      {text}
    </button>
  );
}
