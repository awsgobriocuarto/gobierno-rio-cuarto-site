import Image from 'next/image'
import React from 'react'

export default function Icon({ icon }) {
  const name = icon.name ? icon.name : 'waves';
  const color = icon.color ? icon.color : 'white';
  const size = icon.size ? icon.size : '50';
  return (
    <>
      <Image src={`/images/icons/${name}-${color}.webp`} width={size} height={size} alt='icon' />
    </>
  )
}
