import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/trinity-steelindo/',
  plugins: [
    react(),
    obfuscatorPlugin({
      options: {
        debugProtection: true,
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
