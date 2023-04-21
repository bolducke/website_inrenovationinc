<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10" md="12">
        <v-card flat outlined width="80vw">
          <v-hover v-slot:default="{ hover }" x>
            <v-window
              v-model="selected"
              continuous
              :class="hover ? 'elevation-22' : ''"
            >
              <v-window-item
                class="gallery-fit"
                v-for="(item, i) in items"
                :key="i"
              >
                <v-row>
                  <v-row align="center" justify="center" class="grey lighten-2">
                    <v-img
                      contain
                      :src="item.thumbnail"
                      @click="overlay = !overlay"
                      class="asd"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-row>
                </v-row>
              </v-window-item>
            </v-window>
          </v-hover>

          <v-card-actions class="justify-space-between">
            <v-btn text @click="prev">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn outlined text @click="overlay = !overlay"> ZOOM </v-btn>
            <v-btn text @click="next">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-overlay
      id="overlay-photo"
      class="overflow-y-auto"
      :value="overlay"
      opacity="1"
      z-index="10"
      v-scroll="quitAfterDelay"
    >
      <v-row class="pr-sm-10 pr-5 mt-0 toolbar">
        <v-spacer/>
        <v-btn icon @click="overlay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>

      <v-row class="full-content ml-0">
        <v-row justify="center" align="center" class="my-0">
          <v-card flat>
            <v-window continuous class="gallery-fit" v-model="selected">
              <v-window-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              >
                <v-img contain :src="item.src" height="80vh" width="80vw">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-window-item>
            </v-window>

            <v-card-actions class="justify-space-between hidden-sm-and-down">
              <v-btn text @click="prev">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn text @click="next">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    items: {
      type: Array,
    },
    width: String,
    height: String,
  },
  data: () => ({
    selected: 0,
    counter: 0,
    overlay: false,
  }),
  methods: {
    quit() {
      this.overlay = false;
    },
    next() {
      this.selected =
        this.selected + 1 === this.items.length ? 0 : this.selected + 1;
    },
    prev() {
      this.selected =
        this.selected - 1 < 0 ? this.items.length - 1 : this.selected - 1;
    },
    quitAfterDelay() {
      if (this.overlay) {
        this.counter += 1;
        if (this.counter > 5) {
          this.quit();
          this.counter = 0;
        }
      }
    },
  },
  watch: {
    async counter(val) {
      if (val == 1) {
        await new Promise((r) => setTimeout(r, 500));
        this.counter = 0;
      }
    },
  },
};
</script>

<style lang="scss">
.asd {
  width: 100%;
  height: 300px;
  max-height: 50vh;
}

.gallery-fit {
  overflow: hidden;

  .v-responsive__content {
    width: 0px !important;
  }
}

.toolbar {
  opacity: 0.9;
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
}

.full-content,
#overlay-photo > .v-overlay__content {
  width: 100vw;
  height: 100vh;
  position: fixed;
}
</style>
