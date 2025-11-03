import { fetchAreaBySlug, fetchAreas } from '@/app/lib/DataAreas';
import { fetchEntries } from '@/app/lib/DataEntries';
import EntriesList from '@/app/ui/entries/EntriesList'
import HeaderSection from '@/app/ui/layout/HeaderSection'
import FormNews from '@/app/ui/news/FormNews';
import React from 'react'

export default async function Entries({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 9;
  const areaSlug = searchParams?.area ? searchParams?.area : "";

  const [areas, area] = await Promise.all([
    fetchAreas(),
    // Solo se ejecuta fetchAreaBySlug si hay un filtro de área
    areaSlug ? fetchAreaBySlug(areaSlug) : Promise.resolve(null),
  ]);

  console.log(area);


  const subtitle = area ? `${area.name}` : `general`;
  return (
    <div className="entries">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <HeaderSection title="Entries" subtitle={subtitle} />
          </div>
          <div className="col-md-6">
            <FormNews
              options={areas}
              paramName="area"
              placeholder="Todos las entradas"
              subtitle={subtitle}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <EntriesList type="program" area={area} title="Programas y Servicios" />
          </div>
          <div className="col-md-4">
            <EntriesList type="other" area={area} title="Otros" />
          </div>
          <div className="col-md-4">
            <EntriesList type="map" area={area} title="Mapas" />
          </div>
        </div>



      </div>
    </div>
  )
}
