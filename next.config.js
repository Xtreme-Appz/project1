module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['public/images'],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};