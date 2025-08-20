import { teamMembers } from "@/app/lib/DataAreas"; // Importa teamMembers
import Image from "next/image";

export default function IntitutionalAreas({ area }) {
  const areaTeam = teamMembers.filter((member) => member.areaId === area.id);

  return (
    <div className="area-institutional">
      <h4>Institucional</h4>
      <div className="row">
        {areaTeam.length > 0 ? (
          areaTeam.map((member) => (
            <div key={member.id} className="col-6 mb-4">
              <div className="card">
                <div className="card-img-top">
                  {member.photo && (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                    />
                  )}
                </div>
                <div className="card-body">
                  <h3 className="card-title">{member.name}</h3>
                  <h4 className="card-subtitle">{member.role}</h4>
                </div>
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
  )
}
