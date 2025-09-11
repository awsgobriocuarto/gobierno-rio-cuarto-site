'use client';

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function MyImageGallery({ photos }) {
  // Mapea los datos de tu API al formato que la librería necesita
  const images = photos.map((photo) => ({
    original: photo.large,
    thumbnail: photo.small,
    originalAlt: photo.alt,
    thumbnailAlt: photo.alt,
  }));

  // No es necesario que te preocupes por el width o height, la librería los maneja
  return <ImageGallery items={images} />;
}