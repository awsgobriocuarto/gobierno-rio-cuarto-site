import React from "react";

export default function Banners({
  variant = "",
  title = "banner title",
  text = "banner text",
  buttonUrl = "",
  buttonColor = "primary",
  buttonText = "boton" }) {
  return (
    <div className="banner">
      <div
        className={variant ? `card text-bg-${variant}` : "card"}
      >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          {buttonUrl !== "" && (
            <div>
              <a
                className={`btn btn-${buttonColor} text-white text-uppercase`}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >{buttonText}</a>
            </div>
          )}
        </div>


      </div>
    </div>
  );
}
