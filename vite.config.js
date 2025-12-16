import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      "/api/menu": {
        target: "https://www.corpseed.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  proxy: {
    "/api": {
      target: "http://localhost:8080",
      changeOrigin: true,
      secure: false,
    },
  },
});
