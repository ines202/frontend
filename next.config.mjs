/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost", "www.google.com", "firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
