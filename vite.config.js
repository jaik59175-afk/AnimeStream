import {defineConfig} from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api/jikan': {
        target: 'https://api.jikan.moe',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/jikan/, '/v4'),
      },
    },
  },
});
