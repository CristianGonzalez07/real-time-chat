import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';


// https://vitejs.dev/config/
export default defineConfig(() => {
  dotenv.config()
  return {
    plugins: [react()],
  }
})
