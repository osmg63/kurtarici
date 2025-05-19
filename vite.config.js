import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ÖZEL DOMAINDE MUTLAKA BU OLMALI
  plugins: [react()],
})
