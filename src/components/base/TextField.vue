<template>
  <v-text-field
    outlined
    shaped
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot
      slot="append-outer"
      name="append-outer"
    />
  </v-text-field>
</template>

<script>
  export default {
    name: 'BaseTextField',
  }
</script>

<style lang="sass">
  //
</style>
