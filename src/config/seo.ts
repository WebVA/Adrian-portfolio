export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://adrian-portfolio-two.vercel.app' : ''
export const baseEmail = 'ultra.mcgh@gmail.com'

export const defaultSEO = {
  title: 'Adrian Wang',
  description:
    'Solutions architect, blog writer, software tinkerer, and software engineer in Chicago.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Adrian Wang',
    images: [
      {
        url: `${baseUrl}/static/og/default.png`,
        alt: 'Adrian Wang',
      },
    ],
  },
  twitter: {
    handle: '@ultra_mcgh',
    site: '@ultra_mcgh',
    cardType: 'summary_large_image',
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}
