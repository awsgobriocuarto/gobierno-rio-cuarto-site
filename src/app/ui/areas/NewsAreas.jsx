import React from 'react'
import RelatedNews from '../news/RelatedNews';

export default function NewsAreas({ area }) {
  //console.log(area);
  return (
    <div>
      <RelatedNews detailNews={area} text="Últimas Noticias" />
    </div>
  )
}
