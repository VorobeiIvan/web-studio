import { defineConfig } from 'vite';

export default defineConfig({
  base:'/web-studio/',
  publicDir:'./assets',
  server: {
    open: true,
  },
});

