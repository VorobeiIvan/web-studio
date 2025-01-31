import { defineConfig } from 'vite';

export default defineConfig({
  base:'/web-studio/',
  publicDir:'./public/assets',
  server: {
    open: true,
  },
});

