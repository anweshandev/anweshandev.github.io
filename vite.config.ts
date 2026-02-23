import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1600,
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
      minify: 'terser',
      outDir: "build",
      sourcemap: true,
      rollupOptions: {
      output: {
        manualChunks: (path) => path.split('/').reverse()[path.split('/').reverse().indexOf('node_modules') - 1]
      },
    },
  }
})
