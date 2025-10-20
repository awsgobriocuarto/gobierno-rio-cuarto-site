import React, { Suspense } from 'react'
import NotFound from './ui/commons/NotFound'

export const metadata = {
  title: 'Error 404',
  description: 'Página no encontrada',
};

export default function PageNotFound() {
  return (
    <Suspense>
      <NotFound />
    </Suspense>
  )
}
