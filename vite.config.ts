import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {ViteMinifyPlugin} from 'vite-plugin-minify';
import VitePluginJavascriptObfuscator from 'vite-plugin-javascript-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/trinity-steelindo/',
  plugins: [
    react(),
    ViteMinifyPlugin(),
    VitePluginJavascriptObfuscator({
      exclude: [],
      options: {
        obfuscator: {
          debugProtection: true,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@trinity-steelindo/ui': path.resolve(__dirname, 'packages/ui'),
      '@trinity-steelindo/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    sourcemap: false,
  },
});
