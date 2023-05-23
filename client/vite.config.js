import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react(),VitePWA(
    {
      manifest:{
        icons:[{
          src:"/icons/.png",
          sizes: "512x512",
          type:"image/png",
          purpose: "any maskable"
        }]
      }
      ,devOptions:{
        enabled:true
      }
      ,plugins:[
        VitePWA({registerType:'autoUpdate'})
      ]
    }
  )],
})
