import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src/components/"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
      name: "Components",
      formats: ["es", "cjs"],
      fileName: (format) => {
        // if (format === "umd") return `components.js`;
        return `components.${format}.js`;
      },
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
