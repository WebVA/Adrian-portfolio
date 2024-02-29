/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }

    return config
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'abs.twimg.com',
      'overthought.ghost.io',
      'imagedelivery.net',
      'avatars.githubusercontent.com',
      'res.cloudinary.com'
    ],
  },
  async redirects() {
    return [
      {
        source: '/uses',
        destination: '/stack',
        permanent: true,
      },
      {
        source: '/design-details',
        destination: '/app-dissection',
        permanent: true,
      },
      {
        source: '/design-details/:slug',
        destination: '/app-dissection/:slug',
        permanent: true,
      },
      {
        source: '/journal',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/overthought',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/overthought/:slug',
        destination: '/writing/:slug',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/adrian-wang-301238226/',
        permanent: true,
        basePath: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/webva',
        permanent: true,
        basePath: false,
      }
    ]
  },
}
