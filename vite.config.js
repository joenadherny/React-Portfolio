import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteIcons()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});

  
