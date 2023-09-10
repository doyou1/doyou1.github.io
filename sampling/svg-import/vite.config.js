import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  modules: {
    rules: [
      {
        test: /\.svg/,
        type: "assets/icons",
      }
    ],
  },
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  plugins: [react()],
})
