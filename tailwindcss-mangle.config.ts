import {defineConfig} from 'tailwindcss-patch';

export default defineConfig({
  patch: {
    output: {
      filename: 'package.json',
      loose: true,
      removeUniversalSelector: true,
    },
    tailwindcss: {
      config:
        '/Users/bobbyryanhartono/Documents/COMPANY_PROFILE/trinity-steelindo/tailwind.config.js',
      cwd: '/Users/bobbyryanhartono/Documents/COMPANY_PROFILE/trinity-steelindo',
    },
  },
});
