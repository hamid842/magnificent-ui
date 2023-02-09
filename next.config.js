/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
module.exports = nextTranslate();
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hostaway-platform.s3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/listing/**'
      }
    ]
  }
}

module.exports = nextConfig
