import ReactRefreshPlugin from '@vitejs/plugin-react-refresh';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';

export default {
    plugins: [
      ReactRefreshPlugin(),
      ViteIcons(),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      open: '/',
      port: 3000,
    },
    build: {
      outDir: 'dist',
    },
  };
  
