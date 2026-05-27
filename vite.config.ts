import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  base: "/animal-island-blog/",
  plugins: [
    react(),
    svgr({
      include: ["**/*.svg"],
      svgrOptions: { exportType: "default" },
    }),
    viteCompression({
      algorithm: "gzip",
      threshold: 1024,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});
