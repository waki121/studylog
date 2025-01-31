import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['clsx', '@radix-ui/react-slot'],
  },
};

export default nextConfig;
