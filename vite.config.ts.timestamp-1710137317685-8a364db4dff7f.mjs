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
    // utwm({}),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqeXVyblxcXFxEb2N1bWVudHNcXFxcQ09NUEFOWV9QUk9GSUxFXFxcXHRyaW5pdHktc3RlZWxpbmRvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqeXVyblxcXFxEb2N1bWVudHNcXFxcQ09NUEFOWV9QUk9GSUxFXFxcXHRyaW5pdHktc3RlZWxpbmRvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9qeXVybi9Eb2N1bWVudHMvQ09NUEFOWV9QUk9GSUxFL3RyaW5pdHktc3RlZWxpbmRvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHtWaXRlTWluaWZ5UGx1Z2lufSBmcm9tICd2aXRlLXBsdWdpbi1taW5pZnknO1xyXG5pbXBvcnQgdml0ZVBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1qYXZhc2NyaXB0LW9iZnVzY2F0b3InO1xyXG4vLyBpbXBvcnQgdXR3bSBmcm9tICd1bnBsdWdpbi10YWlsd2luZGNzcy1tYW5nbGUvdml0ZSc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvdHJpbml0eS1zdGVlbGluZG8vJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgVml0ZU1pbmlmeVBsdWdpbigpLFxyXG4gICAgLy8gdXR3bSh7fSksXHJcbiAgICB2aXRlUGx1Z2luKHtcclxuICAgICAgZXhjbHVkZTogW10sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBpbmNsdWRlOiBbJ3NyYy9wYXRoL3RvL2ZpbGUuanMnLCAncGF0aC9hbnlqcy8qKi8qLmpzJywgL2Zvby5qcyQvXSxcclxuICAgICAgICBleGNsdWRlOiBbL25vZGVfbW9kdWxlcy9dLFxyXG4gICAgICAgIGFwcGx5OiAnYnVpbGQnLFxyXG4gICAgICAgIGRlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGRlYnVnUHJvdGVjdGlvbjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0B0cmluaXR5LXN0ZWVsaW5kby91aSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdwYWNrYWdlcy91aScpLFxyXG4gICAgICAnQHRyaW5pdHktc3RlZWxpbmRvL2Fzc2V0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvYXNzZXRzJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHNvdXJjZW1hcDogZmFsc2UsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFcsT0FBTyxXQUFXO0FBQzlYLE9BQU8sVUFBVTtBQUNqQixTQUFRLG9CQUFtQjtBQUMzQixTQUFRLHdCQUF1QjtBQUMvQixPQUFPLGdCQUFnQjtBQUp2QixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixpQkFBaUI7QUFBQTtBQUFBLElBRWpCLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQztBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsU0FBUyxDQUFDLHVCQUF1QixzQkFBc0IsU0FBUztBQUFBLFFBQ2hFLFNBQVMsQ0FBQyxjQUFjO0FBQUEsUUFDeEIsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsU0FBUztBQUFBLFVBQ1AsaUJBQWlCO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wseUJBQXlCLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDOUQsNkJBQTZCLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsSUFDbkU7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
