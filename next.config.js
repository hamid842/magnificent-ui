/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hostaway-platform.s3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/listing/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.leonardo.ai',
        port: '',
        pathname: '/users/2dc5dbea-cfc5-4a04-a311-747595418e49/generations/**'
      },
      {// TODO: Remove in production
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/images/**'
      }
    ]
  },
  transpilePackages: ['jotai-devtools']
}

module.exports = nextConfig
