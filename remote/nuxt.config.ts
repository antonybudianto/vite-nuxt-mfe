import { defineNuxtConfig } from 'nuxt/config'
import federation from '@originjs/vite-plugin-federation'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  vite: {
    plugins: [
      federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        exposes: {
          './RemoteComponent': './components/RemoteComponent.vue'
        },
        shared: []
        // shared: ['vue']
      })
    ],
    build: {
      target: 'esnext'
    }
  }
})