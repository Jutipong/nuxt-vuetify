<template>
  <ClientOnly>

    <Teleport to="body">


      <v-app>
        <LayoutsHeader />
        <LayoutsNavigation />
        <v-main>
          <!-- <v-container fluid> -->
          <slot></slot>
          <!-- </v-container> -->
        </v-main>
      </v-app>

    </Teleport>
  </ClientOnly>
</template>