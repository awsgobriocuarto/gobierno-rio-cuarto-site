import React from "react";
import { fetchEntries } from "@/app/lib/DataEntries";
import CardProgram from "./CardProgram";
import { fetchPrograms } from "@/app/lib/DataAreas";
export default async function ProgramsAreas({ area }) {
  //const programs = await fetchEntries("program", area?.id);

  const programs = await fetchEntries("program", area?.id);
  //console.log(programs);
  if (!programs || programs.length == 0) {
    return null;
  }

  return (
    <section className="section test" data-read>
      <div className="container">
        <h2 className="mb-4">
          Programas y Servicios de {area?.name || "el área"}
        </h2>

        <div className="row g-4">
          {programs.map((program) => (
            <div className="col-md-6" key={program.id}>
              <CardProgram program={program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
