/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru', 'fi'],
    defaultLocale: 'fi',
    localeDetection: false,
  },
  images: {
    domains: ['www.datocms-assets.com'],
  },
};
