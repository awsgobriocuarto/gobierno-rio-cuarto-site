import React from "react";
import { fetchEntries } from "@/app/lib/DataEntries";
import CardProgram from "./CardProgram";
export default async function ProgramsAreas({ area }) {

  //console.log(area.slug);

  const programs = await fetchEntries("program", area.id);

  const filteredPrograms = programs.filter(program => program.area_id === area.id);

  console.log(programs.length);


  if (!programs || programs.length == 0) {
    return null;
  }

  return (
    <section className="area-section" data-read>
      <h3 className="mb-4">
        Programas y Servicios ({programs.length})
      </h3>

      <div className="row g-4">
        {programs.map((program) => (
          <div className="col-md-6" key={program.id}>
            <CardProgram program={program} />
          </div>
        ))}
      </div>
    </section>
  );
}
