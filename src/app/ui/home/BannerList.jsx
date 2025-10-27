import Link from 'next/link'
import BannerCard from './BannerCard'
import React from 'react'

const banners = [
  {
    title: "0800 444 5454",
    subtitle: "Atención al vecino",
    icon: "fa-phone fa-2xl",
    color: "bg-warning text-white",
    url: "/seccion/suav",
    target: ""
  },
  {
    title: "Ojos en Alerta",
    subtitle: "Nos cuidamos entre todos",
    icon: "fa-eye fa-2xl",
    color: "bg-info text-white",
    url: "/seccion/ojos-en-alerta",
    target: ""
  },
  {
    title: "Pagos y Deudas",
    subtitle: "Mantené tus pagos al día",
    icon: "fa-dollar-sign fa-2xl",
    color: "bg-success text-white",
    url: "https://economiariocuarto.gob.ar/pagos-y-deudas",
    target: "_blank"
  }
]

export default function BannerList() {
  return (
    <section className="banners" data-read>
      <div className="container">
        <div className="row">
          {banners.map(banner => (
            <div key={BannerList.title} className='col-md-4'>
              {banner.target == "_blank" ? (
                <a href={banner.url} target='_blank'><BannerCard banner={banner} /></a>
              ) : (
                <Link href={banner.url}><BannerCard banner={banner} /></Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
