// app/[slug]/page.js
import Image from "next/image";
import Link from "next/link"; // Para el botón de "Volver"
import { areas, teamMembers } from "@/app/lib/DataAreas"; // Importa teamMembers
import FormalitiesList from "@/app/ui/formalities/ListFormalities"; // Asumo que este componente ya maneja un array de trámites
// No necesitas ListNews si su contenido es manejado por FormalitiesList o no se muestra en esta página.

export default function AreaDetailPage({ params }) {
  const { slug } = params;

  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="container mt-5">
        <h1>Área no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link href="/" className="btn btn-primary mt-3">
          Volver a inicio
        </Link>
      </div>
    );
  }

  // Filtra los miembros del equipo que pertenecen a esta área
  const areaTeam = teamMembers.filter((member) => member.areaId === area.id);

  return (
    <div className="container-fluid mt-4">
      {" "}
      {/* Usa container-fluid para mayor ancho */}
      <div className="row">
        {/* Columna Izquierda: Contenido Principal (8 columnas en md) */}
        <div className="col-md-8">
          {/* Sección de Título e Información Básica */}
          <div className="bg-light p-4 mb-4 rounded shadow-sm">
            {" "}
            {/* Fondo claro como en la imagen */}
            {/* Si hay una imagen principal de área, la colocamos aquí */}
            {area.image && (
              <div className="mb-3 text-center">
                <Image
                  src={area.image}
                  alt={area.title}
                  width={50} // Ajusta el tamaño según tu diseño
                  height={50} // Ajusta el tamaño según tu diseño
                  layout="responsive" // Asegura que la imagen sea responsiva
                  objectFit="cover" // Cubre el espacio definido
                  className="rounded"
                />
              </div>
            )}
            <h1 className="mb-2">{area.title}</h1>
            <p className="lead">{area.description}</p>
            {area.basicInfo && (
              <div className="mt-4">
                <h4 className="mb-3">Información Básica</h4>
                <ul className="list-unstyled">
                  {" "}
                  {/* Sin viñetas */}
                  {area.basicInfo.map((info, index) => (
                    <li key={index} className="mb-1">
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sección de Trámites del Área */}
          <div className="mb-4">
            <h3 className="mb-3">TRÁMITES DEL ÁREA</h3>
            <FormalitiesList /> : (
            <p>No hay trámites disponibles para esta área.</p>)
          </div>

          {/* Botón de volver */}
          <div className="mt-5 text-center">
            <Link href="/" className="btn btn-primary">
              Volver a la lista de áreas
            </Link>
          </div>
        </div>

        {/* Columna Derecha: Sección Institucional (4 columnas en md) */}
        <div className="col-md-4">
          <div className="bg-dark text-white p-4 rounded shadow-sm">
            {" "}
            {/* Fondo oscuro como en la imagen */}
            <h4 className="mb-4 text-center">Institucional</h4>
            <div className="row">
              {areaTeam.length > 0 ? (
                areaTeam.map((member) => (
                  <div key={member.id} className="col-6 mb-4">
                    {" "}
                    {/* Dos columnas internas para los contactos */}
                    <div className="text-center">
                      {member.photo && (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="rounded-circle mb-2 border border-secondary"
                          objectFit="cover"
                        />
                      )}
                      <p className="mb-0 small">{member.name}</p>
                      <p className="text-muted small">{member.role}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p>No hay contactos institucionales para esta área.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Opcional: Generación de rutas estáticas (para SSG)
export async function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}
