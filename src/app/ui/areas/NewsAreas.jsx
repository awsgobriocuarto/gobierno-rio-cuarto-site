import React from 'react'
import RelatedNews from '../news/RelatedNews';

export default function NewsAreas({ area }) {
  //console.log(area);
  return (
    <div>
      <RelatedNews
        areaId={area.id}
        page={1}
        limit={6}
        title="Últimas Noticias"
      />
    </div>
  )
}
