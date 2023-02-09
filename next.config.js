/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
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
