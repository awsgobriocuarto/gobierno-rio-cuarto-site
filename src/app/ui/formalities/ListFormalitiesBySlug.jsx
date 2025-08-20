import React from 'react'

export default function ListFormalitiesBySlug({ area }) {
  return (
    <div>
      <h2>ListFormalitiesBySlug</h2>
      <p>{area ? area.title : "no hay area"}</p>
    </div>
  )
}
