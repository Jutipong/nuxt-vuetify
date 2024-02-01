<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage :page-key="(route) => route.fullPath" />
  </NuxtLayout>
</template>