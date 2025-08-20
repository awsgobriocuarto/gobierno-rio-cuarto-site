import React from 'react'

export default function ProgramsAreas({ area }) {
  return (
    <section className='area-programs'>
      <h2>ProgramsAreas</h2>
      <p>{area ? area.title : "no hay area"}</p>
    </section>
  )
}
