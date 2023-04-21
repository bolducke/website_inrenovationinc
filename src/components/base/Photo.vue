<template>
  <div>
    <v-hover v-slot:default="{hover}">
      <base-img
        :class=" hover ? 'elevation-22' : ''"
        :src="thumbnail"
        v-bind="$attrs"
        v-on="$listeners"
        @click="overlay = !overlay"
      >
        <slot name="thumbnail"></slot>
      </base-img>
    </v-hover>

    <v-overlay :value="overlay" opacity="0.9">
      <v-container>
        <v-row v-if="!loading">
          <v-spacer />
          <v-btn icon @click="overlay = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>

        <v-row align="center" justify="center">
          <v-img
            @load="() => {this.loading = false}"
            v-click-outside="quit"
            :src="src"
            max-width="90vw"
            max-height="90vh"
          >
            <slot></slot>
          </v-img>
        </v-row>
      </v-container>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: {
    src: String,
    thumbnail: String,
  },
  mounted() {
    if (!this.thumbnail) {
      this.thumbnail = this.src;
    }
  },
  data: () => ({
    overlay: false,
    loading: true,
  }),
  methods: {
    loaded() {
      this.loading = false
    },
    quit() {
      this.overlay = false
    },
  },
};
</script>