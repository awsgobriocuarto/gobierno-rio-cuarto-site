import React from "react";

export default function TestCardButtons() {
  return (
    <section className="buttons">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-3">
                <div className="card-img">
                  <img
                    src="http://www.riocuarto.gov.ar/files/noticias/1756146883_Presentaci%C3%B3n_Mundo_Franquicias_21.jpg"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-9">
                <div className="card-body">
                  <h5 className="card-title">
                    Secretaría de Desarrollo Económico, Comercial e Industrial
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-3">
                <div className="card-icon">
                  <i className="fa-solid fa-snowplow fa-2xl"></i>
                </div>
              </div>
              <div className="col-9">
                <div className="card-body">
                  <h5 className="card-title">
                    Secretaría de Desarrollo Económico, Comercial e Industrial
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title">
                    Secretaría de Desarrollo Económico, Comercial e Industrial
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-3">
                <div className="card-icon bg-primary text-white">
                  <i className="fa-solid fa-snowplow fa-2xl"></i>
                </div>
              </div>
              <div className="col-9">
                <div className="card-body">
                  <h5 className="card-title">
                    Secretaría de Desarrollo Económico, Comercial e Industrial
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-3">
                <div className="card-icon bg-info text-white">
                  <i className="fa-solid fa-snowplow fa-2xl"></i>
                </div>
              </div>
              <div className="col-9">
                <div className="card-body">
                  <h5 className="card-title">
                    Secretaría de Desarrollo Económico, Comercial e Industrial
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-3">
                <div className="card-icon bg-secondary text-white">
                  <i className="fa-solid fa-snowplow fa-2xl"></i>
                </div>
              </div>
              <div className="col-9">
                <div className="card-body">
                  <h5 className="card-title">
                    Secretaría de Desarrollo Económico, Comercial e Industrial
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
