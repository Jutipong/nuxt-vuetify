<template>
  <ClientOnly>
    <Teleport to="body">

      <v-app>
        <LayoutsHeader />
        <LayoutsNavigation />
        <v-main>
          <slot></slot>
        </v-main>
      </v-app>

    </Teleport>
  </ClientOnly>
</template>