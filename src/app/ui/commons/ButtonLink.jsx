
import Link from 'next/link'
import React from 'react'
import ButtonCard from './ButtonCard'

export default function ButtonLink({
  title = "titulo",
  url,
  target,
  type,
  src,
  alt
}) {
  return (
    <>
      {!url ? (
        <ButtonCard type={type} title={title} src={src} alt={alt} />
      ) : !target ? (<Link href={url}>
        <ButtonCard type={type} title={title} src={src} alt={alt} />
      </Link>) : (<a href={url} target={target}>
        <ButtonCard type={type} title={title} src={src} alt={alt} />
      </a>)}
    </>
  )
}
