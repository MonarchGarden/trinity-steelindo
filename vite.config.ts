import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {ViteMinifyPlugin} from 'vite-plugin-minify';
import vitePlugin from 'vite-plugin-javascript-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/trinity-steelindo/',
  plugins: [
    react(),
    ViteMinifyPlugin(),
    vitePlugin({
      exclude: [],
      options: {
        include: ['src/path/to/file.js', 'path/anyjs/**/*.js', /foo.js$/],
        exclude: [/node_modules/],
        apply: 'build',
        debugger: true,
        options: {
          // your javascript-obfuscator options
          debugProtection: true,
          // ...  [See more options](https://github.com/javascript-obfuscator/javascript-obfuscator)
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
