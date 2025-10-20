import Link from 'next/link'
import SearchForm from './SearchForm'

export default function NotFound() {
  return (
    <section className='not-found'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Página no encontrada</h2>
            <p className='lead mb-4'>No se pudo encontrar el contenido solicitado</p>
            <div className="mb-4">
              <SearchForm />
            </div>
            <Link href="/">Ir al inicio</Link>
          </div>
        </div>

      </div>
    </section>
  )
}
