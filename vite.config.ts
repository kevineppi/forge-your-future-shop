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
          // Core React runtime – tiny, always needed
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Radix UI – large but only needed for interactive components
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
          ],
          // Forms
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Supabase – only used in pages that need auth/DB
          'supabase': ['@supabase/supabase-js'],
          // Three.js – very large, isolated so it never blocks initial paint
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // Charts
          'chart-vendor': ['recharts'],
        },
      },
    },
  },
}));
