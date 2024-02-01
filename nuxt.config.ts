// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ['stores', 'utils', 'utils/constants'],
  },
  modules: [
    "vuetify-nuxt-module",
    "@pinia/nuxt"
  ]
})
