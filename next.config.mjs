/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        MONGODB_URI: process.env.MONGODB_URI,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        SMTP_FROM: process.env.SMTP_FROM,
        SMTP_TO: process.env.SMTP_TO,
    },
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: 'canvas' }];
        return config;
      },
};

export default nextConfig;
