import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {ViteMinifyPlugin} from 'vite-plugin-minify';
import vitePlugin from 'vite-plugin-javascript-obfuscator';

export default defineConfig(({mode}) => {
  const isProd = mode === 'production';

  return {
    base: isProd ? '/trinity-steelindo/' : '/',

    plugins: [
      react(),

      isProd && ViteMinifyPlugin(),
      isProd &&
        vitePlugin({
          exclude: [/node_modules/],
          options: {
            debugProtection: true,
          },
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        '@trinity-steelindo/ui': path.resolve(__dirname, 'packages/ui'),
        '@trinity-steelindo/assets': path.resolve(__dirname, 'src/assets'),
      },
    },

    build: {
      sourcemap: false,
    },
  };
});
