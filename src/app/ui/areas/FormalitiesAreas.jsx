import React from 'react'

export default function FormalitiesAreas({ area }) {

  if (!area) return ('no hay area')

  return (
    <section className='area-formalities'>
      <div className="container">
        <h2>FormalitiesAreas</h2>
        <p>{area ? area.title : "no hay area"}</p>
      </div>
    </section>
  )
}
