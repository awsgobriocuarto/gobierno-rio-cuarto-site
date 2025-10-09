import React from 'react'
import SearchResultItem from './SearchResultItem';

export default function SeachResultGroup({ url, title, results }) {
  console.log(results.length);

  return (
    <div className="search-group">
      <h5>{title}</h5>
      <ul>
        {results.map(result => (
          <SearchResultItem key={result.id} result={result} url={url} />
        ))}
      </ul>
    </div>
  )
}
