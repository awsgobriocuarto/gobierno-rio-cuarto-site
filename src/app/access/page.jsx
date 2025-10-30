// src/app/access/page.js

'use client'; // 👈 Necesario ya que usa useState y useRouter

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

// **Mejora:** Para evitar duplicación, podrías leer el código desde una variable 
// de entorno expuesta públicamente (NEXT_PUBLIC_SITE_ACCESS_CODE) o usar una API Route.
const SECRET_CODE = 'web2025';
const ACCESS_TOKEN_NAME = 'site_access_token';

export default function AccessPage() {
  const [inputCode, setInputCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");

    setError('');

    if (inputCode === SECRET_CODE) {
      // Establece la cookie que el middleware leerá.
      setCookie(ACCESS_TOKEN_NAME, SECRET_CODE, {
        maxAge: 60 * 60 * 24, // Validez de 24 horas
        path: '/',
      });
      //alert("login");
      // Redirige al home.
      router.push('/');
    } else {
      setError('Código incorrecto. Acceso denegado.');
    }
  };

  return (
    <section className="mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h2>🚧 ¡Estamos trabajando!</h2>
            <p className='lead'>¡Hola! Estamos construyendo la nueva web del municipio para vos. Muy pronto estará lista.</p>
            <p>Ingresá el código de acceso para previsualizar.</p>

            <form onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <input
                  type="password"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Código de Acceso"
                  className='form-control'
                  aria-describedby="button-addon2"
                  required
                />
                <button class="btn btn-primary text-white" type="button" id="button-addon2">Ingresar</button>
              </div>
            </form>
            {error && <p className='text-danger mt-3'>{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}