// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    keepalive: true,
    pageTransition: false,
    layoutTransition: false
  },
  devtools: { enabled: false },
  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
    },
    ssr: {
      optimizeDeps: {
        exclude: ['vuetify'],
      },
      noExternal: ["vuetify"]
    }
  },
  imports: {
    dirs: ['stores', 'utils', 'utils/constants'],
  },
  modules: [
    "vuetify-nuxt-module",
    "@pinia/nuxt"
  ],
  build: {
    transpile: ['vue-toastification']
  },
  vuetify: {
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
        },
        VCard: {
          variant: 'flat',
          class: 'mb-3 pa-1',
          VBtn: {
            variant: 'flat',
          },
        },
        VCardTitle: {},
        VCardText: {
          class: 'ma-1',
          VSelect: {
            clearable: true,
            variant: 'outlined',
            density: 'compact',
            color: 'primary',
            hideDetails: 'auto',
            dirty: true,
            itemTitle: 'text',
            itemValue: 'id',
          },
        },
        VCardActions: {
          class: 'mt-1 mr-2 ml-2',
          VBtn: {
            variant: 'flat',
            class: 'pl-4 pr-4',
          },
        },
        VTextField: {
          clearable: true,
          hideDetails: 'auto',
          density: 'compact',
          color: 'primary',
          dirty: true,
          variant: 'outlined',
        },
        VAutocomplete: {
          variant: 'outlined',
          density: 'compact',
          color: 'primary',
          hideDetails: 'auto',
        },
        VCombobox: {
          variant: 'outlined',
          density: 'compact',
          color: 'primary',
          hideDetails: 'auto',
        },
        VFileInput: {
          variant: 'outlined',
          density: 'compact',
          color: 'primary',
          hideDetails: 'auto',
        },
        VTextarea: {
          variant: 'outlined',
          density: 'compact',
          color: 'primary',
          hideDetails: 'auto',
        },
        VSwitch: {
          color: 'primary',
          hideDetails: 'auto',
        },
        VDataTableServer: {
          color: 'primary',
          density: 'compact',
          hover: true,
          VSelect: {
            clearable: false,
            variant: 'outlined',
            density: 'compact',
            itemTitle: 'title',
            itemValue: 'value',
          },
        },
        VCheckbox: {
          color: 'primary',
          density: 'compact',
          hideDetails: 'auto',
        },
        VRadioGroup: {
          color: 'primary',
          density: 'compact',
          hideDetails: 'auto',
        },
        VRadio: {
          density: 'compact',
          hideDetails: 'auto',
        },
        VTabs: {
          color: 'primary',
        },
        VChip: {
          elevation: 0,
          label: true,
        },
      },
    },
  },
})