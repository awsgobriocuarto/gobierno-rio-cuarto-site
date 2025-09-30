'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function FormNews({ options, paramName, placeholder }) {
  const router = useRouter();
  // No necesitamos searchParams aquí, pero lo dejamos por si quieres leer el valor inicial.
  const searchParams = useSearchParams();

  const currentValue = searchParams.get(paramName) || '';

  // Esta función ahora crea una URL desde cero, ignorando otros parámetros.
  const createQueryString = useCallback(
    (name, value) => {
      // CAMBIO CLAVE: Inicia un objeto de parámetros vacío.
      const params = new URLSearchParams();

      // Si hay un valor seleccionado, lo agrega como el único parámetro.
      if (value) {
        params.set(name, value);
      }

      // Si no hay valor, devuelve una cadena vacía, eliminando todos los parámetros.
      return params.toString();
    },
    [] // La función ya no necesita depender de searchParams, es pura.
  );

  const handleChange = (event) => {
    const newValue = event.target.value;
    const queryString = createQueryString(paramName, newValue);

    // Navega a la URL actual pero con los nuevos parámetros.
    // El signo de interrogación se maneja automáticamente.
    router.push(`?${queryString}`, { scroll: false });
  };

  return (
    <select
      value={currentValue}
      onChange={handleChange}
      className="form-control form-control-lg"
    >
      {placeholder && <option value="">{placeholder}</option>}

      {options.map((option) => (
        // Tu mapeo es correcto, usando slug como value.
        <option key={option.id} value={option.slug}>
          {option.name}
        </option>
      ))}
    </select>
  );
}