<i18n>
{
  "en": {
    "views": [
      {
        "name": "Home"
      },
      {
        "name": "Services"
      },
      {
        "name": "Contact Us"
      }
    ]
  },
  "fr": {
     "views": [
      {
        "name": "Accueil"
      },
      {
        "name": "Services"
      },
      {
        "name": "Nous rejoindre"
      }
    ]
  }
}
</i18n>

<template>
  <div>
    <v-app-bar id="main-app-bar" app color="white" elevation="2" height="80">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

      <v-btn text :to="{ name: 'Home' }" :ripple="false" color="transparent">
        <base-img
          :src="require('@/assets/logo.png')"
          alt="Rénovation Montréal I.N inc"
          class="mr-3"
          :max-width="this.$vuetify.breakpoint.mdAndUp ? '150' : '100'"
          width="100%"
        ></base-img>
      </v-btn>

      <v-spacer />

      <div class="hidden-sm-and-down">
        <v-tabs optional>
          <v-tab
            v-for="({ name, to }, i) in views"
            :key="i"
            :to="{ name: to }"
            :exact="i === 0"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold mx-4"
            min-width="96"
            text
            >{{ name }}</v-tab
          >
        </v-tabs>
      </div>
    </v-app-bar>

    <main-navigation-drawer v-model="drawer" :items="views" />
  </div>
</template>

<script>
export default {
  name: "MainAppBar",
  components: {
    MainNavigationDrawer: () => import("./NavigationDrawer"),
  },

  data() {
    return {
      drawer: null,
    };
  },
  computed: {
    views() {
      return [
        {
          to: "Home",
        },
        {
          to: "Services",
        },
        {
          to: "Contact",
        },
      ].map((v, i) => ({
        ...v,
        ...this.$i18n.t("views")[i],
      }));
    },
  },
};
</script>

<style lang="scss">
#main-app-bar .v-tabs-slider {
  max-width: 24px;
  margin: 0 auto;

  .v-tab &::before {
    display: none;
  }
}
</style>
