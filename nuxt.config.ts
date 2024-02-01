// import { LightTheme } from "./vuefity/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    keepalive: true,
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  imports: {
    dirs: ['stores', 'utils', 'utils/constants'],
  },
  modules: [
    "vuetify-nuxt-module",
    "@pinia/nuxt"
  ],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
      },
      theme: {
      },
      defaults: {
        VContainer: {
          fluid: true,
        },
        VBtn: {
          variant: 'flat',
          rounded: '0',
        },
        VCard: {
          VBtn: {
            variant: 'flat',
            rounded: '0',
          },
        },
        VCardActions: {
          VBtn: {
            variant: 'flat',
            rounded: '0',
          },
        },
        VTextField: {
          hideDetails: 'auto',
          density: 'compact',
          dirty: true,
          variant: 'outlined',
        },
        VDataTableServer: {
          density: 'comfortable',
          hover: true,
        },
      },
    },
  },
})
