export const useGlobalStore = defineStore('global', () => {
  const loadings = ref(0)

  const isLoading = computed(() => loadings.value > 0)

  function setLoading() {
    loadings.value++
  }

  function unLoading() {
    loadings.value--
  }

  function resetLoading() {
    loadings.value = 0
  }

  return {
    isLoading,
    setLoading,
    unLoading,
    resetLoading,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}