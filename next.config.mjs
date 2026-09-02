/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  eslint: {
    // Lint separately with `npm run lint`; don't let it block production builds.
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
