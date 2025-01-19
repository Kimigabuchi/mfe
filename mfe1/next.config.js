import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config,options ){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe1',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          buttonApp: 'buttonApp@http://localhost:3000/_next/static/chunks/remoteEntry.js', // Подключение remote
        },
        // shared: {
        //   react: { singleton: true, requiredVersion: false },
        //   'react-dom': { singleton: true, requiredVersion: false },
        // },
      })
    )
    return config
  },
};

export default nextConfig;
