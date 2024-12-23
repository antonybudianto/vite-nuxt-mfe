import { defineNuxtConfig } from "nuxt/config"
import federation from "@originjs/vite-plugin-federation"
import topLevelAwait from "vite-plugin-top-level-await"

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: "static"
  },
  vite: {
    $client: {
      plugins: [
        topLevelAwait({
          promiseExportName: "__tla",
          promiseImportName: (i) => `__tla_${i}`
        }),
        federation({
          name: "remote-app",
          filename: "remoteEntry.js",
          exposes: {
            "./RemoteContactRouter": "./components/RemoteContactRouter.vue"
          },
          // shared: []
          shared: ["vue"]
        })
      ]
    },
    $server: {
      plugins: []
    }

    // build: {
    //   target: "esnext"
    // }
  },
  experimental: {
    asyncEntry: true
  }
})
