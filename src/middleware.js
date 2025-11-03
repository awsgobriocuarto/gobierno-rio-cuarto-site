'use serve'

'use-server'

import { NextResponse } from 'next/server';

// 🚨 Define tu código de acceso secreto. ¡CÁMBIALO!
// **Mejora:** Cárgalo desde una variable de entorno **NEXT_PUBLIC_SITE_ACCESS_CODE**
const SECRET_CODE = 'web2025';
const ACCESS_TOKEN_NAME = 'site_access_token';

export function middleware(request) {
  const accessToken = request.cookies.get(ACCESS_TOKEN_NAME)?.value;

  // Si el token es correcto, permite el acceso
  if (accessToken === SECRET_CODE) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  // Verifica si el usuario ya está intentando acceder a la página de acceso.
  // Es fundamental para evitar un bucle de redirección.
  if (url.pathname !== '/access') {
    url.pathname = '/access';
    return NextResponse.redirect(url);
  }

  // Si ya está en '/access', permite que esa página se cargue.
  return NextResponse.next();
}

export const config = {
  // El matcher protegerá todas las rutas que no estén en la lista de exclusión.
  matcher: [
    // Excluir: carpetas internas de Next.js, archivos estáticos, la ruta de acceso.
    '/((?!api|_next/static|_next/image|favicon.ico|access|.*\\.(?:svg|png|jpg|jpeg|gif)).*)',
  ],
};