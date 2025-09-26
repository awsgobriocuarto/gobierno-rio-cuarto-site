import ListAreas from '@/app/ui/areas/ListAreas'
import React from 'react'

export const metadata = {
  title: 'Áreas de Gobierno',
  description: 'Áreas del Gobierno de Río Cuarto',
};

export default function Area() {
  return (
    <main className='area area-list'>
      <ListAreas />
    </main>
  )
}
