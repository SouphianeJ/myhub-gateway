/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      {
        source: '/code-builder/:path*',
        destination: 'https://code-builder.vercel.app/:path*',
      },
      {
        source: '/app2/:path*',
        destination: 'https://app2-yyy.vercel.app/:path*',
      },
      {
        source: '/shared-clipboard/:path*',
        destination: 'https://shared-clipboard-perso.vercel.app/:path*',
      },
      // ajoute d'autres apps si necessaire
    ];
  },
};

module.exports = nextConfig;
