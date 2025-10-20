import React, { Suspense } from 'react'
import Slides from './Slides'
import SearchForm from '../commons/SearchForm'


export default function Hero() {
  return (
    <section className='hero' data-read>
      <div className="hero-slides">
        <Slides />
      </div>
      <div className="hero-search">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-md-8">
              <h1 className='hero-title'>Bienvenido a Río Cuarto</h1>
              <Suspense>
                <SearchForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
