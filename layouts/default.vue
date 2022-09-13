<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Game-Track</v-toolbar-title>
    </v-app-bar>

    <nav-list></nav-list>

    <v-main class="bg-grey-lighten-2">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import NavList from '@/components/nav.vue'
import { useSystemStore } from '@/stores/system'
const store = useSystemStore()
const drawer = computed({
  get: () => store.drawer,
  set: (val) => store.drawer = val
})
</script>
