/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  distDir: 'build',
  images: {
    loader: "cloudinary",
    domains: ["localhost", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
