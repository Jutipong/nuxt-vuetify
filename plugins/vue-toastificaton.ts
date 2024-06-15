import Toast from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    const options: PluginOptions = {
        transition: 'Vue-Toastification__bounce',
        timeout: 5000,
        maxToasts: 9,
        newestOnTop: true,
    };
    const plugin = (app: any, options: PluginOptions) => {
        app.use(Toast, options);
    };
    nuxtApp.vueApp.use(plugin, options);
})
