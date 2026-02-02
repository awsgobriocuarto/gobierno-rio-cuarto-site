import React from "react";

export default function BannerCard({ banner }) {
  const { title, subtitle, color, icon } = banner;

  return (
    <div className={`card mb-3 border-0 ${color} shadow-sm banner-card`}>
      <div className="row g-0 align-items-center banner-card-row">
        <div className="col-4 d-flex justify-content-center">
          <div className="card-icon bg-transparent border-0">
            <i className={`fa-solid fa-fw ${icon}`}></i>
          </div>
        </div>
        <div className="col-8">
          <div className="card-body ps-0 py-2 d-flex flex-column justify-content-center">
            <h5 className="card-title banner-card-title">{title}</h5>
            <p className="mb-0 text-white banner-card-subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
