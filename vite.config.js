import { defineConfig } from 'vite';

export default defineConfig({
  base: '/web-studio/',
  publicDir: './public/assets',  // якщо ти хочеш, щоб інші статичні файли брались з public
  server: {
    open: true,
  },
});

