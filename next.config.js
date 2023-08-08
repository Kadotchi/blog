/**
 * @type {import('next').NextConfig}.
*/
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['images.microcms-assets.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: `/assets/${process.env.SERVICE_ID}/**`,
      }
    ],
  },
}
module.exports = nextConfig