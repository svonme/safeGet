/**
 * @file Vite Config
 * @author svon.me@gmail.com
 */

import path from "path";
import { defineConfig } from "vite";

export default defineConfig(async function() {
  return {
    resolve: {
      extensions: [".ts"],
      alias: {
        "src/": path.resolve(__dirname, "src") + "/",
      },
    },
    plugins: [
    ],
    optimizeDeps: {
      include: [
      ]
    },
    build: {
      target: "modules",
      polyfillModulePreload: false,
      lib: {
        entry: "src/index",
        name: "safeget",
        formats: ["umd"],
        fileName: "safeget"
      },
      cssCodeSplit: true,
      sourcemap: true,
      manifest: false,
      rollupOptions: {
        external: [
        ],
        output: {
          inlineDynamicImports: true
        }
      }
    },
  };
});
