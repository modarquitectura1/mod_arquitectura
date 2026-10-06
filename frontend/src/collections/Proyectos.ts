import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const revalidateProjects = () => {
  revalidatePath('/')
  revalidatePath('/proyectos')
  revalidatePath('/proyectos/[slug]', 'page')
}

export const Proyectos: CollectionConfig = {
  slug: 'proyectos',
  labels: { singular: 'Proyecto', plural: 'Proyectos' },
  admin: {
    useAsTitle: 'nombre',
    defaultColumns: ['nombre', 'categoria', 'fecha', '_status'],
  },
  access: {
    read: ({ req: { user } }) => (user ? true : { _status: { equals: 'published' } }),
  },
  versions: {
    drafts: true,
  },
  defaultSort: '-fecha',
  hooks: {
    afterChange: [
      ({ context }) => {
        if (!context.disableRevalidate) revalidateProjects()
      },
    ],
    afterDelete: [
      ({ context }) => {
        if (!context.disableRevalidate) revalidateProjects()
      },
    ],
  },
  fields: [
    {
      name: 'nombre',
      label: 'Nombre',
      type: 'text',
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 150,
    },
    {
      name: 'slug',
      label: 'Slug (URL)',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Se genera automaticamente a partir del nombre si se deja vacio.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) =>
            value ? slugify(String(value)) : data?.nombre ? slugify(String(data.nombre)) : value,
        ],
      },
    },
    {
      name: 'descripcionCorta',
      label: 'Descripcion corta',
      type: 'textarea',
      required: true,
      minLength: 15,
    },
    {
      name: 'categoria',
      label: 'Categoria',
      type: 'text',
      required: true,
    },
    {
      name: 'ImagenPrincipal',
      label: 'Imagen principal',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imagenes',
      label: 'Galeria de imagenes',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
    {
      name: 'fecha',
      label: 'Fecha',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },
    {
      name: 'Ubicacion',
      label: 'Ubicacion',
      type: 'text',
      required: true,
      minLength: 2,
    },
    {
      name: 'DescripcionLarga',
      label: 'Descripcion larga',
      type: 'textarea',
    },
    {
      name: 'areaTotal',
      label: 'Area total',
      type: 'text',
      required: true,
      minLength: 1,
    },
  ],
}
