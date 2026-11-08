import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["../**/*.ts", "../**/*.vue"],
      exclude: ["node_modules", "dist"],
      tsconfigPath: path.resolve(import.meta.dirname, "./tsconfig.app.json"),
      insertTypesEntry: true,
    }),
  ],

  resolve: {
    alias: {
      "@core": path.resolve(import.meta.dirname, "packages/core"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/packages/core/assets/scss/main";
          @use "/packages/core/assets/scss/_var.scss" as *;
          @use "/packages/core/assets/scss/_mixin.scss" as *;
        `,
      },
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(import.meta.dirname, "packages/core/index.ts"),
      name: "notion-portfolio",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rolldownOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        },
      },
    },
  },
});
