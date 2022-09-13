<template>
    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item v-for="{ icon, title, link } in navItems" :key="link" :to="link">
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { useSystemStore } from '@/stores/system'
const store = useSystemStore()
const drawer = computed({
  get: () => store.drawer,
  set: (val) => store.drawer = val
})
const navItems = ref([
  {
    icon: 'fas fa-home',
    title: 'Home',
    link: '/',
  },
  {
    icon: 'fas fa-dice',
    title: 'Games',
    link: '/games',
  },
  {
    icon: 'fas fa-chess-rook',
    title: 'Plays',
    link: '/plays',
  },
  {
    icon: 'fas fa-users',
    title: 'Friends',
    link: '/friends',
  },
]);
</script>
