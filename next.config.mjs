/** @type {import('next').NextConfig} */
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
  webpack: (config) => {
    if (process.env.COMPONENT_TESTING) {
      config.resolve = config.resolve || {}
      config.resolve.alias = config.resolve.alias || {}
      config.resolve.alias['next/font/google'] = path.resolve(
        __dirname,
        'cypress/stubs/NextFont.tsx',
      )
    }
    return config
  },
}

export default nextConfig
