import Link from "next/link";

export default function ButtonFormalities() {
  return (
    <div className="col-md-4 mb-4">
      <Link href={`/tramites/`} className="btn btn-primary w-100">
        Botonaso
      </Link>
    </div>
  );
}
