import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://manu-andaluz.github.io/React-Menu-App/",
  plugins: [react()],
});
