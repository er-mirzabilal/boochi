// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   async rewrites() {
//     return [
//       {
//         source: "/",
//         destination: "/html/index.html",
//       },
//     ];
//   },
// }((module.exports = nextConfig));
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/boochi/index.html", 
      },
    ];
  },
};

module.exports = nextConfig;
