"use client";
import { useEffect } from "react";
import { track } from "@/app/lib/track";

// Dispara un evento de OpenPanel una vez al montarse (útil desde server components).
export default function TrackEvent({ name, props = {} }) {
  const serialized = JSON.stringify(props);

  useEffect(() => {
    track(name, JSON.parse(serialized));
  }, [name, serialized]);

  return null;
}
