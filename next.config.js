/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
        ],
    },
    // Enable React strict mode for better development experience
    reactStrictMode: true,
    // Optimize production builds
    swcMinify: true,
};

module.exports = nextConfig;
