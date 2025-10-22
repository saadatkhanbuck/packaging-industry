/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 ye line problem solve karegi
  },
};

module.exports = nextConfig;
