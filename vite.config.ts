import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/trinity-steelindo/',
  plugins: [react()],
  resolve: {
    alias: {
      '@trinity-steelindo/ui': path.resolve(__dirname, 'packages/ui'),
      '@trinity-steelindo/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
});
