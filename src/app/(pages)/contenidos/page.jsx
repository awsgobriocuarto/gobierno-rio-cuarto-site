import { fetchAreaBySlug, fetchAreas } from '@/app/lib/DataAreas';
import { fetchEntries } from '@/app/lib/DataEntries';
import { fetchFormalities } from '@/app/lib/DataFormalities';
import { fetchPosts } from '@/app/lib/DataNews';
import ContentItemCard from '@/app/ui/Content/ContentItemCard';
import MoreButton from '@/app/ui/Content/MoreButton';
import HeaderSection from '@/app/ui/layout/HeaderSection'
import FormNews from '@/app/ui/news/FormNews';


export default async function AreasContent({ searchParams }) {
  const limit = 20;
  const areaSlug = searchParams?.area ? searchParams?.area : "";

  const cleanedSearchParams = Object.fromEntries(
    Object.entries(searchParams).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : String(value), // Toma el primer valor si es un array, o conviértelo a string
    ])
  );

  const urlParams = new URLSearchParams(cleanedSearchParams);
  const params = `?${urlParams}`;

  const [formalities, posts, programs, activities, maps, areas, area] = await Promise.all([
    fetchFormalities(params),
    fetchPosts({ limit, area: areaSlug }),
    fetchEntries("program", areaSlug),
    fetchEntries("other", areaSlug),
    fetchEntries("map", areaSlug),
    fetchAreas(),
    areaSlug ? fetchAreaBySlug(areaSlug) : Promise.resolve(null),
  ]);


  const subtitle = area ? `${area.name}` : `general`;

  return (
    <main className='py-5'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <HeaderSection title="Entries" subtitle={subtitle} />
          </div>
          <div className="col-md-6">
            <FormNews
              options={areas}
              paramName="area"
              placeholder="Todos los registros"
              subtitle={subtitle}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h5>Tramites | {limit} de {formalities.length}</h5>
            {/* lista de Tramites */}
            {formalities.slice(0, limit).map((item, index) => (
              <ContentItemCard
                key={index}
                title={item.title}
                summary={item.summary}
                slug={item.slug}
                areaName={item.area.name}
                type={"tramite"}
                linkPrefix="/tramites"
              />
            ))}
            <MoreButton data={formalities} url="/tramites" />
          </div>
          <div className="col-md-2">
            <h5>Noticias | {limit} de {posts.total}</h5>
            {/* lista de Noticias */}
            {posts.data.map((item, index) => (
              <ContentItemCard
                key={index}
                title={item.title}
                summary={item.excerpt}
                slug={item.slug}
                areaName={item.owner_area.name}
                type={"post"}
                linkPrefix="/noticias"
                date={item.published_at}
              />
            ))}
            <MoreButton data={posts} url="/tramites" />
          </div>
          <div className="col-md-2">
            <h5>Programas | {programs.length}</h5>
            {/* lista de Programas */}
            {programs.map((item, index) => (
              <ContentItemCard
                key={index}
                title={item.title}
                summary={item.summary}
                slug={item.slug}
                areaName={item.area.name}
                type={"program"}
                linkPrefix="/seccion"
              />
            ))}
          </div>
          <div className="col-md-2">
            <h5>Actividades | {activities.length}</h5>
            {/* lista de Actividades */}
            {activities.map((item, index) => (
              <ContentItemCard
                key={index}
                title={item.title}
                summary={item.summary}
                slug={item.slug}
                areaName={item.area.name}
                type={"activity"}
                linkPrefix="/seccion"
              />
            ))}
          </div>
          <div className="col-md-2">
            <h5>Mapas | {maps.length}</h5>
            {/* lista de Mapas */}
            {maps.map((item, index) => (
              <ContentItemCard
                key={index}
                title={item.title}
                summary={item.summary}
                slug={item.slug}
                areaName={item.area.name}
                type={"map"}
                linkPrefix="/mapas"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
