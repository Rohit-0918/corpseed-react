import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
       "/corpseed-menu": {
      target: "https://www.corpseed.com",
      changeOrigin: true,
      rewrite: (p) => p.replace(/^\/corpseed-menu/, "/api/menu/dynamic"),
    },
    "/corpseed-search": {
      target: "https://www.corpseed.com",
      changeOrigin: true,
      rewrite: (p) =>
        p.replace(/^\/corpseed-search/, "/search/popular-services-blogs"),
    },
    },
  },
});
