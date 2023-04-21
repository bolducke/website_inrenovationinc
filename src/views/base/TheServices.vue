<template>
  <div class="about">
        <v-img
        height="400"
          src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />

    <v-container>
      <v-tabs v-model="tab" grow>
        <v-tab v-for="(item,itemIndex) in $store.state.services" :key="itemIndex">{{ item.name }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <General/>
        </v-tab-item>

                        <v-tab-item>
          <Kitchen/>
        </v-tab-item>

                <v-tab-item>
          <Bathroom/>
        </v-tab-item>

                                <v-tab-item>
          <Outside/>
        </v-tab-item>

      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import General from './TheServicesGeneral'
import Bathroom from './TheServicesBathroom'
import Kitchen from './TheServicesKitchen'
import Outside from './TheServicesOutside'


export default {
  components: {
    General,
    Bathroom,
    Kitchen,
    Outside
  },
  data: () => ({
    tab: null,
  }),
};
</script>
