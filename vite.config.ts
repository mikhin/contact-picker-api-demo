import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// need https locally, because of Contact Picker API working only on secure contexts
import mkcert from "vite-plugin-mkcert";
import svg from "vite-plugin-svgo";

export default defineConfig({
  server: { https: true },
  plugins: [mkcert(), react(), svg()],
});
