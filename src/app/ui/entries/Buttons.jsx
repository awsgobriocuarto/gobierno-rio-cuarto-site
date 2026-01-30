// @/app/ui/entries/Buttons.js
export default function Buttons({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="entries-detail--links-container">
      <div className="row">
        {links.map((link, index) => (
          <div key={index} className="col-12 mb-3">
            {" "}
            {/* Cambiado a col-12 para el sidebar */}
            {link.title && <p className="mb-1 fw-bold">{link.title}</p>}
            <a
              href={link.link}
              target={link.target}
              rel="noopener noreferrer"
              className="btn btn-info btn-lg text-white w-100" // w-100 para ancho completo
            >
              <span dangerouslySetInnerHTML={{ __html: link.name }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
