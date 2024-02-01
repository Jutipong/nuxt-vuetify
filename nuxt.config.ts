// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false
  },
  devtools: { enabled: false },
  imports: {
    dirs: ['stores', 'utils', 'utils/constants'],
  },
  modules: [
    "vuetify-nuxt-module",
    "@pinia/nuxt"
  ],
  vuetify: {
    moduleOptions: {
      importComposables: true,
    },
    vuetifyOptions: {
      labComponents: true,
      icons: {
        defaultSet: 'mdi',
      },
      theme: {
        themes: {
          light: {
            colors: {
              background: '#E0E0E0',
              surface: '#fbfbfb',
              primary: '#5D87FF',
              secondary: '#8A8D93',
              error: '#FF4C51',
              info: '#16B1FF',
              success: '#4CAF50',
              warning: '#FB8C00',
            },
          },
        }
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
