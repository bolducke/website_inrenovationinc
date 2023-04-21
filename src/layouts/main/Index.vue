<template>
  <v-app>
    <main-system-bar />

    <main-app-bar />

    <main-view />

    <main-footer />

  </v-app>
</template>

<script>
  export default {
    name: 'MainLayout',

    components: {
      MainAppBar: () => import('@/layouts/main/AppBar'),
      MainFooter: () => import('@/layouts/main/Footer'),
      MainSystemBar: () => import('@/layouts/main/SystemBar'),
      MainView: () => import('@/layouts/main/View'),
    },
  }
</script>
