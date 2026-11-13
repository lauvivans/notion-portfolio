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
        // src/main.ts imports main.scss itself, so it skips the prefix that
        // would make it @use itself (Sass "Module loop").
        additionalData: (source: string, filename: string) =>
          filename.replaceAll("\\", "/").endsWith("assets/scss/main.scss")
            ? source
            : `
          @use "/packages/core/assets/scss/main.scss";
          @use "/packages/core/assets/scss/_var.scss" as *;
          @use "/packages/core/assets/scss/_mixin.scss" as *;
        ${source}`,
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
