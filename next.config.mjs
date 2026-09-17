/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'albert-graphic-design-portfolio.vercel.app' }
    ]
  }
};

export default nextConfig;
