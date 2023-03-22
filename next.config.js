/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.mds.yandex.net', 'eda.yandex.ru']
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  }
}

module.exports = nextConfig
