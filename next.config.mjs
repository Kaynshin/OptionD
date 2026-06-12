/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      // Mode « site en construction » : pages commerciales masquées
      // temporairement (307). Fichiers conservés pour réversibilité.
      {
        source: '/site-internet',
        destination: '/',
        permanent: false,
      },
      {
        source: '/agent-ia',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
