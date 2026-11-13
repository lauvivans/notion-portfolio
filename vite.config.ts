/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@core": path.resolve(import.meta.dirname, "packages/core"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/packages/core/assets/scss/main.scss";
          @use "/packages/core/assets/scss/_var.scss" as *;
          @use "/packages/core/assets/scss/_mixin.scss" as *;
        `,
      },
    },
  },

  // Scan only the site. By default Vite also scans template/index.html and
  // any portfolio created locally with the CLI.
  optimizeDeps: {
    entries: ["index.html"],
  },

  test: {
    environment: "happy-dom",
    include: ["tests/**/*.test.ts"],
  },
});
