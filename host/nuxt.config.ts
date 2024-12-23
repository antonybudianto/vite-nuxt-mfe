import { defineNuxtConfig } from "nuxt/config"
import federation from "@originjs/vite-plugin-federation"
import topLevelAwait from "vite-plugin-top-level-await"

const MFE_HOST = process.env.NUXT_MFE_APP1_HOST

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: "static"
  },
  vite: {
    server: {
      proxy: {
        "^/node_modules/.*": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(/^\/node_modules\//, "/_nuxt/node_modules/")
        }
      }
    },
    $client: {
      plugins: [
        topLevelAwait({
          promiseExportName: "__tla",
          promiseImportName: (i) => `__tla_${i}`
        }),
        federation({
          name: "host-app",
          remotes: {
            remote: `${MFE_HOST}/_nuxt/remoteEntry.js`
          },
          shared: ["vue"]
        })
      ]
    },
    $server: {
      plugins: []
    }
  },
  experimental: {
    asyncEntry: true
  }
})
