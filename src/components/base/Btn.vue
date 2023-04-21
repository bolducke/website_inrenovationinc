<template>
  <v-btn
    :color="color"
    :depressed="depressed"
    :min-width="minWidth"
    :outlined="outlined"
    :rounded="rounded"
    class="font-weight-bold"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',

    props: {
      outlined: {
        type: Boolean,
        default: true,
      },
      color: {
        type: String,
        default: 'primary',
      },
      depressed: {
        type: Boolean,
        default: true,
      },
      minWidth: {
        type: [Number, String],
        default: 164,
      },
      rounded: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>
