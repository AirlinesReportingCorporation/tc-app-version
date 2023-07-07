/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) { //This is for debugging info
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  }
};