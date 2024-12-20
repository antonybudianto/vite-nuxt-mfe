import { defineNuxtConfig } from 'nuxt/config'
import federation from '@originjs/vite-plugin-federation'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  vite: {
    plugins: [
      federation({
        name: 'host-app',
        remotes: {
          remote: 'http://localhost:3001/_nuxt/remoteEntry.js',
        },
        // shared: ['vue']
      })
    ],
    build: {
      target: 'esnext'
    }
  }
})