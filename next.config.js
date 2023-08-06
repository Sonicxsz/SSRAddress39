/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.mds.yandex.net', 'eda.yandex.ru', 'thumb.tildacdn.com', 'eda.yandex']
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = nextConfig
