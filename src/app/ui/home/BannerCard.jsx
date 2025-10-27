import Link from 'next/link'
import React from 'react'

export default function BannerCard({ banner }) {
  const { title, subtitle, color, icon } = banner
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-3">
          <div className={`card-icon ${color}`}>
            <i className={`fa-solid fa-fw ${icon}`}></i>
          </div>
        </div>
        <div className="col-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className='card-text'>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
