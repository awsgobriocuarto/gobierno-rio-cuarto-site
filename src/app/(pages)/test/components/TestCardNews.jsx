import React from 'react'

export default function TestCardNews() {
  return (
    <section className="news">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-img-top">
              {/* eslint-disable-next-line */}
              <img src="http://www.riocuarto.gov.ar/files/noticias/1756146883_Presentaci%C3%B3n_Mundo_Franquicias_21.jpg" alt="" className="img-fluid" />
            </div>
            <div className="card-body">
              <h3 className="card-title text-primary">Río Cuarto se potencia a través de Mundo Franquicias
              </h3>
              <p className="card-text">Con una nueva edición que se realizó con más de 70 asistentes, se potencia la ciudad a través del Mundo Franquicias</p>
            </div>
            <div className="card-footer border-0 bg-white">
              <span>17/08/2025</span>
              <span><a href="#">Ver más</a></span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-img-top">
              {/* eslint-disable-next-line */}
              <img src="http://www.riocuarto.gov.ar/files/noticias/1756146883_Presentaci%C3%B3n_Mundo_Franquicias_21.jpg" alt="" className="img-fluid" />
            </div>
            <div className="card-body">
              <h3 className="card-title text-primary">Río Cuarto se potencia a través de Mundo Franquicias
              </h3>
              <p className="card-text">Con una nueva edición que se realizó con más de 70 asistentes, se potencia la ciudad a través del Mundo Franquicias</p>
            </div>
            <div className="card-footer border-0 bg">
              <span>17/08/2025</span>
              <span><a href="#">Ver más</a></span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-img-top">
              {/* eslint-disable-next-line */}
              <img src="http://www.riocuarto.gov.ar/files/noticias/1756146883_Presentaci%C3%B3n_Mundo_Franquicias_21.jpg" alt="" className="img-fluid" />
            </div>
            <div className="card-body bg-primary">
              <h3 className="card-title text-white">Río Cuarto se potencia a través de Mundo Franquicias
              </h3>
              <p className="card-text text-white">Con una nueva edición que se realizó con más de 70 asistentes, se potencia la ciudad a través del Mundo Franquicias</p>
            </div>
            <div className="card-footer bg-2 text-white">
              <span>17/08/2025</span>
              <span><a href="#" className="text-white">Ver más</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
