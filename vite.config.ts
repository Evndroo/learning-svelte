import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      $assets: resolve("./src/assets"),
      $lib: resolve("./src/lib"),
    },
  },
  plugins: [svelte()],
});
