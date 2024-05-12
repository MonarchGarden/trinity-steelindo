// vite.config.ts
import react from "file:///C:/Users/jyurn/Documents/COMPANY_PROFILE/trinity-steelindo/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///C:/Users/jyurn/Documents/COMPANY_PROFILE/trinity-steelindo/node_modules/vite/dist/node/index.js";
import { ViteMinifyPlugin } from "file:///C:/Users/jyurn/Documents/COMPANY_PROFILE/trinity-steelindo/node_modules/vite-plugin-minify/dist/index.js";
import vitePlugin from "file:///C:/Users/jyurn/Documents/COMPANY_PROFILE/trinity-steelindo/node_modules/vite-plugin-javascript-obfuscator/dist/index.cjs.js";
var __vite_injected_original_dirname = "C:\\Users\\jyurn\\Documents\\COMPANY_PROFILE\\trinity-steelindo";
var vite_config_default = defineConfig({
  base: "/trinity-steelindo/",
  plugins: [
    react(),
    ViteMinifyPlugin(),
    vitePlugin({
      exclude: [],
      options: {
        include: ["src/path/to/file.js", "path/anyjs/**/*.js", /foo.js$/],
        exclude: [/node_modules/],
        apply: "build",
        debugger: true,
        options: {
          debugProtection: true
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@trinity-steelindo/ui": path.resolve(__vite_injected_original_dirname, "packages/ui"),
      "@trinity-steelindo/assets": path.resolve(__vite_injected_original_dirname, "src/assets")
    }
  },
  build: {
    sourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqeXVyblxcXFxEb2N1bWVudHNcXFxcQ09NUEFOWV9QUk9GSUxFXFxcXHRyaW5pdHktc3RlZWxpbmRvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqeXVyblxcXFxEb2N1bWVudHNcXFxcQ09NUEFOWV9QUk9GSUxFXFxcXHRyaW5pdHktc3RlZWxpbmRvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9qeXVybi9Eb2N1bWVudHMvQ09NUEFOWV9QUk9GSUxFL3RyaW5pdHktc3RlZWxpbmRvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHtWaXRlTWluaWZ5UGx1Z2lufSBmcm9tICd2aXRlLXBsdWdpbi1taW5pZnknO1xyXG5pbXBvcnQgdml0ZVBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1qYXZhc2NyaXB0LW9iZnVzY2F0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnL3RyaW5pdHktc3RlZWxpbmRvLycsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVNaW5pZnlQbHVnaW4oKSxcclxuICAgIHZpdGVQbHVnaW4oe1xyXG4gICAgICBleGNsdWRlOiBbXSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluY2x1ZGU6IFsnc3JjL3BhdGgvdG8vZmlsZS5qcycsICdwYXRoL2FueWpzLyoqLyouanMnLCAvZm9vLmpzJC9dLFxyXG4gICAgICAgIGV4Y2x1ZGU6IFsvbm9kZV9tb2R1bGVzL10sXHJcbiAgICAgICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICAgICAgZGVidWdnZXI6IHRydWUsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZGVidWdQcm90ZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG5cclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQHRyaW5pdHktc3RlZWxpbmRvL3VpJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3BhY2thZ2VzL3VpJyksXHJcbiAgICAgICdAdHJpbml0eS1zdGVlbGluZG8vYXNzZXRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hc3NldHMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgc291cmNlbWFwOiBmYWxzZSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VyxPQUFPLFdBQVc7QUFDOVgsT0FBTyxVQUFVO0FBQ2pCLFNBQVEsb0JBQW1CO0FBQzNCLFNBQVEsd0JBQXVCO0FBQy9CLE9BQU8sZ0JBQWdCO0FBSnZCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGlCQUFpQjtBQUFBLElBQ2pCLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQztBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsU0FBUyxDQUFDLHVCQUF1QixzQkFBc0IsU0FBUztBQUFBLFFBQ2hFLFNBQVMsQ0FBQyxjQUFjO0FBQUEsUUFDeEIsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsU0FBUztBQUFBLFVBQ1AsaUJBQWlCO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wseUJBQXlCLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDOUQsNkJBQTZCLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsSUFDbkU7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
