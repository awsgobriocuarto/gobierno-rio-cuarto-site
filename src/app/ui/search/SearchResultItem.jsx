import Link from 'next/link'
import React from 'react'

export default function SearchResultItem({ result, url }) {
  console.log(result);

  return (
    <li className="search-item">
      <Link href={`${url}${result.slug}`}>{result.title}</Link>
      <p>{result.excerpt}</p>
    </li>
  )
}
