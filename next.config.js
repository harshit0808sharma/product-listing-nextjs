const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
  output: 'export', // ✅ Required for static export in Next.js 13+
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     domains: ['fakestoreapi.com'],
//   },
// }

// module.exports = nextConfig
