import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, {
        transition: 'Vue-Toastification__bounce',
        timeout: 5000,
        maxToasts: 9,
        newestOnTop: true,
    })
})
