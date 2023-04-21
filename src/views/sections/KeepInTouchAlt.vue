<template>
  <v-theme-provider dark>
    <KeepInTouch class="grey darken-4"> </KeepInTouch>
  </v-theme-provider>
</template>

<script>
export default {
    name: 'SectionKeepInTouchAlt',
    components: {
      KeepInTouch: () => import('./KeepInTouch.vue') 
    },
  }
</script>
