<template>
  <div>
    <v-system-bar app dark class="text-caption text-sm-h6">
        <div class='ml-1'>
          Estimation gratuite
        </div>
        <v-spacer></v-spacer>
        <div class='mr-2 mr-sm-10' v-for="(info,infoIndex) in $store.state.infos.slice(1,3)" :key='infoIndex'>
            <v-icon>{{info.icon}}</v-icon><span v-html='info.content'/>
        </div>
    </v-system-bar>

    <v-app-bar app class='justify-start'>     

            <router-link :to="{name: 'home'}" class="pa-0 pr-6 justify-start">
                <img width="50%" src="@/assets/logo.png" />
            </router-link>

            <v-btn
            v-for="(link, linkIndex) in links"
            :key="linkIndex"
            :to="{name: link.to}"
            text
            class="title hidden-sm-and-down"
            >{{ link.name }}</v-btn>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


    </v-app-bar>


    <v-navigation-drawer v-model="drawer" fixed right class="hidden-md-and-up grey darken-1">
      <v-list nav>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="display-1">
              <v-row justify="center" class="py-12">
                <v-col cols="9" align="center" class="pa-0 ma-0"></v-col>
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item link :to="{name: 'home'}" exact>
          <v-list-item-avatar></v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-for="link in links" :key="link.name" :to="link.to">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>


export default {
  components: {},
  data: () => ({
    drawer: false,
    links: [
      { name: "Services", to: "services" },
      { name: "À propos", to: "about" },
      { name: "Contactez-nous", to: "contactus" }
    ], 
  }),
};
</script>

<style lang="scss" scoped>
.noeffect {
  &:hover,
  &.v-btn:before {
    background-color: transparent;
  }
}
.underline {
  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    bottom: 0;
    left: 50%;
    position: absolute;
    background: var(--v-accent-base);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover,
  &.v-btn--active {
    color: var(--v-accent-base) !important;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
}
</style>