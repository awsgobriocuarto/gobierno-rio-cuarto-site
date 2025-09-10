import React from 'react'

export default function RelatedNews({ detailNews }) {
  const {
    id,
    category_name,
    category_slug,
    category_id,
  } = detailNews;

  return (
    <div>
      <h3>Noticias Relacionadas</h3>
      <ul>
        <li>{id}</li>
        <li>{category_id}</li>
        <li>{category_slug}</li>
        <li>{category_name}</li>
      </ul>
    </div>
  )
}
