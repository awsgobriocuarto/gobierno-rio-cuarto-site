import Link from "next/link";

export default function FormalitiesCard({ formality }) {


  return (

    <div className="card">
      <div className="card-header">
        {formality.area.name}
      </div>
      <div className="card-body">
        <Link href={`/tramites/${formality.slug}`}>
          <h3 className="card-title">{formality.title}</h3>
        </Link>
      </div>
      <div className="card-footer">
        {formality.categories.map((category) => (
          <span key={category.id}>
            <i className={`fas fa-fw ${category.image}`}></i> {category.name}
          </span>
        ))}
      </div>
    </div>

  );
}
