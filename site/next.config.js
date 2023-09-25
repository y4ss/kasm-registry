/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Custom Image Registry',
    description: 'Custom Image Registry',
    icon: '/img/logo.svg',
    listUrl: 'https://y4ss.github.io/kasm-registry/',
    contactUrl: 't',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
