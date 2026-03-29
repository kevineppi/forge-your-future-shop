import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Minimize CSS
    cssMinify: true,
    // Smaller chunks = faster loading
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core vendors – consolidated to minimize JS file count
          'vendor': [
            'react', 'react-dom', 'react-router-dom',
            '@radix-ui/react-accordion', '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu', '@radix-ui/react-tooltip',
            '@radix-ui/react-select', '@radix-ui/react-tabs',
            'react-hook-form', '@hookform/resolvers', 'zod',
            '@supabase/supabase-js',
          ],
          // Three.js – large, lazy-loaded separately
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
}));
