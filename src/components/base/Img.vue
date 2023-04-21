<template>
  <v-img
    v-bind="$attrs"
    v-on="$listeners"
    elevation-10
  >
    <slot />
  </v-img>
</template>

<script>
  export default {
    name: 'BaseImage',
  }
</script>
