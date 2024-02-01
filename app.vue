<script setup lang="ts">
const $g = useGlobalStore()
</script>


<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage :page-key="(route) => route.fullPath" />


    <!-- util component -->
    <BaseConfirm />
    <v-overlay v-model="$g.isLoading" class="align-center justify-center" persistent>
      <v-card>
        <v-card-text class="text-center">
          <v-progress-circular size="32" color="green" indeterminate />
          <p class="mt-2">
            Loading....
          </p>
        </v-card-text>
      </v-card>
    </v-overlay>
  </NuxtLayout>
</template>