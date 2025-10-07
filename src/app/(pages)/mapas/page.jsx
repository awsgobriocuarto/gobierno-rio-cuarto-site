import ListMaps from "@/app/ui/maps/ListMaps";
import React from "react";

export const metadata = {
  title: "Mapas",
  description: "Mapas del Gobierno de Río Cuarto",
};

export default function Mapas() {
  return (
    <div>
      <h1>Mapas Rio Cuarto</h1>
      <ListMaps />
    </div>
  );
}
