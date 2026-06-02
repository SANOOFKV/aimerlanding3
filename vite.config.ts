import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: true,
  },
  build: {
    // Inline small assets (< 8KB) as base64 to reduce HTTP requests
    assetsInlineLimit: 8192,
    // Minify HTML/JS output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,  // Keep console for CRM error logging
        drop_debugger: true,
        passes: 2,
      },
    },
    // Optimize CSS
    cssMinify: true,
    // Generate source maps for debugging (won't affect prod performance)
    sourcemap: false,
    // Asset file naming with hash for cache busting
    rollupOptions: {
      input: {
        main: 'index.html',
        thankYou: 'thank-you.html',
        v2: 'v2.html',
        v2ThankYou: 'v2-thank-you.html'
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
