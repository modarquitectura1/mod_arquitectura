import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'
import { v2 as cloudinary, type UploadApiResponse } from 'cloudinary'
import path from 'path'

type Args = {
  folder: string
}

export const cloudinaryAdapter =
  ({ folder }: Args): Adapter =>
  () => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    })

    const getPublicId = (filename: string) =>
      path.posix.join(folder, path.parse(filename).name)

    const getURL = (filename: string) =>
      cloudinary.url(getPublicId(filename), {
        secure: true,
        urlAnalytics: false,
        format: path.extname(filename).slice(1) || undefined,
      })

    return {
      name: 'cloudinary',
      generateURL: ({ filename }) => getURL(filename),
      handleUpload: async ({ file }) => {
        await new Promise<UploadApiResponse | undefined>((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                public_id: getPublicId(file.filename),
                resource_type: 'image',
                overwrite: true,
              },
              (error, result) => (error ? reject(error) : resolve(result)),
            )
            .end(file.buffer)
        })
      },
      handleDelete: async ({ filename }) => {
        await cloudinary.uploader.destroy(getPublicId(filename), {
          resource_type: 'image',
          invalidate: true,
        })
      },
      staticHandler: (_req, { params }) => Response.redirect(getURL(params.filename), 302),
    }
  }
