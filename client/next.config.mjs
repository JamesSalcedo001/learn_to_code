/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // Match any path under /api
          destination: 'http://localhost:3000/:path*', // Proxy to Rails backend
        },
      ];
    },
  };
  
  export default nextConfig;
  