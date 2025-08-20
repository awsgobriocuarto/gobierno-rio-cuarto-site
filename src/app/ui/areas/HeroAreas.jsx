

export default function HeroAreas({ area }) {

  // Filtra los miembros del equipo que pertenecen a esta área

  if (!area) return ('no hay area')

  return (
    <section className='area-hero'>
      <div className="container">
        <h2>{area ? area.title : "no hay area"}</h2>
        <p className='lead mb-4'>{area ? area.description : "no hay area"}</p>
        <h4 className="mb-3">Información Básica</h4>
        <div>
          Direccion: {area.address ? area.address : "no hay direcciopn"}<br />
          Telefono: {area.phone ? area.phone : "no hay telefono"}<br />
          Email: {area.email ? area.email : "no hay email"}<br />
          Web: {area.web ? area.web : "no hay web"}<br />
          Horario: {area.schedule ? area.schedule : "no hay horario"}<br />
        </div>
      </div>
    </section>
  )
}
