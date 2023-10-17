module.exports = {
  reactStrictMode: true,
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
  },
  images: {
    domains: ['localhost', 'culti-club.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      };
    }
    return config;
  },
};