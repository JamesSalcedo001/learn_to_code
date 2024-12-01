/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:3000/:path*", // proxy for Rails API
            }
        ]
    }
};

export default nextConfig;
