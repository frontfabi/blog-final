/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  images: {
    loader: "cloudinary",
    domains: ["localhost", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
