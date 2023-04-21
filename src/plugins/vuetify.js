// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import {
  VCol,
  VRow,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow
  },
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#ffa712',
        secondary: '#ffa712',
      },
      dark: {
        primary: '#fcf230',
        accent: '#eba800',
      },
    },
  },
})
