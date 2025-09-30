import { getNewsBySlug } from '@/app/lib/DataNews';
import { createPageMetadata } from '@/app/lib/metadata';
import DetailNews from '@/app/ui/news/DetailNews';
import RelatedNews from '@/app/ui/news/RelatedNews';

export async function generateMetadata({ params }) {
  const post = await getNewsBySlug(params.slug);
  if (!post) {
    return { title: 'Noticia no encontrada' };
  }
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    imageUrl: post.image,
  });
}


export default async function NewsDetailPage({ params }) {
  const { slug } = params;
  let detailNews = null;

  detailNews = await getNewsBySlug(slug);

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