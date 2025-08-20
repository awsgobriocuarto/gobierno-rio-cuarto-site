import React from 'react'

export default function NewsAreas({ area }) {
  return (
    <div>
      <h3>NewsAreas</h3>
      <p>{area ? area.title : "no hay area"}</p>
    </div>
  )
}
