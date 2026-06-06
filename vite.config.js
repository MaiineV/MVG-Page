import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// CRA used .js files containing JSX. Tell esbuild to treat src .js as JSX.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
  },
  build: {
    outDir: "build", // matches the previous CRA publish dir (Netlify)
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
});
