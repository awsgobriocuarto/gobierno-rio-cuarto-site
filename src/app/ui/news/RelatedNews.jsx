import { fetchNews, fetchPosts } from '@/app/lib/DataNews';
import Link from 'next/link';
import React from 'react'

export default async function RelatedNews({ postId = "", area = "", page = 1, limit = 6, title = "Noticias Relacionadas" }) {

  const { data } = await fetchPosts({ page, limit, area });

  const posts = data.filter(post => post.id !== postId);

  //console.log(posts.length);

  return (
    <div className='news-related'>
      <h4 className='news-related--subtitle'>{title}</h4>
      {posts.map((post) => (
        <Link href={`/noticias/${post.slug}`} key={post.id}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                {/* eslint-disable-next-line */}
                <img src={post.image} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-date">
                    <small>
                      {new Date(post.published_at).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </small>
                  </p>
                  <p className="card-title">{post.title}</p>
                  <p className='card-subtitle'><small>{post.owner_area.name}</small></p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
