import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Required for alias resolution
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // This will allow you to use '@' as an alias for 'src'
      "@components": path.resolve(__dirname, "src/components"), // This will allow you to use '@components' as an alias for 'src/components'
      "@assets": path.resolve(__dirname, "src/assets"), // This will allow you to use '@assets' as an alias for 'src/assets'
      "@utils": path.resolve(__dirname, "src/utils"), // This will allow you to use '@utils' as an alias for 'src/utils'
      "@hooks": path.resolve(__dirname, "src/hooks"), // This will allow you to use '@hooks' as an alias for 'src/hooks'
      "@context": path.resolve(__dirname, "src/context"), // This will allow you to use '@context' as an alias for 'src/context'
      "@pages": path.resolve(__dirname, "src/pages"), // This will allow you to use '@pages' as an alias for 'src/pages'
      "@styles": path.resolve(__dirname, "src/styles"), // This will allow you to use '@styles' as an alias for 'src/styles'
      "@constants": path.resolve(__dirname, "src/constants"), // This will allow you to use '@constants' as an alias for 'src/constants'
      "@services": path.resolve(__dirname, "src/services"), // This will allow you to use '@services' as an alias for 'src/services'
      "@store": path.resolve(__dirname, "src/store"), // This will allow you to use '@store' as an alias for 'src/store'
    },
  },
  plugins: [react(), tailwindcss()],
});
