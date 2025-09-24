import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],

   server: {
    port: 3000,   // 👈 set your custom port here
    open: true,    // 👈 browser auto-opens on run
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "0384396684bc.ngrok-free.app"  // 👈 your ngrok domain
    ]

    
  }
})
