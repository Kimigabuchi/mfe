// /** @type {import('next').NextConfig} */
// console.log('Loading next.config.cjs...');

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
// // const remotes = (isServer) => {
// //   const location = isServer ? "ssr" : "chunks";
// //   return {
// //     mfe1: `mfe1@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
// //   };
// // };
// const nextConfig = {
//   reactStrictMode: true,
//   future: {
//     webpack5: true,
//   },
//   webpack(config) {
//     console.log('Добавление NextFederationPlugin...');
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'mfe2',
//         filename: 'static/chunks/remoteEntry.js',
//         exposes: {
//           "./Button": './src/components/Button.js',
//         },
//         shared: {
//           react: { singleton: true, requiredVersion: false },
//           'react-dom': { singleton: true, requiredVersion: false },
//         },
//       })
//     )
//     console.log('Конфигурация Webpack обновлена');
//     return config
//   }
// };

// module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'buttonApp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Button': './src/components/Button',
          './Avatar': './src/components/Avatar',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
        extraOptions: {
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );
    return config;
  },
};
