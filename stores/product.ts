export const useProductStore = defineStore('product', () => {
  const state = reactive({
    data: {
      status: null,
    },
    master: {
      status: [
        { id: true, text: 'Active' },
        { id: false, text: 'InActive' },
      ],
    },
  })

  return { state }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
