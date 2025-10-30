// src/app/ui/LogoutButton.js
'use client';

import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

// 🚨 Asegúrate de que este nombre coincida con el usado en el middleware y la página de acceso.
const ACCESS_TOKEN_NAME = 'site_access_token';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Elimina la cookie usando deleteCookie
    // Se recomienda especificar el 'path' si se usó en el setCookie.
    deleteCookie(ACCESS_TOKEN_NAME, { path: '/' });

    // 2. Redirige al usuario a la página de acceso (o a donde desees).
    // El middleware lo forzará a ir a /access, pero es mejor ser explícito.
    router.push('/access');
  };

  return (
    <a
      href='#'
      onClick={handleLogout}
      className='link-underline-dark'
    >
      🔒 Cerrar Acceso Temporal
    </a>
  );
}