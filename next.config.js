/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru', 'fi'],
    defaultLocale: 'fi',
    localeDetection: false,
  },
  images: {
    domains: ['www.datocms-assets.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
