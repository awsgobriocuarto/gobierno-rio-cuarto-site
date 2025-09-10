import { fetchNews } from '@/app/lib/DataNews';
import Link from 'next/link';
import React from 'react'

export default async function RelatedNews({ detailNews, page = 1, limit = 6, text = "Noticias Relacionadas" }) {
  const { id, title, } = detailNews;
  const posts = await fetchNews({ page, limit });
  const relatedPosts = posts.filter(post => post.id !== id);


  return (
    <div className='news-related'>
      <h3 className='news-related--subtitle'>{text}</h3>
      <p className='d-none'><small>{id}. {title}</small></p>

      {relatedPosts.map((post) => (
        <Link href={`/noticias/${post.slug}?id=${post.id}`} key={post.id}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={post.image} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-date">
                    <small>
                      {new Date(post.publication_date).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </small>
                  </p>
                  <p className="card-title">{post.title}</p>

                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
