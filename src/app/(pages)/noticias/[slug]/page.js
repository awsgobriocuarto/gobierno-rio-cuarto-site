import { getNewsById, getNewsBySlug } from '@/app/lib/DataNews';
import DetailNews from '@/app/ui/news/DetailNews';
import RelatedNews from '@/app/ui/news/RelatedNews';
import { notFound } from 'next/navigation';

export default async function NewsDetailPage({ params, searchParams }) {
  const { slug } = params;
  const { id } = searchParams;
  let detailNews = null;

  // Lógica de fetching
  if (id) {
    // Si la URL tiene un `id` en los searchParams, usamos ese para la consulta
    console.log('Fetching por ID:', id);
    detailNews = await getNewsById(id);
  } else {
    // Si no hay `id`, intentamos usar el `slug` como fallback (cuando la API esté lista)
    console.log('Fetching por Slug:', slug);
    detailNews = await getNewsBySlug(slug);
  }

  //console.log(detailNews);


  // Si la noticia no se encuentra con ninguno de los dos métodos, mostramos 404
  if (!detailNews) {
    return <p>Sitio no encontrado</p>
  }

  return (
    <main className='news news-detail' data-read>
      <div className="container">
        <span className="sr-only">Detalle de la Noticia</span>
        <div className="row">
          <div className="col-md-8">
            <DetailNews detailNews={detailNews} />
          </div>
          <div className="col-md-4">
            <RelatedNews detailNews={detailNews} />
          </div>
        </div>
      </div>
    </main>
  );
}