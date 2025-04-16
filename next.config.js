/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript during builds
    ignoreBuildErrors: true,
  },
  images: {
    // Disable image optimization warnings
    unoptimized: true,
    domains: ['images.unsplash.com','cdn.vectorstock.com', 'static.vecteezy.com',],
  },
}

module.exports = nextConfig
