/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/bombote_com",
    output: "export",
    reactStrictMode: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
