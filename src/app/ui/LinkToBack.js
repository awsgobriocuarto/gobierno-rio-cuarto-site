"use client";
import { useRouter } from "next/navigation";

export default function LinkToBack({ variant = "btn-primary", text = "Volver" }) {
  const router = useRouter();

  return (
    <button className={`btn ${variant}`} type="button" onClick={router.back}>
      {text}
    </button>
  );
}
