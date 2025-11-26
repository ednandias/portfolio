import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  resolve: {
    alias: {
      "@types": path.resolve(__dirname, "./src/@types"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  server: {
    port: 3000,
  },
});
