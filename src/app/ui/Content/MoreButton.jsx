import Link from 'next/link'
import React from 'react'

export default function MoreButton({ data, url }) {
  return (
    <>
      {data.length > 15 && (<Link href={url} className='btn btn-dark btn-sm'>Ver mas</Link>)}
    </>
  )
}
