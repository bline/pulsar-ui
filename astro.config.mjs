import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Ensures a fully static build
  integrations: [],
  vite: {
    build: {
      lib: {
        entry: './src/index.js', // Entry point for library exports
        name: 'PulsarUI',
        fileName: 'pulsar-ui',
      },
      rollupOptions: {
        external: ['astro'], // External dependencies
      },
    },
  },
});
