import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Imagen', plural: 'Imagenes' },
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ['image/*'],
    resizeOptions: {
      width: 2400,
      withoutEnlargement: true,
    },
    formatOptions: {
      format: 'webp',
      options: { quality: 80 },
    },
  },
  fields: [
    {
      name: 'alt',
      label: 'Texto alternativo',
      type: 'text',
    },
  ],
}
