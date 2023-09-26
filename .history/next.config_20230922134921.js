/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const path = require('path'); //for sass/scss integration
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  rules: [
    {
      test: /\.css$/i,
      loader: "css-loader",
      options: {
        // Using `local` value has same effect like using `modules: true`
        modules: "global",
      },
    },
  ],
  webpack(config) { //This is for debugging info
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arctravelconnect.com',
      },
    ],
  },
};