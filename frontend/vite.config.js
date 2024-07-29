import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: process.env.PORT || 3000,
        host: true, // This allows external connections
    },
    plugins: [
        react()
      ]
})
