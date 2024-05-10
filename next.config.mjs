/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      }
    ],
  },
};

export default nextConfig;
